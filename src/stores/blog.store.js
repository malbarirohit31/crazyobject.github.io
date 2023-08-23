import {defineStore} from "pinia"
import {ref} from "vue"
import axios from "axios"

const useBlogStore = defineStore("BlogStore",{
    id:"BlogStore",
    state:()=>{
        return {
            dataSource:ref("posts"),
            blogData:ref([]),
            isLoading:ref(false),
            errorText:ref("")
        }
    },
    actions:{
        changeSource(newSource){
            this.dataSource = newSource
        },
        async getDataFromAPI(){
            this.isLoading=true
            this.blogData =[]
            this.errorText =""
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.dataSource}`)
                if(response.status===200){
                    this.blogData = response.data;
                }
            }catch(error){
                this.errorText = error.message;
                this.blogData =[]
            }
            finally{
                this.isLoading=false
            }
        }
    }
})

export default useBlogStore