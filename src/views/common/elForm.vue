<template>
    <div class="box">
        <span v-if="this.lable">{{this.lable}}</span>
        <input type="text" :value="value" :placeholder="placeholder" @input="$emit('input',$event.target.value)">
    </div>
</template>

<script>
    export default {
        props:{
            value:String,
            lable:String,
            placeholder:String,
            inline:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="less" scoped>
.box{
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
}

span{
    padding-left: 10px;
    box-sizing: border-box;
    width: 80px;
}
input{
    width: 200px;
    height: 26px;
    border-radius: 8px;
    border: 1px solid #999;
    font-size: 14px;
}
</style>