document.getElementById('btn-main').addEventListener('click',function(){
    window.location.href="./main.html"
})
function completedBtn(title){
alert('you have completed tha task fix mobile button issue');
const taskAssigned = document.getElementById('task-assigned').innerText;
const task = parseInt(taskAssigned)-1;
document.getElementById('task-assigned').innerText = task;
console.log(taskAssigned)

const completedTask = document.getElementById('completed-task').innerText;
const task1 = parseInt(completedTask)+1;
document.getElementById('completed-task').innerText = task1;

 const historyContainer = document.getElementById('history-container')
 const history = document.createElement('p')
 history.innerText =`You have Complete The Task ${title} at ${new Date().toLocaleTimeString()}`
 historyContainer.appendChild(history)
console.log(title);

}












document.getElementById('backto-btn').addEventListener('click',function(){
    // window.location.href="./index.html"
    console.log('helow');
    
})
