<template>
   <div id="rpg-container">

      <div v-if="editingNode" id="network-pop-up">
         <span id="operation">node</span>
         <div id="node-editor"></div>
         <button @click="">Save</button>
         <button @click="editingNode = false">Cancel</button>
      </div>

      <div id="skill-tree">
      </div>

      <input type="file" @change="readSkillTree">
      
   </div>
</template>

<script>
import Vis from "vis";
import Hocon from "hocon-parser";
import { loadSkillTree } from "./util";

const locales = {
   en: {
      edit: 'Edit Skill Tree',
      back: 'Back',
      del: 'Delete selected',
      addNode: 'Add Skill Node',
      addEdge: 'Add Skill Link',
      editNode: 'Edit Skill Node',
      editEdge: 'Edit Skill Link',
      addDescription: 'Click in an empty space to place a new node.',
      edgeDescription: 'Click on a node and drag the edge to another node to connect them.',
      editEdgeDescription: 'Click on the control points and drag them to a node to connect to it.',
      createEdgeError: 'Cannot link edges to a cluster.',
      deleteClusterError: 'Clusters cannot be deleted.',
      editClusterError: 'Clusters cannot be edited.'
   }
};

const options = {
   manipulation: {
      editNode: (data, callback) => {
         this.editingNode = true;
         callback(data);
      }
   },
   locales: locales
};

export default {
   data () {
      return {
         /* Skill node
          * - id
          * - cost
          * - cooldown */
         skillNodes: new Vis.DataSet(),
         /* Skill link
          * - parent node
          * - child node
          * - cost (weight)
          * - type (BIDIRECTIONAL/UNIDIRECTIONAL) */
         skillLinks: new Vis.DataSet(),
         selectedSkillNode: null,
         editingNode: false
      }
   },
   mounted () {
      this.buildSkillTree();
   },
   methods: {
      buildSkillTree() {
         const element = document.getElementById('skill-tree');

         let data = {
            nodes: this.skillNodes,
            edges: this.skillLinks
         };

         let network = new Vis.Network(element, data, options);
      },

      cancelEdit(callback) {
         callback(null);
      },

      readSkillTree(e) {
         const files = e.target.files || e.dataTransfer.files;

         if (!files.length) { 
            return; 
         }

         const fileExtension = files[0].name.split(".").pop().toLowerCase();

         const skillTreeFile = files[0];
         const reader = new FileReader();

         reader.onload = (e) => {
            let skillTree = loadSkillTree(reader.result, fileExtension);
            if (skillTree) {
               this.skillNodes = new Vis.DataSet(skillTree.skillNodes);
               this.skillLinks = new Vis.DataSet(skillTree.skillLinks);
               this.buildSkillTree();
            }
         }

         reader.readAsText(skillTreeFile);
      },
   }
}
</script>

<style lang="stylus">
#skill-tree
   height 75vh
   background #12110f url(https://www.onlygfx.com/wp-content/uploads/2015/12/simple-old-paper-2-transparent.jpg) no-repeat
   background-size cover

#network-pop-up 
   position:absolute
   top 350px
   left 170px
   z-index 299
   width 250px
   height 120px
   background-color #f9f9f9
   border-style solid
   border-width 3px
   border-color #5394ed
   padding 10px
   text-align center

.vis-network
   position relative
   font-size 28px

.vis-button 
   font-size 16px
   margin-left 10px

.vis-manipulation
   display flex !important
   border-top 1px solid lightgray
   height 35px
   align-items center
</style>
