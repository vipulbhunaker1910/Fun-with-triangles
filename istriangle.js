var inputs=document.querySelectorAll(".angle");
var btn=document.querySelector("#btn-traingle");
var outputs=document.querySelector("#output");
function checkistriangle(){

    var sum=0;
    
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value==0){
            alert("Enter the values for"+inputs[i]+ " Dude");
        }
        sum=sum+Number(inputs[i].value);
    }
    if(sum===180){
        outputs.innerHTML="You can form a triangle";
    }
    else{
        outputs.innerHTML="You cannot form a triangle"
    }
    
}
btn.addEventListener("click",checkistriangle);