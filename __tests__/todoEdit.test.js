var $ = require('jquery')
var html = require('fs').readFileSync('./index.html').toString()
const testInput = 'Task_1'

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
