<template>
   <div id="skill-link-editor">
      <div class="button-row">
         <button v-on:click="$emit('update:link', link)"> Save </button>
      </div>
      <BasicOption id="Parent Node" v-model="link.parentNode" :value="link.parentNode"/>
      <BasicOption id="Child Node" v-model="link.childNode" :value="link.childNode"/>
      <BasicOption id="Cost" v-model="link.cost" :value="link.cost"/>
      <BasicOption id="Type" v-model="link.type" :value="link.type"/>
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
            parentNode: this.linkData.parentNode || "",
            childNode: this.linkData.childNode || "",
            cost: this.linkData.cost || "",
            type: this.linkData.type || ""
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