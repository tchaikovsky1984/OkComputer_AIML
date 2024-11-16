import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AkhilTiral.module.css';
import { TableRow_Property1Default } from './TableRow_Property1Default/TableRow_Property1Default';
import { UploadFileSvgrepoCom1Icon } from './UploadFileSvgrepoCom1Icon';
import { UploadFileSvgrepoCom1Icon2 } from './UploadFileSvgrepoCom1Icon2';

interface Props {
  className?: string;
}
/* @figmaId 1:19 */
export const AkhilTiral: FC<Props> = memo(function AkhilTiral(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame}>
        <div className={classes.frame14}>
          <TableRow_Property1Default classes={{ line2: classes.line2 }} />
          <TableRow_Property1Default classes={{ line2: classes.line22 }} />
          <TableRow_Property1Default classes={{ line2: classes.line23 }} />
          <TableRow_Property1Default classes={{ line2: classes.line24 }} />
          <TableRow_Property1Default classes={{ line2: classes.line25 }} />
          <TableRow_Property1Default classes={{ line2: classes.line26 }} />
          <TableRow_Property1Default classes={{ line2: classes.line27 }} />
          <TableRow_Property1Default classes={{ line2: classes.line28 }} />
          <TableRow_Property1Default classes={{ line2: classes.line29 }} />
        </div>
        <div className={classes.leftPane}>
          <div className={classes.container}>
            <div className={classes.uploadYourResume}>Upload your Resume</div>
            <div className={classes.border}>
              <div className={classes.container2}>
                <button className={classes.button}>
                  <div className={classes.send_sparkSvg}>
                    <div className={classes.send_sparkSvgFill}>
                      <div className={classes.uploadFileSvgrepoCom1}>
                        <UploadFileSvgrepoCom1Icon className={classes.icon} />
                      </div>
                    </div>
                  </div>
                  <div className={classes.browse}>Browse</div>
                </button>
                <div className={classes.dropYourFilesHereOr}>Drop your files here or</div>
              </div>
            </div>
            <div className={classes.preferredJob}>Preferred Job</div>
            <div className={classes.border2}>
              <div className={classes.container3}></div>
              <div className={classes.internSoftwareEngineerDataScie}>Intern, Software Engineer, Data Scientist</div>
            </div>
            <div className={classes.preferredLocation}>Preferred Location</div>
            <div className={classes.border3}>
              <div className={classes.container4}></div>
              <div className={classes.bangaloreIndiaAmsterdamNetherl}>
                <div className={classes.textBlock}>Bangalore, India</div>
                <div className={classes.textBlock2}>Amsterdam, Netherlands</div>
              </div>
            </div>
            <div className={classes.rectangle}></div>
            <div className={classes.searchDomain}>Search Domain</div>
            <div className={classes.frame2}>
              <div className={classes._1}>1</div>
              <div className={classes.input}>
                <div className={classes.background}></div>
              </div>
              <div className={classes._3000}>3000</div>
            </div>
            <button className={classes.button2}>
              <div className={classes.send_sparkSvg2}>
                <div className={classes.send_sparkSvgFill2}>
                  <div className={classes.uploadFileSvgrepoCom12}>
                    <UploadFileSvgrepoCom1Icon2 className={classes.icon2} />
                  </div>
                </div>
              </div>
              <div className={classes.submit}>Submit</div>
            </button>
          </div>
        </div>
        <div className={classes.header}>
          <div className={classes.okComputer}>OkComputer</div>
        </div>
      </div>
    </div>
  );
});
