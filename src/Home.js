import './Home.css';

function Home() {
    return (
            <div className='home-main-div fade-in'>
                <pre className="tags html">{`<`}<span className="tag-text">html</span>{`>`}</pre>

                <pre className="tags head">{`<`}<span className="tag-text">head</span>{`>`}</pre>
                    <pre className="tags title">{`<`}<span className="tag-text">title</span>{`>`}<span className="text">Rumessa Inamullah</span>{`</`}<span className="tag-text">title</span>{`>`}</pre>
                <pre className="tags head">{`</`}<span className="tag-text">head</span>{`>`}</pre>

                <pre className="tags body">{`<`}<span className="tag-text">body</span>{`>`}</pre>
                <pre className="tags h1">{`<`}<span className="tag-text">h1</span>{`>`}<span className="text">Welcome</span>{`</`}<span className="tag-text">h1</span>{`>`}</pre>

                <pre className="tags a">{`<`}
                    <span className="tag-text">a
                        <span style={{color: "#B141F1"}}> id</span>
                        <span style={{color: "#CCD3D3"}}>=</span>
                        <span style={{color: "#B141F1"}}>"linkedin"</span>
                    </span>{`>`}
                    <a className="text" rel="noreferrer" href="https://www.linkedin.com/in/rumessa-i-72655313b/" target="_blank">LinkedIn</a>
                    {`</`}<span className="tag-text">a</span>{`>`}
                </pre>
                <pre className="tags a">{`<`}
                    <span className="tag-text">a
                        <span style={{color: "#B141F1"}}> id</span>
                        <span style={{color: "#CCD3D3"}}>=</span>
                        <span style={{color: "#B141F1"}}>"github"</span>
                    </span>{`>`}
                    <a className="text" rel="noreferrer" href="https://github.com/rumessa" target="_blank">GitHub</a>
                    {`</`}<span className="tag-text">a</span>{`>`}
                </pre>
                <pre className="tags a">{`<`}
                    <span className="tag-text">a
                        <span style={{color: "#B141F1"}}> id</span>
                        <span style={{color: "#CCD3D3"}}>=</span>
                        <span style={{color: "#B141F1"}}>"email"</span>
                    </span>{`>`}
                    <a className="text" rel="noreferrer" href="mailto: rumessa99@gmail.com" target="_blank">Contact</a>
                    {`</`}<span className="tag-text">a</span>{`>`}
                </pre>
                
                <pre className="tags body">{`</`}<span className="tag-text">body</span>{`>`}</pre>
                <pre className="tags html">{`</`}<span className="tag-text">html</span>{`>`}</pre>

            </div>   
    );
}
export default Home;
