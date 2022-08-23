<script setup lang="ts">
interface NameProps {
    name: string;
    index: number;
}
const props = defineProps<NameProps>()

const emit = defineEmits(["remove"])
const removeName = () => {
    emit("remove", props.index)
}
</script>

<template>
    <div class="card">
        <h4>{{name}}</h4>
        <p @click="removeName">x</p>
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
  top: -25%;
  left: 92.5%;
  color: hsla(0, 0%, 100%, 0.5);
  cursor: pointer;
}
</style>