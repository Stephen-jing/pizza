<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- new pizza -->
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItem" :key="item.name">
                    <tr>
                        <td>{{item.name}}</td>
                        <td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NewPizza from './NewPizza.vue'
export default {
    data(){
        return{
            // getMenuItem:[]
        }
    },
    components:{
        'app-new-pizza':NewPizza
    },
    computed:{
        getMenuItem:{
            //在vuex中获取数据
            get(){
                // return this.$store.state.menuItems
                //通过getters获取数据
                return this.$store.getters.getMenuItems
            },
            set(){

            }
        }
    },
    //钩子函数
    created(){
        fetch("https://pizaa-1d870.firebaseio.com/menu.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                let menuArray = []
                for(let key in data){
                    // console.log(key)
                    data[key].id = key;
                    menuArray.push(data[key])
                }
                //数据同步
                this.$store.commit('setMenuItems',menuArray)
                // this.getMenuItem = menuArray
            })
    },
    methods:{
        deleteData(item){
            fetch("https://pizaa-1d870.firebaseio.com/menu/" + item.id + "/.json",{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            })
                .then(res => res.json())
                // .then(data => this.$router.push({name:'menuLink'}))
                .then(data => {
                    this.$store.commit('removeMenuItem',item)
                })
                .catch(err => console.log(err))
        }
    }
    // data(){
    //     return {
    //         name:"Stephen"
    //     }
    // },
    //组件守卫
    // beforeRouteEnter:(to,from,next) => {
    //     // alert("Hello" + this.name);
    //     // next()

    //     next(vm => {
    //         alert("Hello " + vm.name);
    //     })
    // }
    // beforeRouteLeave(to,from,next) {
    //     if(confirm("确定离开吗？") == true){
    //         next()
    //     }else{
    //         next(false);
    //     }
    // }
}
</script>