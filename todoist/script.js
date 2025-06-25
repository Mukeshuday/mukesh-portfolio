// variables

const mainContainer = document.getElementById('main-container');
const addTaskBtn = document.getElementById('plus');
const inputTask = document.getElementById('input-task');




addTaskBtn.addEventListener('click',function(){
    
    let taskList = document.createElement('div');
    taskList.classList.add('task-list');

    let li = document.createElement('li');
    li.innerText=`${inputTask.value}`;
    taskList.appendChild(li);

    let checkBtn=document.createElement('button');
    checkBtn.innerHTML= '<i class="fa-solid fa-check-circle"></i>';
    checkBtn.classList.add('check-btn');
    taskList.appendChild(checkBtn);
    
    let deleteBtn=document.createElement('button');
    deleteBtn.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('delete-btn');
    taskList.appendChild(deleteBtn);
    

    if(inputTask.value===""){
        alert("please enter the task");
    }else{
        mainContainer.appendChild(taskList);
    }

    inputTask.value="";


    checkBtn.addEventListener('click',function(){
        li.parentElement.style.textDecoration="line-through";
        li.parentElement.style.textDecorationThickness="2px";
        li.parentElement.style.textDecorationColor="rgba(99, 74, 64, 0.853)";
    })


    deleteBtn.addEventListener('click',function(e){
        let target = e.target;

        target.parentElement.remove();
    })

})