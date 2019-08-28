<template>
    <div>cart
        <div>
            <!-- <van-checkbox-group v-model="result">
                <van-checkbox v-for="(item, index) in list" :key="index" :name="index">
                    复选框 {{ item }}
                    <div></div>
                </van-checkbox>
            </van-checkbox-group> -->
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list: [],
            result: []
        }
    },
    methods:{
        load(){
            // if(this.$store.getters.isLogin=='true'){
                // this.axios.post('/api/getCarts','',
                // {headers: {'access_user_token':sessionStorage.getItem("token")||localStorage.getItem("token")}
                //     }).then(res=>{
                //         // console.log(res.data.data)
                //         if(res.data.data.length==0){
                //             kong=true;
                //         }
                //         this.list=res.data.data
                //         // console.log(this.list)
                //         })
                //     .catch(err=>{console.log(err)})
            // }else{
                // this.$router.push('/login')
            // }
        }
    },
    created(){
        this.load()
    }
}
</script>