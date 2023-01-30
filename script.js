console.log("Welcome to Tictactoe");
let turn = "X";
let isgameover = false;
let count = 0;

const changeturn = ()=>{
    return turn==="X"?"0":"X";
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText!=='')){
            document.getElementById('info').innerText = boxtext[e[0]].innerText + " WON";
            isgameover = true;
        }
    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click' ,()=>{
        if(!isgameover){
            if(boxtext.innerText===''){
                boxtext.innerText=turn;
                turn = changeturn();
                count++;
                checkwin();
                if(!isgameover){
                    document.getElementById('info').innerText = "Turn for " + turn;
                }
            }

        }

        if(count==9 && isgameover==false){
            document.getElementById('info').innerText = "Game Draw";
        }

    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
        count = 0;
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
})

