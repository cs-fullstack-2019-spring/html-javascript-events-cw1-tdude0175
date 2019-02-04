var typing = document.querySelector("#typer");
var sentence = ["Lorel ipsum dolar wolish ballathar nofair.","nosur dovak kurla desnivath.","kalurak duvar selthenar."];
start = 0;
var index = 0;
//going to have to get back into the habbit of getting into building inside a function

typing.onkeydown = function (e) {
    if (start < sentence[index].length )
    {                       //start dictates the character you are on
        e.preventDefault();
    let nextletter = sentence[index][start];
    typing.innerHTML += nextletter;     //{innerHTML} dicates you don't change it
    start++                             //{innerText} replaces the letter
    }
    else
        {
            e.preventDefault()
        }
//else if to prevent undefined from appearing

};
var reset = document.querySelector("button");

reset.addEventListener('click' ,function f() {
    if(index === sentence.length-1)
    {
        index = 0;
        typing.innerHTML = '';  //set index to 0 and other measurements
        start = 0;
    }
    else
        {
            start = 0;
            typing.innerHTML = '';
            index++;

        }
});