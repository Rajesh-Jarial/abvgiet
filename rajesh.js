//Comment Text
class Rajesh extends React.Component{
    render(){
        return React.createElement("button",{},"Hello World");
    }
}

const myDiv = document.getElementById("main");
ReactDOM.render(React.createElement(Rajesh),myDiv);