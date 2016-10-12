import React from 'react'
import styles from './Pane.css'
import media from '../../util/media'

class Pane extends React.Component{
    constructor(props){
        super(props);
        this.media = new media;
        this.state={
            size: "",
            media: new media
        }
    }
    
    setupSmallScreens(mql){
        if(mql.matches){
            this.setState({
                size: "small"
            })
        }
    }
    
    setupMedScreens(mql){
        if(mql.matches){
            this.setState({
                size: "medium"
            })
        }
    }
    
    setupLargeScreens(mql){
        if(mql.matches){
            this.setState({
                size: "largeUp"
            })
        }
    }
    
    componentDidMount(){
        this.media.addListener('small', this.setupSmallScreens.bind(this));
        this.media.addListener('med', this.setupMedScreens.bind(this));
        this.media.addListener('largeUp', this.setupLargeScreens.bind(this));
    }
    
    render(){
        return(
                <div className={styles.root}>{this.state.size}</div>
                )
    }
}

export default Pane


