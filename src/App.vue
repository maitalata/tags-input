<script>
import TagsInput from './components/TagsInput.vue'

export default {
  data: () => ({
    jsFrameworks: ['react.js', 'vue.js', 'angular'],
    backendFrameworks: [],
  }),
  // mounted() {
  //   setTimeout(() => {
  //     this.jsFrameworks.push('svelte.js')
  //   }, 3000)
  // },
  components: {
    // TagsInput,
  },
  methods: {
    handleChange(tags) {
      this.jsFrameworks = [...tags]
    },
  },
}
</script>

<template>
  <h1>Your favourite frameworks</h1>
  <div>{{jsFrameworks}}</div>
  <!-- <tags-input></tags-input> -->
  <tags-input :selected-tags="jsFrameworks" @change="handleChange" />
  <!-- <TagsInput/> -->

  <div>{{backendFrameworks}}</div>
  <tags-input :selected-tags="backendFrameworks" @change="backendFrameworks = [...$event]" />
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
h1 {
  color: #42b883;
}
</style>
