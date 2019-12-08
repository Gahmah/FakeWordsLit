import {LitElement, html} from 'lit-element';

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