<template>
   <div class="option">
      <span class="label">{{ id }}</span>
      <input @input.lazy="$emit('input', $event.target.value)" :type="type">
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

