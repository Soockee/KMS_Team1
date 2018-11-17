var $ = require('jquery')
var html = require('fs').readFileSync('./index.html').toString()
const testInput = 'Task_1'

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
