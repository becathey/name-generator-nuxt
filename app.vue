<script setup lang='ts'>
import {Gender, Popularity, Length, names} from '@/data'
interface OptionsState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}
const options = reactive<OptionsState>({
  gender: Gender.FEMALE,
  popularity: Popularity.TRENDY,
  length: Length.SHORT,
})
const optionsArray = [
  {
    title: "1) Choose a gender",
    category: 'gender',
    buttons: [Gender.FEMALE, Gender.UNISEX, Gender.MALE]
  },
  {
    title: "2) Choose the name's popularity",
    category: 'popularity',
    buttons: [Popularity.TRENDY, Popularity.UNIQUE]
  },
  {
    title: "3) Choose name's length",
    category: 'length',
    buttons: [Length.LONG, Length.ALL, Length.SHORT]
  }
]
const computeSelectedNames = () => {
  const filteredNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if(options.length === Length.ALL) return true
      else return name.length === options.length
    })
    selectedNames.value = filteredNames.map(name => name.name)
}
const selectedNames = ref<string[]>([])
const removeName = (index: number) => {
  const filteredNames = [...selectedNames.value]
  filteredNames.splice(index, 1)
  selectedNames.value = filteredNames
}
</script>

<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below.</p>
    <div class="options-container">
      <Option v-for="option in optionsArray" :key="option.title" :option="option" :options="options" />
      <button @click="computeSelectedNames" class="primary">Find Names</button>
    </div>
    <div class="cards-container">
      <CardName v-for="(name, index) in selectedNames" :key="name" :name="name" @remove="() => removeName(index)" :index="index" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
  color: hsl(220, 70%, 30%);
  font-family: Arial, Helvetica, sans-serif;
}
h1 {font-size: 3rem;}
.options-container {
  position: relative;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 1rem;
  border-radius: 2rem;
  background-color: hsl(10, 100%, 95%);
}
.primary {
  margin-top: 1rem;
  padding: 0.75rem 4rem;
  border: none;
  border-radius: 6.5rem;
  background-color: hsl(360, 90%, 65%);
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}
/* 623px */
</style>