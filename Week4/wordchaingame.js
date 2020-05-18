var button = documnet.getElementById('formBtm');
var input = document.getElementById('input');
var words = document.getElementById('words');
var lifecnt = document.getElementById('lifecnt');
var warning = document.getElementById('warning');

var wordlist = ['성균관대학교']

var life = 3
var lastinput = wordlist[wordlist.length-1]

button.onclick = (event) => {
    event.preventDefault();
    if(wordlist.find(input.nodeValue) || words[words.length-1]!==input[0]){
        alert('Life--');
        life--;
    }else{
        words.appendChile(newword)
        화면에 표시
    }
    //$('input').val('');
    if(life===0){
        alert('Life is 0! Please do F5')
    }
}
