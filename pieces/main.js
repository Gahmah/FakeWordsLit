import {LitElement, html} from 'lit-element';
import {Single, Fill} from '/scripts/Engine.js';
import '/pieces/myHeader.js';
import '/pieces/myInput.js';
import '/pieces/resultTab.js';

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
        <my-header myText="Fake Word Generator"></my-header>
        <label>Put letters here
            <my-input .handleChange=${this.handleChange}></my-input>
        </label>
        `; 
    }
}
customElements.define('my-main', myMain);