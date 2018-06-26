<template>
  <div id="app">
    <div class="wrapper">
      <div class="stack">
        <Brick v-for="item in list" :text="item.text" :key="item.id"/>
      </div>
      <div>
        <input v-on:change="setHeight" type="text" >
      </div>
    </div>
  </div>
</template>

<script>
  import Brick from './Brick';

  export default {
    name: 'app',
    data() {
      return {
        total: null,
        list: [
          { id: 1, text: 'tutu'}
        ]
      }
    },
    methods: {
      setHeight(e) {
        debugger

      }
    },
    components: {
      'Brick': Brick
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  .wrapper {
    width: 1006px;
    margin: 70px;
  }

  .stack {
    display: flex;
    flex-direction: column;
    width: 100px;
    border: 1px solid #333;
    padding: 5px;
  }
</style>
