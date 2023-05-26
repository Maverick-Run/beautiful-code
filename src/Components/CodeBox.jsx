import React, { useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as Styles from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBox({ selected, language, title, codeString }) {
    const [width, setWidth] = React.useState(40);
    const [height, setHeight] = React.useState(5);
    const [code, setCode] = React.useState(codeString);
    const [titleText, setTitleText] = React.useState(title);
    const handleChange = (e) => {
        setCode(e.target.value);
    }
    useEffect(() =>{
        var lines = code.split("\n");
        lines.sort(function (a, b) {
            return b.length - a.length;
        });
        console.log(lines);
        setWidth(lines[0].length > 10 ? lines[0].length : 20);
        setHeight(lines.length > 5 ? lines.length : 5);
    },[code])
    useEffect(() => {
        console.log(SyntaxHighlighter.supportedLanguages);
        setTitleText(title);
        console.log(titleText);
    }, [])

    return (
        <div className='codeBox' style={{ width: `${width}ch` }}>
            <div className='handle'>
                <div className='title'>
                    <div class="input-container">
                        <input type="text" id="myInput" class="transparent-input" defaultValue={title} onChange={(e) => {
                            setTitleText(e.target.value);
                        }} />
                        <label for="myInput" class="input-label">{titleText}</label>
                    </div>
                </div>
                <div className='buttons'>
                    <div className='btn min'></div>
                    <div className='btn max'></div>
                    <div className='btn close'></div>
                </div>
            </div>
            <div className='content'>
                <textarea spellCheck="false" onChange={handleChange} style={{ width: `${width}ch`, overflow: 'hidden', zIndex:'5' }} rows={height}></textarea>
                <SyntaxHighlighter language={language} style={Styles[selected]}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
