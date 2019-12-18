<template>
   <div id="skill-link-editor">
      <h2> Link Editor </h2>
      <div class="button-row">
         <button v-on:click="$emit('update:link', link)"> Save </button>
      </div>
      <BasicOption id="Cost" v-model="link.cost" :value="link.cost"/>
   </div>
</template>

<script>
import BasicOption from '../BasicOption';

export default {
   components: {
      BasicOption
   },

   props: {
      linkData: {
         type: Object,
         required: true
      }
   },

   watch: {
      linkData: function(newLinkData) {
         this.link = newLinkData;
      }
   },

   data() {
      return {
         link: {
            cost: this.linkData.cost || "",
         }
      }
   },
}
</script>

<style lang="stylus" scoped>
#skill-link-editor
   border solid 1px
   padding 15px
</style>