let _QRCODE = document.getElementById('QRCode')
let _insta = document.getElementsByClassName('instagram')[0]
let _Close = document.getElementById('close')
let list = document.getElementById('list')


_insta.addEventListener('click' , (e)=>{
    console.log('_QRCODE');
    _QRCODE.setAttribute('class' , "flex top-[15%] w-1/2 bg-white flex-wrap items-center justify-center absolute py-3")
})


_Close.addEventListener('click' , (e)=>{
    console.log('close');
    _QRCODE.setAttribute('class' , "hidden top-[100%] w-1/2 bg-white flex-wrap items-center justify-center absolute py-3")
})