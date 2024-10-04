// ======================== player one dom part start=====================
let playerone              = document.querySelector('.playerone')
let playeroneinput         = document.querySelector('.playeroneinput')
let playeronebutton        = document.querySelector('.playeronebutton')
// ==============player two dom start
let playertwo              = document.querySelector('.playertwo')
let playertwoinput         = document.querySelector('.playertwoinput')
let playertwobutton        = document.querySelector('.playertwobutton')
// ==============player three dom start
let playerthree            = document.querySelector('.playerthree')
let playerthreeinput       = document.querySelector('.playerthreeinput')
let playerthreebutton      = document.querySelector('.playerthreebutton')
// ==============others dom part
let playername             = document.querySelector('.playername')
let error                  = document.querySelector('.error')
let winner                 = document.querySelector('.winner')
let result                 = document.querySelector('.result')
let chancecount1            = document.querySelector('.chancecount1')
let chancecount2            = document.querySelector('.chancecount2')
let chance1                 = 0
let chance2                 = 0
// ==============function part 
chancecount1.innerHTML= chance1
chancecount2.innerHTML = chance2
// ==============player 1 function
playeronebutton.addEventListener('click',()=>{
    if(playeroneinput.value == ''){error.innerHTML ='pls input value'}
    else{
        if(playeroneinput.value > 10){
            error.innerHTML ='10 er beshi value niboi na'
            playeroneinput.value =''
        }
        else{
            playerone.style = 'display:none'
            error.innerHTML = ''
            playertwo.style = 'display:block'
        }}
playertwobutton.addEventListener('click' ,()=>{
    if(playertwoinput.value == ''){error.innerHTML ='tumio dekhi vala na'}
    else{
        if(playertwoinput.value > 10){
            error.innerHTML ='10 er beshi value niboi na'
            playertwoinput.value =''
        }
        else{
            playertwo.style = 'display:none'
            error.innerHTML = ''
            playerthree.style = 'display:block'
            if(playeroneinput.value==playertwoinput.value){
                playertwo.style = 'display:none'
                playerthree.style = 'display:none'
                winner.style = 'display:block'
                result.innerHTML ='winner is player 2 '
            }
            else{
                chance1++
                chancecount1.innerHTML = chance1
                if(chance1 == 5){playerthree.style = 'display:none'
                    playertwo.style = 'display:none'
                    winner.style = 'display:block'
                    result.innerHTML ='winner is player 1 '}}
        }
    }  
})
playerthreebutton.addEventListener('click' ,()=>{
    if(playerthreeinput.value == ''){error.innerHTML ='tumio dekhi vala na'}
    else{
        if(playerthreeinput.value > 10){
            error.innerHTML ='10 er beshi value niboi na'
            playerthreeinput.value =''
        }
        else{
                if(playeroneinput.value==playerthreeinput.value){
                playerthree.style = 'display:none'
                playertwo.style = 'display:none'
                winner.style = 'display:block'
                result.innerHTML ='winner is player 3 '
                }
                else{
                    chance2++
                    chancecount2.innerHTML = chance2
                    if(chance2 == 5){playerthree.style = 'display:none'
                        playertwo.style = 'display:none'
                        winner.style = 'display:block'
                        result.innerHTML ='winner is player 1 '}
                }
            }
            if(playertwoinput.value==playerthreeinput.value){
                result.innerHTML ='Draw'
                winner.style = 'display:block'
            }
        }
    }  
)
})