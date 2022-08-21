<template>
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
</template>