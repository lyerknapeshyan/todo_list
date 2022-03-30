class task {
    constructor(title) {
        this.title = title;
        this.isCompleted = false;
        this.isDeleted = false;
    }
}


var tasks = [];

for (let i = 0; i < 3; i++) {
    tasks[i] = new task(document.createTextNode("Task " + (i + 1)));
}


iterate();

function newElement() {
    var inputValue = document.getElementById("newTask").value;

    if (inputValue === "") {
        alert("You need to add text here");
    } else {
        var length = tasks.length;
        tasks[length] = new task(document.createTextNode(inputValue));
        document.getElementById("myTasks").innerHTML = "";
        iterate();
    }
    document.getElementById("newTask").value = "";
}


function iterate() {
    for (let i = 0; i < tasks.length; i++) {
        var li = document.createElement("LI");
        li.appendChild(tasks[i].title);
        
        if (!tasks[i].isDeleted) { 
            if(tasks[i].isCompleted) {
                li.className = "completed";
            } else {
                li.className = "notCompleted";
            }
            document.getElementById("myTasks").appendChild(li);
        }  
        
        var chkBtn = document.createElement("BUTTON");
        chkBtn.innerHTML = "&#10004";
        chkBtn.className = "chk";
        li.appendChild(chkBtn);

        chkBtn.onclick = function() {
            if (tasks[i].isCompleted) {
                tasks[i].isCompleted = false;
                this.parentElement.className = "notCompleted";
            } else {
                tasks[i].isCompleted = true;
                this.parentElement.className = "completed";
            }
        }
        
        var delBtn = document.createElement("BUTTON");  
        delBtn.innerHTML = "&#10006";
        delBtn.className = "del";
        li.appendChild(delBtn);

        delBtn.onclick = function() {
            tasks[i].isDeleted = true;
            this.parentElement.style.display = "none";
        }
    }
}