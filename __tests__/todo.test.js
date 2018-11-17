var $ = require("jquery")
var html = require('fs').readFileSync('./todo.html').toString()
const testInput = 'Task_1'

test('Adding Task', () => {
  document.documentElement.innerHTML = html
  const { addButton } = require('../todo.js')

  // check that incomplete-tasks is empty
  expect($('#incomplete-tasks').children().length).toBe(0)

  // submit test.input
  $('#new-task').val(testInput)
  $('#btn').click()

  // check that the test-input is removed from input-field
  expect($('#new-task').val()).not.toMatch(testInput)

  // check if the new-task was added to  incomplete-tasks
  expect($('#incomplete-tasks').children().length).toBe(1)

  // check if the new task has the right content
  expect(document.getElementById('incomplete-tasks').children[0].children[1].innerText).toMatch(testInput)
});

test('Deleting Task', () => {
  document.documentElement.innerHTML = html
  const { addButton } = require('../todo.js')

  // check that incomplete-tasks is empty
  expect($('#incomplete-tasks').children().length).toBe(0)

  // submit test.input
  $('#new-task').val(testInput)
  $('#btn').click()

  // check if the new task was added correctly
  expect($('#new-task').val()).not.toMatch(testInput)
  expect($('#incomplete-tasks').children().length).toBe(1)
  expect(document.getElementById('incomplete-tasks').children[0].children[1].innerText).toMatch(testInput)

  // delete new-task
  $('#incomplete-tasks').children('li:nth-child(1)').children('.delete').click()
  // check if the new task was deleted correctly
  expect($('#incomplete-tasks').children().length).toBe(0)
  expect($('#completed-tasks').children().length).toBe(0)
})

test('Edit Task', () => {
  document.documentElement.innerHTML = html
  const { addButton } = require('../todo.js')

  // check that incomplete-tasks is empty
  expect($('#incomplete-tasks').children().length).toBe(0)

  // submit test.input
  $('#new-task').val(testInput)
  $('#btn').click()

  // check if the new task was added correctly
  expect($('#new-task').val()).not.toMatch(testInput)
  expect($('#incomplete-tasks').children().length).toBe(1)
  expect(document.getElementById('incomplete-tasks').children[0].children[1].innerText).toMatch(testInput)

  // edit new-task
  const editedInput = 'Edited_Task'
  document.getElementById('incomplete-tasks').children[0].children[1].innerText = editedInput
  // check if the new task was edited correctly
  expect($('#incomplete-tasks').children().length).toBe(1)
  expect(document.getElementById('incomplete-tasks').children[0].children[1].innerText).toMatch(editedInput)
})

/** *******OLD-DEBUG-CODE************************************************************************************************

 const  currHtml = document.documentElement.innerHTML
 console.log(currHtml)
 expect(document.getElementById('incomplete-tasks').children[0].children[1].innerText).toMatch(testInput)
     expect($('#incomplete-tasks').children('li:nth-child(1)').children('.taskName').text()).toMatch(testInput)

**********OLD-DEBUG-CODE************************************************************************************************/
