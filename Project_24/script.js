//This target the each div and change the backgroundcolor 
//like I create five div then each div background color it is like red,lime,blue,cyan,mangeta
const parentDiv=[
     {
     class:'palette-one',
     value:'#ff0000'
    },
    {
     class:'palette-two',
     value:'#00ff00'
    },
    {
     class:'palette-three',
     value:'#0000ff'
    },
    {
     class:'palette-four',
     value:'#00ffff'
    },
    {
     class:'palette-five',
     value:'#ff00ff'
    },
    {
     class:'palette-six',
     value:'#ffffff'
    },
    {
     class:'palette-seven',
     value:'#ffff00'
    },
]

parentDiv.forEach((el)=>{
     document.querySelector(`.${el.class}`).style.background=el.value
})
const buttonClicked= (id) => {
     console.log(id)

     document.querySelector(`.${id}`).addEventListener('click',(e) => {
          // console.log(e.target.innerHTML)
          let allElement = document.querySelectorAll('.palette-color');
          //   console.log(allElement)
          allElement.forEach((el) =>{
               el.style.background='black'
          })
          e.target.style.background=e.target.innerHTML
          // console.log('hello')
           navigator.clipboard.writeText(e.target.innerHTML)
            .then(() => {
          //     document.getElementById('copiedText').innerHTML='Text copied to clipboard'
            })
            .catch(err => {
          //     console.log('Error in copying text: ', err);
          //     document.getElementById('copiedText').innerHTML='Error in copying text'

            });
          document.getElementById('copiedText').innerHTML=`<div class="copiedText-container"><b>Color : </b>${e.target.innerHTML} Copieds</div>`
          document.getElementById('copiedText').style.display='inline'
          document.getElementById('copiedText').style.color='white'
          document.getElementById('copiedText').style.textAlign='center'
          document.getElementById('copiedText').style.position='fixed'
          document.getElementById('copiedText').style.top='10em'
          document.getElementById('copiedText').style.right='2em'


          


     })


     //After user select the color it get vanish after 2 sec background color and text as well
     setTimeout(() => {
          let allElement = document.querySelectorAll('.palette-color');

          allElement.forEach((el) =>{
               el.style.background='black'
          })
          
          document.getElementById('copiedText').innerHTML=``
          document.getElementById('copiedText').style.display='none'
          document.getElementById('copiedText').style.color='black'

          
     },2000)
}

