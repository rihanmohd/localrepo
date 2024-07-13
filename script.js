let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
 
function Add(){
if(inputs.value == ""){
    alert("Please Enter Task")
}else {
let newEle = document.createElement("ul");
newEle.innerHTML=`${inputs.value} <i class="btnb">0</i>` ;
text.appendChild(newEle);
inputs.value = "";
newEle.document.querySelector(".btnb").addEventListener("click", remove);
function remove(){
    newEle.remove()
}
}
}
