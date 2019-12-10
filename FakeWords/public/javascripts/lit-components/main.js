import {html} from '/static/lit-html/lit-html.js';
import {LitElement} from '/static/lit-element/lit-element.js';
import {Single, Fill} from '../scripts/Engine.js';
import './myHeader.js';
import './myInput.js';
import './resultTab.js';

export class myMain extends LitElement{

    static get properties(){
        return {
            results: {type: Array}
        };
    }

    constructor(){
        super();
        this.results = [
            {beginner:'a', combinations:['abc','acb']},
            {beginner:'b', combinations:['bac','bca']}
            ]
    }

    handleChange(e){
        console.log(e.target.value);
        var base = e.target.value;
        var result = Single(base, 0);
    }

    render(){
        return html`
        <!--<my-header myText="Fake Word Generator"></my-header>-->
        <label>Put letters here
            <my-input .handleChange=${this.handleChange}></my-input>
        </label>
        `; 
    }
}
customElements.define('my-main', myMain);