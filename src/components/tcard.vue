<template>
    <div class="backk">
        <div class="card border">
<i :class="icon"></i>
    </div>
    <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
name: 'tcard',
props: ['icon','title']
}
</script>
<style lang="scss">
.backk{
    margin: 30px 30px;

    height: min-content;
    width: min-content;

    h2{
        font-size: 1.6rem;
        margin-top: 10%;
        text-align: center;
    }
}
i{
    font-size: 7rem;
    color: #FFFFFF;
}
.card{
    padding: 20px;
    height: min-content;
    border-radius: 2;
}

</style>