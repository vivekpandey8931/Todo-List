const form=document.querySelector('#task-form');
const tasklist=document.querySelector('.collection');
const clearbtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskinput=document.querySelector('#task');


//load event listener

loadEventListener();
function loadEventListener(){
    //adding tak to list
    form.addEventListener('submit',addTask);
    //remove tak from the list
    tasklist.addEventListener('click',removeTask);
    //clear task
    clearbtn.addEventListener('click',clearTasks);


}

//add task
function addTask(e){
    if(taskinput.value===''){
        alert('add a task');
    }
    else{
       //create li element
       const li=document.createElement('li');
       //add class
       li.className='collection-item';
       //create text node and append to the li
       li.appendChild(document.createTextNode(taskinput.value));
       //create link element
       const link =document.createElement('a');
       //add class
       link.className="delete-item secondary-content";
       link.innerHTML='<i class="fa fa-remove"></i> ';
       //append link to li
       li.appendChild(link);
       //append li to ul
       tasklist.appendChild(li);
       taskinput.value='';
    //    console.log(li);
    }

    e.preventDefault();
}

//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('are you sure?')){
        e.target.parentElement.parentElement.remove();
        console.log(e.target);
        }
    }

}

//clear task

function clearTasks(e){
// tasklist.innerHTML=''

//Faster
while(tasklist.firstChild){
    tasklist.removeChild(tasklist.firstChild);

}

}