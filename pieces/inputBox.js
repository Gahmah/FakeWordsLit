import{html,render} from '../node_modules/lit-html/lit-html.js';
export let inputTemplate;

inputTemplate = (HandleChange) => html`
<label>Put letters here<input @change=${(e) => HandleChange(e)} type=text maxlength="8">
</label>`
