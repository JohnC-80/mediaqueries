import React from 'react'
import ReactDOM from 'react-dom'
import css from '!style!css!./globals/global.css'
import Pane from './components/Pane/Pane'
import mediaHandler from './util/media'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    
    
    render(){
        return(
                <div style={{height: '100%'}}>
                <h1>App Test </h1>
                <Pane></Pane>
                </div>
        )
    }
}

ReactDOM.render(
        <App/>,
document.getElementById('app')
)