var button = document.getElementById('formBtn');
var input = document.getElementById('input');
var words = document.getElementById('words');
var lifecnt = document.getElementById('lifecnt');
var warning = document.getElementById('warning');

var wordlist = ['성균관대학교']; // '교직이수', '수학시험'

let life = 3;

button.onclick = (event) => {
    event.preventDefault();
    warning.textContent="";
    var lastinput = wordlist[wordlist.length-1];
    if(lastinput[lastinput.length-1]===input.value[0] && wordlist.indexOf(input.value)===-1){

        wordlist.push(input.value);
        var newword = document.createElement('span');
        newword.textContent = "->" + input.value;
        words.appendChild(newword);
    } else {
        warning.textContent = "경고메시지";
        life--;
        lifecnt.textContent = '💖'.repeat(life);
        lifecnt.textContent += '💔'.repeat(3-life);
    }
    if(life===0){
        alert('Life is 0! Please do F5');
    }
    input.value = "";
}
