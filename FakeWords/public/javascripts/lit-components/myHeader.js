import {html} from '/static/lit-html/lit-html.js';
import {LitElement} from '/static/lit-element/lit-element.js';

class myHeader extends LitElement{
    static get properties(){
        return {
            myText: {type: String}
        };
    }
    constructor(){
        super();
        this.myText = "Some Text";
    }
    render(){
        return html`
        <h1>${this.myText}</h1>
        `;
    }
}
customElements.define('my-header', myHeader);