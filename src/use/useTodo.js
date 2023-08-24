import { watch, ref, reactive } from "vue";

function useTodo() {
  const todoObj = reactive({
    newTodoText: ref(""),
    recordsPerPage: ref("3"),
    currentPage: ref("1"),
    filteredTodoList:ref([]),
    pageStart:ref(0),
    pageEnd:ref(0),
    todoList: ref([]),
    next:function(){
        if(this.currentPage<Math.ceil(this.todoList.length/this.recordsPerPage)){
            this.currentPage++;
            this.updatePageMeta();
            this.getTodoList();
        }
    },
    prev:function(){
        if(this.currentPage>=2){        
            this.currentPage--;
            this.updatePageMeta();
            this.getTodoList();
        }
    },
    changePageSize:function(){
        this.pageEnd   = (parseInt(this.pageStart)+parseInt(this.recordsPerPage))
        this.getTodoList()
    },
    updatePageMeta:function(){
        console.log("page end",this.pageEnd,"curr pg",this.currentPage, "rec page",this.recordsPerPage);
        this.pageStart = this.pageEnd<((this.currentPage-1)*this.recordsPerPage) ? this.pageEnd : (this.currentPage-1)*this.recordsPerPage
        this.pageEnd   = parseInt(this.pageStart)+parseInt(this.recordsPerPage)
    },
    getTodoList:function(){        
        const perPage = this.recordsPerPage;
        let count = 1;
        this.filteredTodoList = this.todoList.reduce((acc,item)=>{
            if(count>this.pageStart && count<=this.pageEnd){    
                acc.push(item);
            }
            count++;
            return acc;
       },[]);
    },
    addTodo: function () {
        this.todoList.push({
        id: this.todoList.length===0 ? 1 : this.todoList[this.todoList.length-1].id+1 ,
        text: this.newTodoText,
        date: new Date().toLocaleString()
      });
      this.newTodoText = "";
      this.getTodoList();
    },
  });

  return { todoObj };
}

export default useTodo;
