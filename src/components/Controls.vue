<template>
  <div>
    <div class="like">
      <button @click="like">
        <span class="iconfont">&#xe618;</span>
      </button>
      <div>{{ post.likes }}</div>
    </div>
    <div class="hashtags">
      <hashtag
        v-for="(hashtag, index) in post.hashtags"
        :hashtag="hashtag"
        :key="index"
      ></hashtag>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import Hashtag from './Hashtag';

export default {
  props: {
    post: Object,
  },
  setup(props) {
    const like = () => {
      store.incrementLike(props.post);
    }

    return {
      like
    }
  },
  components: {
    Hashtag,
  },
};
</script>

<style scoped>
.like {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  align-items: center;
}

.hashtags {
  display: flex;
  height: 100%;
  align-items: center;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
}
</style>
