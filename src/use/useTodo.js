import { watch, ref, reactive } from "vue";

function useTodo() {
  const todoObj = reactive({
    title: "todo title",
    newTodoText: ref(""),
    recordsPerPage: ref("3"),
    currentPage: ref("1"),
    filteredTodoList:ref([]),
    todoList: ref([{id:1,text:"1"},{id:2,text:"2"},{id:3,text:"3"},{id:4,text:"4"},{id:5,text:"5"},{id:6,text:"6"},{id:7,text:"7"},{id:8,text:"8"}]),
    getTodoList:function(){        
        const perPage = this.recordsPerPage;
        let count = 1;
        this.filteredTodoList = this.todoList.reduce((acc,item)=>{
            if(count>((this.currentPage-1)*this.recordsPerPage) && count<=(perPage*this.currentPage)){    
                acc.push(item);
            }
            count++;
            return acc;
       },[]);
    },
    addTodo: function () {
      this.todoList.push({
        id: new Date().valueOf(),
        text: this.newTodoText,
      });
      this.newTodoText = "";
    },
  });

  return { todoObj };
}

export default useTodo;
