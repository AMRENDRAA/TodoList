let write=document.getElementById("write");
let todoList=document.getElementById("todolist");


write.addEventListener("keyup",function(e){
    if(e.key=="Enter")
    {

        addtodo(this.value);
       this.value='';
    }
})

function addtodo(e){
    let list=document.createElement("li");
    list.innerHTML=`${e}`;
    todoList.appendChild(list);
    console.log(e);

}