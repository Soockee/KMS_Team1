
var taskInput=document.getElementById('new-task');
var addButton = document.getElementById('addButton');
var incompleteTaskHolder=document.getElementById('incomplete-tasks');//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById('completed-tasks');//completed-tasks


//New task list item

/*function createNewTaskElement(taskString) {

    var listItem=document.createElement('li');

    //input (checkbox)
    var checkBox=document.createElement('input');//checkbx
    //label
    var label=document.createElement('label');//label
    //input (text)
    var editInput=document.createElement('input');//text
    //button.edit
    var editButton=document.createElement('button');//edit button

    //button.delete
    var deleteButton=document.createElement('button');//delete button

    label.innerText=taskString;

    //Each elements, needs appending
    checkBox.type='checkbox';
    editInput.type='text';

    editButton.innerText='Edit';//innerText encodes special characters, HTML does not.
    editButton.className='edit';
    deleteButton.innerText='Delete';
    deleteButton.className='delete';



    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}*/

function createNewTaskElement (taskString){

    var listItem=document.createElement('li');

    //input (checkbox)
    var checkBox=document.createElement('input');//checkbox
    //label
    var label=document.createElement('label');//label
    //input (text)
    var editInput=document.createElement('input');//text
    //button.edit
    var editButton=document.createElement('button');//edit button

    //button.delete
    var deleteButton=document.createElement('button');//delete button

    label.innerText=taskString;

    //Each elements, needs appending
    checkBox.type='checkbox';
    editInput.type='text';

    editButton.innerText='Edit';//innerText encodes special characters, HTML does not.
    editButton.className='edit';
    deleteButton.innerText='Delete';
    deleteButton.className='delete';

    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}


addButton.onclick = function(){
    console.log('New Task being added');
    //Create a new list item with the text from the #new-task:
    var listItem=createNewTaskElement(taskInput.value);
    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value='';
};

//Edit an existing task.

function editTask() {
    console.log('Task being edited');
    //console.log('Change 'edit' to 'save'');

    var listItem=this.parentNode;

    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector('label');
    var containsClass=listItem.classList.contains('editMode');
    //If class of the parent is .editmode
    if(containsClass){

        //switch to .editmode
        //label becomes the inputs value.
        label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle('editMode');
}

// Edit an existing task.

//Delete task.
function deleteTask() {
    console.log('Delete Task...');

    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);

  // toggle .editmode on the parent.
  listItem.classList.toggle('editMode')
}

// Delete task.
var deleteTask = function () {
  console.log('Delete Task...')

//Mark task completed
function taskCompleted(){
    console.log('Task marked as completed');

    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}

// Mark task completed
var taskCompleted = function () {
  console.log('Complete Task...')

function taskIncomplete() {
    console.log('Incomplete Task...');
//Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks.
    var listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}


function bindTaskEvents (taskListItem,checkBoxEventHandler) {
    console.log('Task being binded onto list');
//select ListItems children
    var checkBox=taskListItem.querySelector('input[type=checkbox]');
    var editButton=taskListItem.querySelector('button.edit');
    var deleteButton=taskListItem.querySelector('button.delete');

  // Bind editTask to edit button.
  editButton.onclick = editTask
  // Bind deleteTask to delete button.
  deleteButton.onclick = deleteTask
  // Bind taskCompleted to checkBoxEventHandler.
  checkBox.onchange = checkBoxEventHandler
}

window.onload = function () {
  // cycle over incompleteTaskHolder ul list items
// for each list item

  for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
    // bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted)
  }

//cycle over completedTasksHolder ul list items
for (var i=0; i<completedTasksHolder.children.length;i++){
    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}

// Demo function
function sayHello() {
    var world = "world";           // no single quotes
    if (1 == 1)         //
    console.log("Hello" + World); // undefined variable
}
