<template>
  <div id="app">
    <HeaderBlock />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from './blocks/HeaderBlock.vue'
import FooterBlock from './blocks/FooterBlock.vue'

export default {
  name: 'App',
  components: {
    HeaderBlock,
    FooterBlock
  }
}
</script>

<style module lang="css">
#app {
}
</style>
