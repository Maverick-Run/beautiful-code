import React, {useState} from 'react'
import './settings.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as Styles from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function Settings({ selected, setSelected, handleCapture, language, setLanguage }) {
  const [selectedOption, setSelectedOption] = useState(selected);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  React.useEffect(() =>{
    setSelected(selectedOption);
  },[selectedOption]);
  React.useEffect(() =>{
    setLanguage(selectedLanguage);
  },[selectedLanguage])
  return (
    <div className='settings'>
      <div className="custom-select">
      <label htmlFor="colourscheme" className='inputlabel'>Style</label>
        <div className="select-button" onClick={() => {
          document.querySelector('.colourscheme').classList.toggle('visible');
        }}>{selectedOption}</div>
        <ul className="options-list colourscheme" onClick={(e) => {
          console.log(e);
          setSelectedOption(e.target.textContent);
          document.querySelector('.colourscheme').classList.toggle('visible');
        }}>
          <li className="option" value={Styles["a11yDark"]}>a11yDark</li>
          <li className="option" value={Styles["a11yLight"]}>a11yLight</li>
          <li className="option" value={Styles["agate"]}>agate</li>
          <li className="option" value={Styles["anOldHope"]}>anOldHope</li>
          <li className="option" value={Styles["androidstudio"]}>androidstudio</li>
          <li className="option" value={Styles["arduinoLight"]}>arduinoLight</li>
          <li className="option" value={Styles["arta"]}>arta</li>
          <li className="option" value={Styles["ascetic"]}>ascetic</li>
          <li className="option" value={Styles["atelierCaveDark"]}>atelierCaveDark</li>
          <li className="option" value={Styles["atelierCaveLight"]}>atelierCaveLight</li>
          <li className="option" value={Styles["atelierDuneDark"]}>atelierDuneDark</li>
          <li className="option" value={Styles["atelierDuneLight"]}>atelierDuneLight</li>
          <li className="option" value={Styles["atelierEstuaryDark"]}>atelierEstuaryDark</li>
          <li className="option" value={Styles["atelierEstuaryLight"]}>atelierEstuaryLight</li>
          <li className="option" value={Styles["atelierForestDark"]}>atelierForestDark</li>
          <li className="option" value={Styles["atelierForestLight"]}>atelierForestLight</li>
          <li className="option" value={Styles["atelierHeathDark"]}>atelierHeathDark</li>
          <li className="option" value={Styles["atelierHeathLight"]}>atelierHeathLight</li>
          <li className="option" value={Styles["atelierLakesideDark"]}>atelierLakesideDark</li>
          <li className="option" value={Styles["atelierLakesideLight"]}>atelierLakesideLight</li>
          <li className="option" value={Styles["atelierPlateauDark"]}>atelierPlateauDark</li>
          <li className="option" value={Styles["atelierPlateauLight"]}>atelierPlateauLight</li>
          <li className="option" value={Styles["atelierSavannaDark"]}>atelierSavannaDark</li>
          <li className="option" value={Styles["atelierSavannaLight"]}>atelierSavannaLight</li>
          <li className="option" value={Styles["atelierSeasideDark"]}>atelierSeasideDark</li>
          <li className="option" value={Styles["atelierSeasideLight"]}>atelierSeasideLight</li>
          <li className="option" value={Styles["atelierSulphurpoolDark"]}>atelierSulphurpoolDark</li>
          <li className="option" value={Styles["atelierSulphurpoolLight"]}>atelierSulphurpoolLight</li>
          <li className="option" value={Styles["atomOneDarkReasonable"]}>atomOneDarkReasonable</li>
          <li className="option" value={Styles["atomOneDark"]}>atomOneDark</li>
          <li className="option" value={Styles["atomOneLight"]}>atomOneLight</li>
          <li className="option" value={Styles["brownPaper"]}>brownPaper</li>
          <li className="option" value={Styles["codepenEmbed"]}>codepenEmbed</li>
          <li className="option" value={Styles["colorBrewer"]}>colorBrewer</li>
          <li className="option" value={Styles["darcula"]}>darcula</li>
          <li className="option" value={Styles["dark"]}>dark</li>
          <li className="option" value={Styles["defaultStyle"]}>defaultStyle</li>
          <li className="option" value={Styles["docco"]}>docco</li>
          <li className="option" value={Styles["dracula"]}>dracula</li>
          <li className="option" value={Styles["far"]}>far</li>
          <li className="option" value={Styles["foundation"]}>foundation</li>
          <li className="option" value={Styles["githubGist"]}>githubGist</li>
          <li className="option" value={Styles["github"]}>github</li>
          <li className="option" value={Styles["gml"]}>gml</li>
          <li className="option" value={Styles["googlecode"]}>googlecode</li>
          <li className="option" value={Styles["gradientDark"]}>gradientDark</li>
          <li className="option" value={Styles["gradientLight"]}>gradientLight</li>
          <li className="option" value={Styles["grayscale"]}>grayscale</li>
          <li className="option" value={Styles["gruvboxDark"]}>gruvboxDark</li>
          <li className="option" value={Styles["gruvboxLight"]}>gruvboxLight</li>
          <li className="option" value={Styles["hopscotch"]}>hopscotch</li>
          <li className="option" value={Styles["hybrid"]}>hybrid</li>
          <li className="option" value={Styles["idea"]}>idea</li>
          <li className="option" value={Styles["irBlack"]}>irBlack</li>
          <li className="option" value={Styles["isblEditorDark"]}>isblEditorDark</li>
          <li className="option" value={Styles["isblEditorLight"]}>isblEditorLight</li>
          <li className="option" value={Styles["kimbieDark"]}>kimbieDark</li>
          <li className="option" value={Styles["kimbieLight"]}>kimbieLight</li>
          <li className="option" value={Styles["lightfair"]}>lightfair</li>
          <li className="option" value={Styles["lioshi"]}>lioshi</li>
          <li className="option" value={Styles["magula"]}>magula</li>
          <li className="option" value={Styles["monoBlue"]}>monoBlue</li>
          <li className="option" value={Styles["monokaiSublime"]}>monokaiSublime</li>
          <li className="option" value={Styles["monokai"]}>monokai</li>
          <li className="option" value={Styles["nightOwl"]}>nightOwl</li>
          <li className="option" value={Styles["nnfxDark"]}>nnfxDark</li>
          <li className="option" value={Styles["nnfx"]}>nnfx</li>
          <li className="option" value={Styles["nord"]}>nord</li>
          <li className="option" value={Styles["obsidian"]}>obsidian</li>
          <li className="option" value={Styles["ocean"]}>ocean</li>
          <li className="option" value={Styles["paraisoDark"]}>paraisoDark</li>
          <li className="option" value={Styles["paraisoLight"]}>paraisoLight</li>
          <li className="option" value={Styles["pojoaque"]}>pojoaque</li>
          <li className="option" value={Styles["purebasic"]}>purebasic</li>
          <li className="option" value={Styles["qtcreatorDark"]}>qtcreatorDark</li>
          <li className="option" value={Styles["qtcreatorLight"]}>qtcreatorLight</li>
          <li className="option" value={Styles["railscasts"]}>railscasts</li>
          <li className="option" value={Styles["rainbow"]}>rainbow</li>
          <li className="option" value={Styles["routeros"]}>routeros</li>
          <li className="option" value={Styles["schoolBook"]}>schoolBook</li>
          <li className="option" value={Styles["shadesOfPurple"]}>shadesOfPurple</li>
          <li className="option" value={Styles["solarizedDark"]}>solarizedDark</li>
          <li className="option" value={Styles["solarizedLight"]}>solarizedLight</li>
          <li className="option" value={Styles["srcery"]}>srcery</li>
          <li className="option" value={Styles["stackoverflowDark"]}>stackoverflowDark</li>
          <li className="option" value={Styles["stackoverflowLight"]}>stackoverflowLight</li>
          <li className="option" value={Styles["sunburst"]}>sunburst</li>
          <li className="option" value={Styles["tomorrowNightBlue"]}>tomorrowNightBlue</li>
          <li className="option" value={Styles["tomorrowNightBright"]}>tomorrowNightBright</li>
          <li className="option" value={Styles["tomorrowNightEighties"]}>tomorrowNightEighties</li>
          <li className="option" value={Styles["tomorrowNight"]}>tomorrowNight</li>
          <li className="option" value={Styles["tomorrow"]}>tomorrow</li>
          <li className="option" value={Styles["vs"]}>vs</li>
          <li className="option" value={Styles["vs2015"]}>vs2015</li>
          <li className="option" value={Styles["xcode"]}>xcode</li>
          <li className="option" value={Styles["xt256"]}>xt256</li>
          <li className="option" value={Styles["zenburn"]}>zenbur</li>
        </ul>
      </div>
      <div className="custom-select">
        <label htmlFor="language" className='inputlabel'>Language</label>
        <div className="select-button" onClick={() => {
          document.querySelector('.language').classList.toggle('visible');
        }}>{selectedLanguage}</div>
        <ul className="options-list language" onClick={(e) => {
          console.log(e);
          setSelectedLanguage(e.target.textContent);
          document.querySelector('.language').classList.toggle('visible');
        }}>
          {SyntaxHighlighter.supportedLanguages.map((language) => {
            return <li className="option" value={language}>{language}</li>
          })}
        </ul>
      </div>
      <button className='capture' onClick={handleCapture}>Save</button>
    </div>
  )
}
