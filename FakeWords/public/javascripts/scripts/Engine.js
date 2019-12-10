import {Tree, Remainder} from '../scripts/MyTree.js';
/**
 * Returns combinations from input string with the character at index
 */
export function Single(input, index){
   return GetTreeForCharAt(input, index);
}
export function Fill(input) {

    var words = [];
    for (var i = 0; i < input.length; i++) {
        words.push(GetTreeForCharAt(input, i));
    }
    return words;
}

function GetTreeForCharAt(input, index){
    var theseWords = [];
    var tree = GetTree(input.charAt(index), Remainder(index, input));
    theseWords.push(tree.getWords());
    return theseWords;
}

function GetTree(character, rest) {
    var tree = new Tree(character);
    for (var i = 0; i < rest.length; i++)
        tree.addChild(rest.charAt(i), Remainder(i, rest));
    return tree;
}

