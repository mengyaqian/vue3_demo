<template>
  <div class="hashtag" @click="setHashTag">
    #{{ hashtag }}
  </div>
</template>

<script>
import { store } from '../store';
export default {
  props: {
    hashtag: {
      type: String
    }
  },
  setup(props, ctx) {
    const setHashTag = () => {
      store.setHashtag(props.hashtag);
    }

    return {
      setHashTag
    }
  }
}
</script>

<style scoped>
.hashtag {
  margin: 0 2px;
}

.hashtag:hover {
  color: #eb7350;
}
</style>