import css from 'css'
import media from '!css!../globals/vars.css'

class mediaHandler{
    constructor(){
        var parsed = css.parse(media.toString());
        this.mediaObject = {};
        parsed.stylesheet.rules.map(function(rule){
            if(rule.type === 'custom-media'){
                this.mediaObject[rule.name.substr(2)] = {media: rule.media}; //name removes '--'
            }
        },this);
        
        for(var size in this.mediaObject){
            this.mediaObject[size].mql = window.matchMedia(this.mediaObject[size].media);
            if(this.mediaObject[size].mql.matches){
                this.mediaObject.initialSize = size;
            }
        }
        
        this.mediaObject.addListener = this.addListener.bind(this);
        
        return this.mediaObject;
    }
    
    addListener(size, handler){
        if(this.mediaObject.hasOwnProperty(size)){
            this.mediaObject[size].mql.onchange = handler;
            //this.mediaObject[size].mql.addListener(handler);
            if(this.mediaObject[size].mql.matches === true){
                handler(this.mediaObject[size].mql);
            }
        }else{
            console.warn(size + " does not exist in system media queries.");
        }
    }
    
}
export default mediaHandler