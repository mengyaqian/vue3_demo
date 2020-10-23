<template>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
  width: 100%;
  height: 444px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin: 5px 0;
  cursor: pointer;
}

.title {
  height: 60px;
}

.content {
  height: 300px;
}

.description {
  height: 84px;
}

.description div {
  height: 100%;
  display: flex;
  justify-content: center;
}

.title,
.content,
.description {
  padding: 16px;
  text-align: center;
}

.title,
.content {
  border-bottom: 1px solid silver;
}

.title {
  font-size: 1.25em;
}
</style>