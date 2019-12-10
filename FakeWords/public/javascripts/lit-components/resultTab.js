import {html} from '/static/lit-html/lit-html.js';
import {LitElement} from '/static/lit-element/lit-element.js';

class resultTab extends LitElement{
    static get properties(){
        return{
            beginner: {type: String},
            combinations: {type: Array}
        };
    }   

    render(){
        return html`
            <div class="resultFolder">
    <h2>${beginner}</h2>
    </div>
        `
    }
}

customElements.define('result-tab', resultTab);