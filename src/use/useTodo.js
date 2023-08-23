import { watch, ref, reactive } from "vue";

function useTodo() {
  const todoObj = reactive({
    title: "todo title",
    newTodoText: ref(""),
    recordsPerPage: ref("3"),
    currentPage: ref("1"),
    filteredTodoList:ref([]),
    todoList: ref([]),
    next:function(){
        if(this.currentPage<Math.ceil(this.todoList.length/this.recordsPerPage)){
            this.currentPage++;
            this.getTodoList();
        }
    },
    prev:function(){
        if(this.currentPage>=2){        
            this.currentPage--;
            this.getTodoList();
        }
    },
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
      this.getTodoList();
    },
  });

  return { todoObj };
}

export default useTodo;
