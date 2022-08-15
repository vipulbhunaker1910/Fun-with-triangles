const selectedvalues=document.querySelector(".form-input");
var btn=document.querySelector("#btn-submit");
var outputs=document.querySelector("#output");

var answers=['90°', 'right angled'];
function checkscore(){
    i=0;
    score=0;
    var formvalues=new FormData(selectedvalues);
    for(let names of formvalues.values()){
        if(names==answers[i]){
            score=score+1;
        }
        else{
            console.log("index is "+i)
            score=score+0;
        }
        i=i+1;
    }
   outputs.innerHTML="Your Score is "+score;
}
btn.addEventListener("click",checkscore);