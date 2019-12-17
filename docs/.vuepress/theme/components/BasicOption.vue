<template>
   <div class="option">
      <span class="label">{{ id }}</span>
      <input @input.lazy="$emit('input', $event.target.value)" :type="type" v-model="val">
   </div>
</template>

<script>
export default {
   props: {
      id: {
         type: String,
         required: true
      },
      type: {
         type: String,
         required: false
      },
      value: {
         required: false
      }
   },

   watch: {
      value: function(newVal) {
         this.val = newVal;
      }
   },

   data() {
      return {
         val: this.value
      }
   }
}
</script>

<style lang="stylus">
.option
   align-items: center
   display: flex
   margin-bottom: 5px

.label
   display: flex
   align-items: center
   margin-right: 5px
   width: 30%
   min-width: 60px
</style>

