import pandas as pd
import datetime

def preprocess_resume(text):
    tokens = word_tokenize(text.lower())
    tokens = [
        word for word in tokens
        if word not in stop_words and word not in punctuation and word.isalnum()
    ]
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    return ' '.join(tokens)

def scraper(jobtitle=None,pref_country=None,pref_area=None,no_of_output=300):
  if jobtitle==None:
    if pref_country==None:
      if pref_area==None:
        jobs = scrape_jobs(
          site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
          results_wanted=no_of_output,
          hours_old=72,
          )
      else:
        jobs = scrape_jobs(
          site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
          results_wanted=no_of_output,
          hours_old=72,
          location=pref_area
          )
    else:
      if pref_area==None:
        jobs = scrape_jobs(
          site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
          results_wanted=no_of_output,
          hours_old=72,
          country_indeed=pref_country
          )
      else:
        jobs = scrape_jobs(
          site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
          results_wanted=no_of_output,
          hours_old=72,
          country_indeed=pref_country,
          location=pref_area
          )
  else:
    if pref_country==None:
      if pref_area==None:
        jobs = scrape_jobs(
          site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
          search_term=jobtitle,
          google_search_term=jobtitle,
          results_wanted=no_of_output,
          hours_old=72,
          )
      else:
        jobs = scrape_jobs(
          site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
          search_term=jobtitle,
          google_search_term=jobtitle,
          results_wanted=no_of_output,
          hours_old=72,
          location=pref_area
          )
    else:
      if pref_area==None:
        jobs = scrape_jobs(
          site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
          search_term=jobtitle,
          google_search_term=jobtitle,
          results_wanted=no_of_output,
          hours_old=72,
          country_indeed=pref_country
          )
      else:
        jobs = scrape_jobs(
          site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
          search_term=jobtitle,
          google_search_term=jobtitle,
          results_wanted=no_of_output,
          hours_old=72,
          country_indeed=pref_country,
          location=pref_area,
          )
  return jobs


def preprocess_scraped_data(jobs):
    new_jobs=jobs.copy()
    new_jobs['combined_text'] = new_jobs.drop(columns=['id','site', 'job_url', 'job_url_direct', 'date_posted', 'emails', 'company_url', 'company_logo', 'company_url_direct']).astype(str).apply(' '.join, axis=1)
    new_jobs['preprocessed_text'] = new_jobs['combined_text'].apply(preprocess_resume)
    new_jobs = new_jobs.drop_duplicates(subset=['combined_text'])
    return new_jobs

def predict(new_jobs, new_text):
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform(new_jobs['preprocessed_text'])

    def recommend_jobs(new_text, top_n=150):
        candidate_vector = vectorizer.transform([new_text.lower()])
        similarities = cosine_similarity(candidate_vector, tfidf_matrix)
        sorted_indices = similarities.argsort()[0][::-1]
        return new_jobs.iloc[sorted_indices[:top_n]]
    return recommend_jobs(new_text, top_n=80)

def match_skills(job_data, resume_text, skill_set):
    result = {}
    user_skills = extract_skills(resume_text, skill_set)

    for _, row in job_data.iterrows():
        job_id = row['id']
        job_description = row['combined_text']

        job_skills = extract_skills(job_description, skill_set)
        matched_skills = [skill for skill in job_skills if skill in user_skills]
        missing_skills = [skill for skill in job_skills if skill not in user_skills]

        result[job_id] = [matched_skills, missing_skills]

    filtered_result = {job_id: skills for job_id, skills in result.items()
                       if len(skills[0]) - len(skills[1]) >= 0 and len(skills[0])>0}

    return filtered_result

def main(new_jobs, job_title=None, jobs = None, filepath=''):
    #resume_text = ResumeReader(filepath)
    resume_text = filepath
    preprocessed_resume = preprocess_resume(resume_text)

    recommended_jobs = predict(new_jobs, preprocessed_resume)

    skill_matches = match_skills(recommended_jobs, preprocessed_resume, SKILL_SET)
    recommended_jobs = recommended_jobs[recommended_jobs['id'].isin(skill_matches.keys())]
    return recommended_jobs

def test(jobs, resumes):
    t = datetime.datetime.now()
# create file with t as name for saving test output
    new_jobs = preprocess_scraped_data(jobs)
    dist = [float('inf')] * len(resumes)
    vect = CountVectorizer(stop_words="english", binary=True)
    co = 0
    for i in range(len(resumes)):
        resume_text = preprocess_resume(resumes['Resume'].iloc[i])
        rec_jobs = main(new_jobs = new_jobs, filepath = resume_text)
        disti = [float('inf')] * len(rec_jobs)
        co += len(rec_jobs)
        for j in range(len(rec_jobs)):
            job_text = rec_jobs['preprocessed_text'].iloc[j]
            doc = vect.fit_transform([resume_text, job_text])
            disti[j] =  euclidean_distances(doc)[0,1]
        if(len(disti) > 0):
            dist[i] = np.mean(disti)
        else:
            dist[i] = float('inf')
        print(f"Resume {i} : {dist[i]}")
    return dist, co
