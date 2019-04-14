<template>
   <div id="rpg-container">

      <div id="skill-tree">
      </div>

      <div id="skill-node-editor">
         <p><label>Node Id:</label><input id="skill-node-editor-id" type="text"/></p>
         <p><label>Skill Id:</label><input id="skill-node-editor-skill-id" type="text"/></p>
         <p><label>Resource Cost:</label><input id="skill-node-editor-resource-cost" type="text"/></p>
         <p><label>Cooldown:</label><input id="skill-node-editor-cooldown" type="text"/></p>
         <div id="skill-node-editor-properties">
            <div id="skill-node-editor-properties-header">
               <p>Properties</p>
               <button id="skill-node-editor-properties-add-property" @click="nodeEditorAddEmptyProperty">Add Property</button>
            </div>
            <div id="skill-node-editor-properties-list">
            </div>
         </div>
         <div><button id="skill-node-editor-save" @click="nodeEditorSave">Save</button></div>
      </div>

      <div id="skill-edge-editor">
         Todo. This will contain properties to be configured similarly to the node editor. 
         You may not have both an edge editor and a node editor active at the same time. 
         When one is shown, the other is hidden.
      </div>

      <div v-if="editingNode" id="network-pop-up">
         <span id="operation">node</span>
         <div id="node-editor"></div>
         <button @click="">Save</button>
         <button @click="editingNode = false">Cancel</button>
      </div>

      <div id="button-row">
         <input type="file" @change="readSkillTree" id="upload-config">
         <input type="button" value="Upload a Skill Graph" @click="clickUpload" id="upload-button">
      </div>
      
   </div>
</template>

<script>
import Vis from "vis";
import Hocon from "hocon-parser";
import { loadSkillTree, options } from "./util";

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
      options.manipulation = {
         editNode: (data, callback) => {
            this.editNode(data, callback);
         }
      };
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

         network.enableEditMode();
         network.stopSimulation();
         network.on('selectNode', (event) => this.onSelectNode(network, event))
         // TODO: Add node editor save button functionality
         // TODO: Add edge editor save button functionality
      },

      editNode(data, callback) {
         this.editingNode = true;
         callback(data);
      },

      cancelEdit(callback) {
         callback(null);
      },

      clickUpload() {
         document.getElementById("upload-config").click();
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

      onSelectNode(network, event) {
         // TODO: Fix this
         const node = this.skillNodes.get(event.nodes[0]);

         const nodeIdField = document.getElementById("skill-node-editor-id");
         const skillIdField = document.getElementById("skill-node-editor-skill-id");
         const resourceCostField = document.getElementById("skill-node-editor-resource-cost");
         const cooldownField = document.getElementById("skill-node-editor-cooldown");

         nodeIdField.setAttribute('value', node.id);
         
         if (node.raw) {
            skillIdField.setAttribute('value', node.raw['skill-id'] || '');
            resourceCostField.setAttribute('value', node.raw['resource-cost'] || '');
            cooldownField.setAttribute('value', node.raw['cooldown'] || '');

            const propertiesDiv = document.getElementById("skill-node-editor-properties-list");

            // Remove all nodes from the properties list
            while (propertiesDiv.firstChild) {
               propertiesDiv.removeChild(propertiesDiv.firstChild);
            }

            if (node.raw.properties && node.raw.properties instanceof Object) {
               var i = 0;

               // Create new nodes for each property
               for (var key in node.raw.properties) {
                  const propertyNode = document.createElement('p');
                  propertyNode.setAttribute('id', 'skill-node-properties-' + i);
                  
                  const keyLabel = document.createElement('label');

                  const keyInput = document.createElement('input');
                  keyInput.setAttribute('id', 'skill-node-properties-' + i + '-key');
                  keyInput.setAttribute('value', key);

                  keyLabel.appendChild(keyInput)

                  const valueInput = document.createElement('input');
                  valueInput.setAttribute('id', 'skill-node-properties-' + i + '-value');
                  valueInput.setAttribute('value', node.raw.properties[key]);

                  propertyNode.appendChild(keyLabel);
                  propertyNode.append(":");
                  propertyNode.appendChild(valueInput);

                  propertiesDiv.appendChild(propertyNode);
                  i++;
               }
            }
         }

         // TODO: When selecting a node, set the fields.
      },

      nodeEditorSave() {

      },

      nodeEditorAddEmptyProperty() {

      }
   }
}
</script>

<style lang="stylus">
#rpg-container
   overflow: hidden

#skill-tree
   height 75vh
   background #12110f url(https://www.onlygfx.com/wp-content/uploads/2015/12/simple-old-paper-2-transparent.jpg) no-repeat
   background-size cover
   border solid 3px black
   width 70%
   border-radius 5px
   display inline-block

#skill-node-editor
   width 29%
   display inline-block // inline-block
   float right
   > p
      margin 10px
      > input
         width 60%
         float right

div #skill-node-editor-properties
   margin 10px
   > div
      text-align center
      > p > label > input
         width 40%
         direction RTL
      > p > input
         width 40%
         float right

#skill-edge-editor
   width 29%
   display none
   float right
   padding 10px
   margin -10px

#button-row
   margin-top 10px
   clear: both
   > *
      height 30px
      cursor pointer

#upload-config 
   display none

#network-pop-up 
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
   cursor pointer
   background #e2950f
   padding 5px
   border solid 1px black
   border-radius 4px
   -webkit-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.5);
   -moz-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.5);
   box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.5);
   transition all 0.2s
   &:hover
      background #fff

.vis-manipulation
   display flex !important
   align-items center
   padding-top: 4px
   position: absolute
   left: 0
   top: 5px
   width: 100%
   height: 28px

.vis-edit-mode 
   position: absolute
   left: 0
   top: 10px
   height: 30px

.border-test
   border solid 1px black
</style>
