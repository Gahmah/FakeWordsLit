import {html} from '/static/lit-html/lit-html.js';
import {LitElement} from '/static/lit-element/lit-element.js';

class myInput extends LitElement{
    static get properties(){
        return {
            handleChange: {type: Function}
        }
    }

    render(){
        return html`<input @change=${this.handleChange} type=text maxlength="8">`
    }
}
customElements.define('my-input', myInput);