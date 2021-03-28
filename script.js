let age = 0
let dof = 0

document.getElementById('button').addEventListener('click', click)

document.getElementById('button2').addEventListener('click', click)

function click () {
  age = document.getElementById('age').value
  dof = document.getElementById('dayofweek').value
  if ((dof === 'tuesday' || dof === 'thursday') || (age > 10 && age < 16)) {
    alert('Yes you just earned a student discount')
  }
}