import {ChangeEvent, useState, JSX} from "react";
import "../CSS/AnagramProject.css"

interface AnagramSolver {
    word: string;
    anagrams: string[];
}

const APIUrl = 'https://portfolio-anagram-api-ckdjcrfsava7h8f3.westus-01.azurewebsites.net/AnagramSolver/';

function AnagramProject() {
    const [inputWord, setInputWord] = useState('');
    const [displayedAnagram, setDisplayedAnagram] = useState<AnagramSolver>();
    const [anagramHistory, setAnagramHistory] = useState<AnagramSolver[]>([]);
    const [submitBtnState, setSubmitBtnState] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Anagram to display
    const request: JSX.Element = getRequestElement();
    
    const submitBtn: JSX.Element = submitBtnState
        ? <a className="submitBtn" onClick={() => {
                fetchAnagramResults(inputWord)
        }}>Submit</a>
        : <a className="disabledBtn">Submit</a>;
    
    const prevAnagramsElement: JSX.Element = anagramHistory === undefined
        ? <></>
        : <div className="prevAnagramsContainer">
            <div className="shadow"/>
            <div className="prevAnagrams">
                {
                    anagramHistory.map((previousAnagram, index) =>
                        <h3 key={index} className="previousAnagram"
                            onClick={()=>{displayPreviousAnagram(previousAnagram)}}
                            style={{ padding: 0}}>
                            {previousAnagram.word}
                        </h3>
                    )
                }
            </div>
        </div>;

    const fetchingData: JSX.Element = isLoading ? <h1 className="loading">Loading...</h1> : <></>;
    
    function handleInputWordChange(e: ChangeEvent<HTMLInputElement>) {
        const newWord: string = e.target.value;
        if (newWord == "") setSubmitBtnState(false);

        // Returns if space was inputted
        if (newWord.charAt(newWord.length-1)==" ") return;
        else if (!submitBtnState) setSubmitBtnState(true);
        setInputWord(newWord);
    }

    
    async function fetchAnagramResults(word: string) {
        if (word === "") return;

        // Checks if word has been used before, if so it doesn't make another request
        let wordUsed: boolean = false;
        anagramHistory.map((anagram) => {
            if (anagram.word === word) {
                wordUsed = true;
                // Display the previous anagram results
                displayPreviousAnagram(anagram);
                return;
            }
        });
        if (wordUsed) return;

        // Disables submit button
        setDisplayedAnagram(undefined);
        setSubmitBtnState(false);
        setIsLoading(true);
        
        // Fetches Anagram results from API
        const response = await fetch(APIUrl + word);
        if (response.ok) {
            const data = await response.json();
            setDisplayedAnagram(data);
            setAnagramHistory([...anagramHistory, data]);
            setSubmitBtnState(true); // Enables submit button
            setIsLoading(false);
        } else {
            console.error(response);
        }
    }

    
    function displayPreviousAnagram(anagram: AnagramSolver) {
        if (displayedAnagram === anagram) return;
        setDisplayedAnagram(anagram);
    }

    
    // Creates the request element to be shown in the results panel
    function getRequestElement() {
        if (displayedAnagram === undefined) return (<></>);

        const anagrams: JSX.Element | JSX.Element[] = displayedAnagram.anagrams.length == 0 ? <h2>No Anagrams Found . . .</h2> :
            displayedAnagram.anagrams.map((anagram, index) =>
                <div key={anagram} className="foundAnagramEntry">
                    <h2 className="foundAnagramIndex" style={{animationDelay:((index + 1)/8).toString()+"s"}}>{index+1}.</h2>
                    <h2 className="foundAnagram" style={{animationDelay:((index + 1)/8).toString()+"s"}}>
                        {anagram}
                    </h2>
                </div>
            );

        return (
            <>
                <h1 className="requestWord">{displayedAnagram.word}</h1>
                <div className="anagramsContainer">
                    <div className="anagramEntries">
                        {anagrams}
                    </div>
                </div>
            </>
        );
    }
    
    
    
    return (
        <div className="anagramElements">
            
            {/* Inputs Panel */}
            <div className="inputsPanel">
                <h1 className="panelDetails">Anagram Solver</h1>
                <hr/>
                
                <div className="inputsPanelContent">
                    <div className="inputsGrid">
                        <input className="wordInputField" placeholder="Enter A Word" type="text"
                               value={inputWord}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputWordChange(e)}/>
                        {submitBtn}
                        <a className="frontendCodeBtn" target="_blank"
                           href="https://github.com/CodingComp/portfolio/blob/main/src/Pages/AnagramProject.tsx">Frontend Code</a>
                        <a className="backendCodeBtn" target="_blank"
                           href="https://github.com/CodingComp/portfolio-anagram-api">Backend Code</a>
                    </div>

                    <div className="anagramHistory">
                        <h2>History</h2>
                        <hr/>
                        {prevAnagramsElement}
                    </div>
                </div>
            </div>

            {/* Request Panel */}
            <div className="requestPanel">
                <h1 className="panelDetails">Anagram Results</h1>
                <hr/>
                <div className="requestContentContainer">
                    {fetchingData}
                    {request}
                </div>
            </div>
            
        </div>
    );
}

export default AnagramProject;