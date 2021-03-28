let age = 0
let dof = 0

document.getElementById('button').addEventListener('click', click)

document.getElementById('button2').addEventListener('click', click2)

function click () {
  age = document.getElementById('age').value
  if ((dof === 'tuesday' || dof === 'thursday') || (age > 12 && age < 21)) {
    alert('You get student pricing')
  } else {
    alert('you must pay full admission')
  }
}

function click2 () {
  dof = document.getElementById('dayofweek').value
  if ((dof === 'tuesday' || dof === 'thursday') || (age > 12 && age < 21)) {
    alert('You get student pricing')
  } else {
    alert('you must pay full admission')
  }
}