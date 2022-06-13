
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
            newTasks: ""
        },
        methods:
        {
            openEditMode(){
                if(this.editMode === "true"){
                    this.editMode = false
                }
                else if(this.editMode === "false"){
                    this.editMode = true
                }
            }
        }
    }
);