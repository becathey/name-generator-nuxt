<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below.</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button class="option option-left">Boy</button>
          <button class="option">Unisex</button>
          <button class="option option-right">Girl</button>
        </div>
      </div>
      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button class="option option-left">Trendy</button>
          <button class="option option-right">Unique</button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose name's length</h4>
        <div class="option-buttons">
          <button class="option option-left">Long</button>
          <button class="option">All</button>
          <button class="option option-right">Short</button>
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
</style>