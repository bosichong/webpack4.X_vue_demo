

<template>
    <div>
        <h1>App 首页</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/list">list</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"ok"
        }
    }
}
</script>

<style lang="">

    
</style>