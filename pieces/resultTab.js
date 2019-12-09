import {LitElement, html} from 'lit-element';

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