let display=document.getElementById("display");
let exp='';

function todispaly(val){
    console.log(val);
    exp = exp+val;
    display.value = exp;
}
function eql(){
    let result=eval(exp);
    display.value=result;
}
function clr(){
    exp='';
    display.value='';
}