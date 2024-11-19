
const imgBox = document.getElementById("imgBox");
const qrCodeImg = document.getElementById("qrCodImg");
const input = document.querySelector(".header__input");
const button = document.querySelector(".header__btn");

function generateQrCode(){
    if(input.value.length >0){
        qrCodeImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgBox.classList.add("show-img");
    }else{
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 500);
    }
}
button.addEventListener("click", ()=>{
    generateQrCode();
});


