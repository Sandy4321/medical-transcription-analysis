import React from 'react';

import cs from 'clsx';
import s from './Header.module.css';

import { STAGE_HOME, STAGE_TRANSCRIBING, STAGE_TRANSCRIBED, STAGE_SUMMARIZE, STAGE_EXPORT } from '../consts';

export default function Header({
  stage,
  onHome,
  onAnalyze,
  onHideAnalysis,
  onShowExport,
  onHideExport,
  onReset
}) {
  return (
    <>
      <header className={cs(s.base, s.visible)}>
          <div className={s.left}>
          {stage !== STAGE_HOME && stage !== STAGE_SUMMARIZE && stage !== STAGE_EXPORT ?
            <button onClick={onHome}><span />Home</button>
          : null}
          {stage === STAGE_SUMMARIZE ?
            <button onClick={onHideAnalysis}><span />Back</button>
          : null}
          {stage === STAGE_EXPORT ?
            <button onClick={onHideExport}><span />Back</button>
          : null}

          <a href="https://aws.amazon.com/machine-learning/ "><img className={s.logo} src={require('../img/logo_awsml_01.svg')} /></a>
        </div>
        <div className={s.headings}>
        <h1>Medical Transcription Analysis</h1> 
        </div>
        <div className={s.right}>
          {stage === STAGE_TRANSCRIBED || stage === STAGE_TRANSCRIBING ?
            <button disabled={stage === STAGE_TRANSCRIBING} onClick={onAnalyze}>Analyze</button>
          : null}
          {stage === STAGE_SUMMARIZE ?
            <button onClick={onShowExport}>Summarize</button>
          : null}
          {stage === STAGE_EXPORT ?
            <button onClick={onReset}>Start over</button>
          : null}
        </div>
      </header>
    </>
  )
}
