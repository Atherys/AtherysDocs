<template>
   <div id="skill-node-editor">
      <div class="button-row">
         <button v-on:click="$emit('update:node', node)"> Save </button>
         <button v-on:click="$emit('copy:node', node)"> Copy </button>
         <button> Paste </button>
      </div>

      <BasicOption id="Node ID" v-model="node.nodeId" :value="node.nodeId"/>
      <BasicOption id="Skill ID" v-model="node['skillId']" :value="node['skillId']"/>
      <BasicOption id="Cost" v-model="node.cost" :value="node.cost"/>
      <BasicOption id="Cooldown" v-model="node.cooldown" :value="node.cooldown"/>

      <div id="properties-container">
            <p id="properties-title">Properties</p>
            <div id="properties-buttons">
               <button @click="addProperty">Add Property</button>
               <button @click="removeProperty">Remove Property</button>
            </div>
         </div>
         <div id="properties" v-for="property in node.properties">
            <div class="property">
               <input v-model="property.name"/>
               <div class="colon">:</div>
               <input v-model="property.value"/>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import BasicOption from '../BasicOption';

export default {
   components: {
      BasicOption
   },

   props: {
      nodeData: {
         type: Object,
         required: true
      },
      clipboard: {
         type: Object,
         required: false
      }
   },

   data() {
      return {
         node: {
            nodeId: this.nodeData.nodeId,
            skillId: this.nodeData.skillId || "",
            cost: this.nodeData.cost || "",
            cooldown: this.nodeData.cooldown || "",
            properties: this.nodeData.properties || []
         }
      }
   },

   watch: {
      nodeData: function(newNodeData) {
         this.node = newNodeData;
      }
   },

   methods: {
      addProperty() {
         this.node.properties.push({name: "", value: ""});
      },

      removeProperty() {
         this.node.properties.pop();
      },

      copy() {

      },

      paste() {

      }
   }
}
</script>

<style lang="stylus">
#skill-node-editor
   border: solid 1px
   padding: 15px

#properties-title
   display flex
   justify-content center

#properties-buttons
   display flex
   justify-content space-around
</style>