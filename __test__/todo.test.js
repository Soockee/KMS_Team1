require ('jest');


test('Add new task', () => {
    document.body.innerHTML =
        '<p>' +
        '<label for="new-task">Add Item</label><input id="new-task" type="text"><button id="addButton">Add</button>' +
        '</p>' +
        '<ul id="incomplete-tasks">' +
        '</ul>' +
        '<h3>Completed</h3>\n' +
        '<ul id="completed-tasks">\n' +
        '</ul>\n';

    require ('../todo');
    const $ = require('jquery');
    const taskInput=document.getElementById("new-task");

    //jest.mock('../todo');

    taskInput.value = "New Task";
    $('#addButton').click();
    expect(taskInput.value).toBe("");
    expect($('#incomplete-tasks').children().length).toBe(1);

});

/*test("Mark task as completed", () => {
    document.body.innerHTML =
        '<p>' +
        '<label for="new-task">Add Item</label><input id="new-task" type="text"><button id="addButton">Add</button>' +
        '</p>' +
        '<ul id="incomplete-tasks">' +
        '</ul>' +
        '<h3>Completed</h3>\n' +
        '<ul id="completed-tasks">\n' +
        '</ul>\n';

    const $ = require('jquery');
    var deleteButton=taskListItem.querySelector("button.delete");
     /* expect($('#incomplete-tasks').children().children()[1].innerText).toBe("Test");

    jest.mock('../todo');

});*/
