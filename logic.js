let heading = document.getElementById("heading");

function Increment(){
    let presentval = parseInt(heading.textContent);
    let val=presentval+1;
    heading.textContent=val;
    if(val>0){
        heading.style.color="green";
    }
    else if(val==0){
        heading.style.color="black";
    }
    else{
        heading.style.color="red";
    }
}
function Reset(){
    heading.textContent=0;
    heading.style.color="black";
}
function Decrement(){
    let presentval = parseInt(heading.textContent);
    let val=presentval-1;
    heading.textContent=val;
    if(val>0){
        heading.style.color="green";
    }
    else if(val==0){
        heading.style.color="black";
    }
    else{
        heading.style.color="red";
    }
}