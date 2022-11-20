const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
      arr=[]
      c=[]
      let date = new Date();
date. setDate(date. getDate() - 1);
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
      for (let i = 0; i < all.length; i++) {
  if(all[i].dueDate==yesterday){
  arr[i]= all[i].title+' '+formatDate(date)
      
  }}
  const results = arr.filter(element => {
  return element !== undefined;
});
 for (let i = 0; i < results.length; i++) {
  if(results[i].completed==true){
  c[i]= 'x'
      
  }
     else{c[i]=''}
 }
  return '[ '+c.join('')+'] '+results.join('\n')
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  }

  const dueToday = () => {
     arr=[]
      c=[]
      let date = new Date();
date. setDate(date. getDate() - 1);
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
     
     for (let i = 0; i < all.length; i++) {
  if(all[i].completed==true){
  c[i]= 'x'
      
  }
     else{c[i]=' '}
 } 
      
      
      for (let i = 0; i < all.length; i++) {
  if(all[i].dueDate==today){
  arr[i]= '['+c[i]+'] '+all[i].title
      
  }}
  const results = arr.filter(element => {
  return element !== undefined;
});
 
  return results.join('\n')
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  }

  const dueLater = () => {
     arr=[]
      c=[]
      let date = new Date();
date. setDate(date. getDate() + 1);
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
      for (let i = 0; i < all.length; i++) {
  if(all[i].completed==true){
  c[i]= 'x'
      
  }
     else{c[i]=' '}
 }
      for (let i = 0; i < all.length; i++) {
  if(all[i].dueDate==tomorrow){
  arr[i]= '['+c[i]+'] '+all[i].title+' '+formatDate(date)
      
  }}
  const results = arr.filter(element => {
  return element !== undefined;
});
 
  return results.join('\n')
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  }

  const toDisplayableList = (list) => {
  
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
     return list
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}




const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")
