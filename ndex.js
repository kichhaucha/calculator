let screem=document.getElementById('screen')
 buttons=document.querySelectorAll('button')
 let screenvalue=''
// 

// sab=5+5+(9*4)
// let val=eval(sab)
// console.log(val)


for(item of buttons)[
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        if(buttontext=='*'){
            screenvalue +=buttontext
            screem.value = screenvalue
        }
        else if(buttontext=='C'){
          screenvalue='';
          screem.value=screenvalue
         
        }
        else if(buttontext=='='){
            screem.value=eval(screenvalue)
        }
        else{
            screenvalue +=buttontext
            screem.value = screenvalue
        }
    })
]
