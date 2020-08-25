const form=document.querySelector('#task-form');
const tasklist=document.querySelector('.collection');
const clearbtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskinput=document.querySelector('#task');


//load event listener

loadEventListener();
function loadEventListener(){
    form.addEventListener('submit',addTask);

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
       console.log(li);
    }

    e.preventDefault();

}