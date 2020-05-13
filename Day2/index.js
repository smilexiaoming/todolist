import reactDom from "react-dom";

const App = () => {
    return (
        <div className="main">
            <form>
                <label>输入</label>
                <input></input>
            </form>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    )
}

reactDom.render(<App></App>,document.getElementById('app'))