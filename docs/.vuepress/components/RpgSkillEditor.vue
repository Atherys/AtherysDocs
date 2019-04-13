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
            this.loadSkillTree(reader.result, fileExtension);
         }

         reader.readAsText(skillTreeFile);
      },

      processNode(rawId, raw) {
         return {
            id: rawId,
            label: raw['skill-id'],
            shape: 'box',
            shadow: {
               enabled: true
            },
            color: {
               background: '#aa3300',
               border: '#000000'
            },
            font: {
               size: 18
            }
         };
      },

      processEdge(raw) {
         const edge = {
            from: raw['parent-node'],
            to: raw['child-node'],
            smooth: false,
            color: {
               color: "#957e4c"
            },
            font: {
               strokeColor: "#aa3300"
            },
            mass: -1.0
         };

         if (raw.type == "UNIDIRECTIONAL") {
            edge.arrows = 'to';
         } else {
            edge.arrows = 'to, from';
         }

         if (raw.cost != null) {
            edge.label = "" + raw.cost;
         }

         return edge;
      },

      loadSkillTree(contents, format) {
         var skillTree = {};

         const skillGraphKey = 'skill-graph';
         const skillNodesKey = 'skill-nodes';
         var skillLinksKey = 'skill-links';

         if (format == "json") {
            skillTree = JSON.parse(contents);
            skillLinksKey = 'skill-links';
         } else if (format == "conf" || format == "hocon") {
            skillTree = Hocon(contents);
            skillLinksKey = 'skill-links '; // the space is required because hocon-parser interprets this as a valid key...
         } else {
            alert("Unsupported file format. Please provide either a JSON ( ending in .json ) or HOCON ( ending in .conf ).");
            throw "Unsupported file format.";
         }

         if (skillTree['skill-graph']) {

            let rawNodes = skillTree[skillGraphKey][skillNodesKey];
            let rawEdges = skillTree[skillGraphKey][skillLinksKey];

            let nodes = [];
            let edges = [];

            // Iterate over all nodes as provided in configuration, process them and push them into the nodes collection
            Object.keys(rawNodes).forEach((key) => nodes.push(this.processNode(key, rawNodes[key])));

            // Iterate over all links as provided in configuration, process them and push them into the edges collection
            rawEdges.forEach((rawEdge) => edges.push(this.processEdge(rawEdge)));

            this.skillNodes = new Vis.DataSet(nodes);
            this.skillLinks = new Vis.DataSet(edges);

            this.buildSkillTree();
         }
      }
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
