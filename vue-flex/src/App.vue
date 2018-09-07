<template>
    <div class="container">
        <div class="head-container">样式实践</div>
        <div class="head-top">
            <span>桔梗</span>
            <span>犬夜叉</span>
            <span>戈薇</span>
        </div>
    </div>
</template>

<script>

export default {
 
}
</script>

<style lang="scss" scoped>

@import "../static/css/reset.css";

@mixin font-dpr($font-size){
    font-size: $font-size;
    [data-dpr="2"] & {
        font-size: $font-size * 2;
    } 
    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
};
.container{
    background-color: #050658;
    width: 100%;
    height: 100%;
    .head-container{
        width: 100%;
        height: 92px;
        background: url("../static/img/header.png") no-repeat center;
        background-size: cover;
        color: #fff;
        line-height: 92px;
        text-align: center;
        font-size: 36px;
        font-weight: bold;
    }
    .head-top{
        height: 118px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #fff;
        span{
            color: #fff;
            display: block;
            width: 200px;
            height: 56px;
            border: 1px solid #fff;
            background-color: #262277;
            margin: 0 40px;
            border-radius: 28px;
            line-height: 56px;
            text-align: center;
            font-size: 26px;
        }
    }
}
// .container{
//     background-color: #050658;
//     width: 100%;
//     height: 100%;
//     .head-container{
//         width: 100%;
//         height: 0.474rem;
//         background: url("../static/img/header.png") no-repeat center;
//         background-size: cover;
//         color: #fff;
//         line-height: 0.474rem;
//         text-align: center;
//         font-size: 0.1875rem;
//         font-weight: bold;
//     }
//     .head-top{
//         height: 0.61458rem;
//         width: 100%;
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//         align-items: center;
//         border-bottom: 1px solid #fff;
//         span{
//             color: #fff;
//             display: block;
//             width: 1.042rem;
//             height: 0.292rem;
//             border: 1px solid #fff;
//             background-color: #262277;
//             margin: 0 0.208rem;
//             border-radius: 0.1458rem;
//             line-height: 0.292rem;
//             text-align: center;
//             font-size: 0.1302rem;
//         }
//     }
// }
</style>
