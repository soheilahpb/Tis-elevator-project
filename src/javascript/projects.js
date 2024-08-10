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




_insta.addEventListener('click' , (e)=>{
    console.log('_QRCODE');
    _QRCODE.setAttribute('class' , "flex top-[15%] w-1/2 bg-white flex-wrap items-center justify-center absolute py-3")
})


_Close.addEventListener('click' , (e)=>{
    console.log('close');
    _QRCODE.setAttribute('class' , "hidden top-[100%] w-1/2 bg-white flex-wrap items-center justify-center absolute py-3")
})


