import postcss from 'postcss';
import media from '!css-loader!../globals/vars.css';

class mediaHandler{
    constructor(){
        const parsed = postcss.parse(media.toString());
        console.log(parsed);
        this.mediaObject = {};
        const rules = parsed.nodes.filter((n) => {return n.name == 'custom-media';});
        rules.forEach((rule) => {
            const ruleName = new RegExp(/^-+(\S*)\s/).exec(rule.params)[1]; // get the query name..
            const ruleMedia = new RegExp(/(\(.*\))/).exec(rule.params)[1]; // get the query
            this.mediaObject[ruleName] = {media: ruleMedia}; //name removes '--'
        });

        for(let size in this.mediaObject){
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
            if(this.mediaObject[size].mql.matches === true){
                handler(this.mediaObject[size].mql);
            }
        }else{
            console.warn(size + " does not exist in system media queries.");
        }
    }
    
}
export default mediaHandler;
