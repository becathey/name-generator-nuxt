<script setup lang="ts">
interface NameProps {
    name: string
}
const props = defineProps<NameProps>()
</script>

<template>
    <div class="card">
        <h4>{{name}}</h4>
        <p>x</p>
    </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 28%;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.1rem;
  background-color: hsl(220, 70%, 30%);
  color: white;
  border-radius: 1rem;
}
.card p {
  position: absolute;
  top: -29%;
  left: 92.5%;
  color: hsla(0, 0%, 100%, 0.178);
  cursor: pointer;
}
</style>