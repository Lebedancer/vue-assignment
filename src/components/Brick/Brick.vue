<template>
  <div class="brick">
    <span class="brick__text">{{ text }}</span>
  </div>
</template>

<script>
  export default {
    name: 'brick',
    props: ['text']
  }
</script>

<!-- Global CSS -->
<style>

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  .brick {
    background: yellowgreen;
    width: 100px;
    height: 100px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .brick__text {
    position: absolute;
    right: -50px;
  }
</style>
