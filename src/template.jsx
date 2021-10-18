import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

function renderComponent(id='root',data){
    ReactDOM.render(<App {...data} />, document.getElementById(id));
}

export default {
    render:renderComponent
}
    

