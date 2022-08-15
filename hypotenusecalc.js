var inputs1=document.querySelector("#input1");
var inputs2=document.querySelector("#input2");
var btn=document.querySelector("#btn-submit");
var outputs=document.querySelector("#output");

function hypotneusecalc(){
    if(inputs1.value==0 || inputs2.value==0){
        alert("Enter the values Dude");
    }
    else{
    var res=(inputs1.value*inputs1.value)+(inputs2.value*inputs2.value);
    res=Math.sqrt(res);
    outputs.innerHTML="Hypotneues is "+res;
    }
}

btn.addEventListener("click",hypotneusecalc);