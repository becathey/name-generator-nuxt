<script setup lang='ts'>
enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
  UNISEX = 'Unisex',
}
enum Popularity {
  TRENDY = 'Trendy',
  UNIQUE = 'Unique',
}
enum Length {
  LONG = 'Long',
  ALL = 'All',
  SHORT = 'Short',
}
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
</script>

<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below.</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button :class="options.gender === Gender.MALE && 'option-active'" class="option option-left">Male</button>
          <button :class="options.gender === Gender.UNISEX && 'option-active'" class="option">Unisex</button>
          <button :class="options.gender === Gender.FEMALE && 'option-active'" class="option option-right">Female</button>
        </div>
      </div>
      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button :class="options.popularity === Popularity.TRENDY && 'option-active'" class="option option-left">Trendy</button>
          <button :class="options.popularity === Popularity.UNIQUE && 'option-active'" class="option option-right">Unique</button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose the name's length</h4>
        <div class="option-buttons">
          <button :class="options.length === Length.LONG && 'option-active'" class="option option-left">Long</button>
          <button :class="options.length === Length.ALL && 'option-active'" class="option">All</button>
          <button :class="options.length === Length.SHORT && 'option-active'" class="option option-right">Short</button>
        </div>
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
</style>