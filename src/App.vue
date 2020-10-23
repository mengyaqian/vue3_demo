<template>
  <div id="app">
    <div class="header">
      <label for="search">搜索话题：#</label>
      <input type="text" id="search" :value="currentHashtag" @input="setHashTag">
    </div>
    <div class="cards">
      <card v-for="(post, index) in filteredPosts" :key="index">
        <template v-slot:title>
          {{ post.title }}
        </template>
        <template v-slot:content>
          {{ post.content }}
        </template>
        <template v-slot:description>
          <Controls :post="post" />
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { store } from './store';
import Card from './components/Card';
import Controls from './components/Controls';

export default {
  components: {
    Card,
    Controls
  },
  setup() {
    const setHashTag = (e) => {
      store.setHashtag(e.target.value);
    }

    return {
      setHashTag,
      filteredPosts: store.filtertedPosts,
      currentHashtag: computed(() => store.state.currentHashtag)
    };
  },
};
</script>

<style>
#app {
  text-align: center;
}

.header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  line-height: 60px;
}

input {
  height: 30px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
}

.cards {
  width: 600px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
}
</style>
