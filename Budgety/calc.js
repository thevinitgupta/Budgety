document.getElementById("equals").addEventListener('click',function solve (){
   var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
    return document.getElementById("result").value;

});

document.getElementById("clr").addEventListener('click',function clrscr(){
   return document.getElementById("result").value = "";
});
/*
function disp(val){
 document.getElementById("result").value = val;
}*/
function disp(c){
    var newData= document.getElementById("result").value + c;
return document.getElementById("result").value = newData;
}
