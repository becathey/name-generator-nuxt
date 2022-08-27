<script setup lang='ts'>
import {Gender, Popularity, Length} from '@/data'
interface OptionProps {
    option: {
        title: string;
        category: string;
        buttons: Gender[] | Popularity[] | Length[]
    };
    options: {
        gender: Gender;
        popularity: Popularity;
        length: Length;
    }
}
const props = defineProps<OptionProps>()
const computeButtonClasses = (value, index) => {
    const classNames = []
    if(props.options[props.option.category] === value) {
        classNames.push('option-active')
    }
    if(index === 0) classNames.push('option-left')
    if(index === props.option.buttons.length - 1) classNames.push('option-right')
    return classNames.join(' ')
}
</script>
<template>
    <div class="option-container">
        <h4>{{option.title}}</h4>
        <div class="option-buttons">
          <button 
            v-for="(value, index) in option.buttons"
            :key='value'
            :class="computeButtonClasses(value, index)" 
            class="option"
            @click="options[option.category] = value"
          >{{value}}
          </button>
        </div>
      </div>
</template>

<style scoped>
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
@media (max-width: 40rem) {
  .option {
    width: 8rem;
  }
}
@media (max-width: 424px) {
  .option {
    width: 100%;
  }
  .option-left {
    border-radius: 0;
  }
  .option-right {
    border-radius: 0;
  }
}
</style>