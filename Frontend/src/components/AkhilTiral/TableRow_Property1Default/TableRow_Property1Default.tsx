import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TableRow_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    line2?: string;
  };
}
/* @figmaId 1:3 */
export const TableRow_Property1Default: FC<Props> = memo(function TableRow_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.overlay}>
        <div className={classes.frame1}>
          <div className={classes.cSS}>CSS</div>
        </div>
        <div className={classes.frontEndDeveloper}>Front End Developer</div>
        <div className={classes.atGoldmanSachsBangalore}>At Goldman Sachs, Bangalore</div>
      </div>
      <div className={`${props.classes?.line2 || ''} ${classes.line2}`}></div>
    </div>
  );
});
