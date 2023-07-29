const wapper = document.querySelector('.wapper')
const register= document.querySelector('.register')
const login =document.querySelector('.Login')
const Close =document.querySelector('.icon-close')
const Open =document.querySelector('.btn-login')
const eyes=document.querySelector('#eyes')
const eye2=document.querySelector('#eye2')

//  tranlate-state , open-close  the form
register.addEventListener('click',()=>{
    wapper.classList.add('active')
})

login.addEventListener('click',()=>{
    wapper.classList.remove('active')
})

Open.addEventListener('click',()=>{
    wapper.classList.add('Open-popup')
})
Close.addEventListener('click',()=>{
    wapper.classList.remove('Open-popup')
})

// tranlates the type password
$(document).ready(function(){
    $('#eyes').click(function(){
        $(this).toggleClass('bi-eye-slash bi-eye')
        $(this).toggleClass('open')
        
        if($(this).hasClass('open')){
            $(this).next().attr('type','text')
        }else {
            $(this).next().attr('type','password')
        }
    })
})

$(document).ready(function(){
    $('#eye2').click(function(){
        $(this).toggleClass('bi-eye-slash bi-eye')
        $(this).toggleClass('open')
        
        if($(this).hasClass('open')){
            $(this).next().attr('type','text')
        }else {
            $(this).next().attr('type','password')
        }
    })
})