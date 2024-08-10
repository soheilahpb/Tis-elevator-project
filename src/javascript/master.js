let demo = document.getElementById('demo')
let _main = document.getElementsByTagName('main')[0]
let _text = document.getElementsByClassName('text')[0]
let _QRCODE = document.getElementById('QRCode')
let _insta = document.getElementsByClassName('instagram')[0]
let _Close = document.getElementById('close')


// list buttom
let list = document.getElementById('list')
let navigation = document.getElementById('navigation')


// list opening
let j=1
function open_close() {
    if(j%2){
        navigation.classList.remove('translate-x-[120%]')
        navigation.classList.add('translate-x-0')
    }else{
        navigation.classList.remove('translate-x-0')
        navigation.classList.add('translate-x-[120%]')
    }
    j++
    console.log(j);
}




// onload
setTimeout(() => {
    _text.style.opacity = 1
}, 1600);






const withTis =['faster  ', 'safer  ', 'smoother  ']

let num = 0
let name = ''
let k = 0
function setText() {
    name = withTis[num]
    k = name.length
    if (num < withTis.length - 1) {
        num++
    } else {
        num = 0
    }
}
setText()
let i = 1

let write = () => {
    if (i < name.length) {
        demo.innerHTML =  name.slice(0, i)
        i++
    }
    else {
        if (k >= 0) {
            demo.innerHTML =name.slice(0, k)
            k--
        }
        else {
            setText()
            i = 1
            k = name.length
        }
    }
}

console.log(window.innerWidth +"px");
if (screen.width >=1024) {
    
    setInterval(write, 150);
}


_insta.addEventListener('click' , (e)=>{
    console.log('_QRCODE');
    _QRCODE.setAttribute('class' , "flex top-[15%] w-1/2 bg-white flex-wrap items-center justify-center absolute py-3")
})


_Close.addEventListener('click' , (e)=>{
    console.log('close');
    _QRCODE.setAttribute('class' , "hidden top-[100%] w-1/2 bg-white flex-wrap items-center justify-center absolute py-3")
})