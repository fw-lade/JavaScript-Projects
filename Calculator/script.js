const show = document.querySelector('.display')
const btn = document.querySelectorAll('button')

btn.forEach((e)=>{
    e.addEventListener('click', key)
})

function key(x){
    let clickbtn = x.target.value
    if(clickbtn === '='){
        show.value = eval(show.value)
    } else if (clickbtn === 'c'){
        show.value = ''
    } else{
        show.value += clickbtn
    }
}