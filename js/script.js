// funçao de adicionar tarefa
function addTask() {
    // pegar o titulo da tardefa
    const taskTitle = document.querySelector("#task-title").value;
    
    // validar se existe tasks vazias ele nao ira adicionar
    if (taskTitle) {
        // clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        // adiciona o titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover as classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list")
        list.appendChild(newTask);

        //adicionar o evento de remover no botão logo após eu adicionar a tarefa na lista 
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        });

         //adicionar evento de completar tarefa
         const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function () {
            completeTask(this);
        });   


        //limpar input apos digitar a terefa e adicionar
        document.querySelector("#task-title").value = "";
    } else {
        alert("Insira um titulo para sua tarefa")
    }

}

// função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//função de completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
};


// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {
    e.preventDefault()

    addTask()
})