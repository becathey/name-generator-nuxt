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
</script>

<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below.</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button 
            :class="options.gender === Gender.MALE && 'option-active'" 
            class="option option-left"
            @click="options.gender = Gender.MALE"
          >Male
          </button>
          <button 
            :class="options.gender === Gender.UNISEX && 'option-active'" 
            class="option"
            @click="options.gender = Gender.UNISEX"
          >Unisex
          </button>
          <button 
            :class="options.gender === Gender.FEMALE && 'option-active'" 
            class="option option-right"
            @click="options.gender = Gender.FEMALE"
          >Female
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button 
            :class="options.popularity === Popularity.TRENDY && 'option-active'" 
            class="option option-left"
            @click="options.popularity = Popularity.TRENDY"
          >Trendy
          </button>
          <button 
            :class="options.popularity === Popularity.UNIQUE && 'option-active'" 
            class="option option-right"
            @click="options.popularity = Popularity.UNIQUE"
          >Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose the name's length</h4>
        <div class="option-buttons">
          <button 
            :class="options.length === Length.LONG && 'option-active'" 
            class="option option-left"
            @click="options.length = Length.LONG"
          >Long
          </button>
          <button 
            :class="options.length === Length.ALL && 'option-active'" 
            class="option"
            @click="options.length = Length.ALL"
          >All
          </button>
          <button 
            :class="options.length === Length.SHORT && 'option-active'" 
            class="option option-right"
            @click="options.length = Length.SHORT"
          >Short
          </button>
        </div>
      </div>
      <button @click="computeSelectedNames" class="primary">Find Names</button>
    </div>
    <div class="cards-container">
      <div v-for="name in selectedNames" :key="name" class="card">
        <h4>{{name}}</h4>
        <p>x</p>
      </div>
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
.option-container {
  margin-bottom: 2rem;
}
.option {
  width: 12rem;
  padding: 0.75rem;
  outline: 0.15rem solid hsl(360, 90%, 60%);
  border: none;
  background-color: white;
  color: hsl(220, 70%, 30%);
  font-size: 1rem;
  font-weight: 200;
  cursor: pointer;
}
.option-left {
  border-radius: 1rem 0 0 1rem;
}
.option-right {
  border-radius: 0 1rem 1rem 0;
}
.option-active {
  background-color: hsl(360, 90%, 70%);
  color: white;
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
  flex-wrap: wrap;
  margin-top: 3rem;
}
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