const weId = document.querySelector(".login_id");
const wePwd = document.querySelector(".login_pw");
const weSubmit = document.querySelector(".login_form_submit");




function changeColor() {
    if(weId.value && wePwd.value){
        weSubmit.removeAttribute('disabled');
        weSubmit.style.backgroundColor = '#0095f6';
    }else{
        // weSubmit.setAttribute('disabled');
        weSubmit.style.backgroundColor = '#B2DFFC';
    }
}



weId.addEventListener("keyup", changeColor);
wePwd.addEventListener("keyup", changeColor);