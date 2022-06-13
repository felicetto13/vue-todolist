
const app = new Vue(
    {
        el: '#app',
        data:
        {
            toDoList:[
                {
                text : "fare la spesa",
                done: false
            },
            {
                text : "fare shopping",
                done: false
            },
            {
                text : "andare al mare",
                done: false
            },
            {
                text : "chiamare idraulico",
                done: false
            },
            ],
            editMode: false,
            newTasks: "",
        },
        methods:
        {
            openEditMode(){
                if(this.editMode){
                    this.editMode = false
                }
                else if(!this.editMode){
                    this.editMode = true
                }
            },
            taskDone(index){
                if(!this.toDoList[index].done){
                    this.toDoList[index].done = true;
                }
                else if(this.toDoList[index].done){
                    this.toDoList[index].done = false;
                }
            },
            removeTasks(index){
                this.toDoList.splice(index, 1);
            }
        }
    }
);