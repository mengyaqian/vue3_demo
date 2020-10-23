import { reactive, computed } from 'vue';
import { posts } from './data/posts';

class Store {
  constructor() {
    this.state = reactive({
      posts,
      currentHashtag: null
    })
  }

  get filtertedPosts() {
    return computed(() => {
      if (!store.state.currentHashtag) {
        return store.state.posts;
      }

      return store.state.posts.filter(post => {
        return post.hashtags.includes(store.state.currentHashtag)
      })
    })
  }

  setHashtag(tag) {
    this.state.currentHashtag = tag;
  }

  incrementLike(post) {
    const thePost = this.state.posts.find(p => {
      return p.id === post.id;
    })

    if (!thePost) {
      return 
    }

    thePost.likes += 1;
  }
}

export const store = new Store();