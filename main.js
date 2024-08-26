function App() {
    return (
        <div style = {st1}>
            <h1 style = {{padding : "10px"}}>Quick Start</h1>
            <h3 style = {{padding : "5px",margin : "10px 0 10px 5px"}}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</h3>
            <div style = {box}>
                <h3 style = {{padding : "5px"}}>You will learn</h3>
                <ul style = {{padding : "5px",margin : '20px'}}>
                    <li style = {{padding : "5px"}}>How to create and nest components</li>
                    <li style = {{padding : "5px"}}>How to add markup and styles</li>
                    <li style = {{padding : "5px"}}>How to display data</li>
                    <li style = {{padding : "5px"}}>How to render conditions and lists</li>
                    <li style = {{padding : "5px"}}>How to respond to events and update the screen</li>
                </ul>
            </div>
        </div>
    )
}

const st1 = {color : "white" , backgroundColor : "#23272F" , height : "100vh" , weight : "100wh" , padding : "20px"}
const box = {backgroundColor : "#343A46" , borderRadius : "20px",padding : "10px"}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App / >)