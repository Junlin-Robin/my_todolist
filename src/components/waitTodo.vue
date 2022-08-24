<template>
  <div>
    <showin />
    <Righter />
  </div>
</template>

<script>
import showin from "./show.vue";
import Righter from "./Righter.vue"

export default {
    name:"waitTodo",
    data() {
        return {
            
        }
    },
    components:{
        showin,
        Righter,
    }

}
</script>

<style scoped>
div{
    flex: 1 0 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 ;
    padding: 0;
    height: 100vh;
    overflow: hidden;
}

</style>