<template>
   <div id="rpg-container">

      <div id="skill-tree-editor">
         <div id="skill-tree">
         </div>
         <SkillNodeEditor 
            v-if="editingNode" 
            :nodeData="Object.assign({}, selectedSkillNode.raw)"
            :clipboard="copiedNode"
            @update:node="updateSkillNode($event)"
            @copy:node="copySkillNode($event)"
         />
         <SkillLinkEditor 
            v-if="editingLink" 
            :linkData="Object.assign({}, selectedSkillLink.raw)"
            @update:link="updateSkillLink($event)"
         />
      </div>

      <div class="button-row">
         <input type="file" @change="readSkillTree" id="upload-config">
         <input type="button" value="Upload a Skill Graph" @click="clickUpload" id="upload-button">
         <input type="button" value="Download Skill Graph" @click="downloadSkillTree">
      </div>

      <a id="download-tree" style="display: hidden;"></a>
   </div>
</template>

<script>
import SkillNodeEditor from '../components/rpg/SkillNodeEditor'
import SkillLinkEditor from '../components/rpg/SkillLinkEditor'
import Vis from "vis";
import Hocon from "hocon-parser";
import { 
   loadSkillTree, exportSkillTree, options, 
   downloadFile, isBidirectional, getOtherDirection,
   getEmptyNode 
} from "../util/util";

export default {
   components: {
      SkillNodeEditor, SkillLinkEditor
   },

   data () {
      return {
         skillNodes: new Vis.DataSet([{ id: 'root-skill', raw: getEmptyNode('root-skill') }]),
         skillLinks: new Vis.DataSet(),
         uniqueSkills: [],
         selectedSkillNode: { raw: {} },
         editingNode: false,
         copiedNode: null,
         selectedSkillLink: { raw: {} },
         editingLink: false
      }
   },

   mounted () {
      options.manipulation = {
         addNode: (nodeData, callback) => {
            nodeData.raw = getEmptyNode(nodeData.id);
            callback(nodeData);
         },
         deleteNode: (nodeData, callback) => {
            if (nodeData.nodes[0] === 'root') {

            } else {
               this.editingNode = false;
               callback(nodeData);
            }
         },

         addEdge: (edgeData, callback) => {
            if (edgeData.to === edgeData.from) {
              return;
            }

            let toNode = this.skillNodes.get(edgeData.to);
            let fromNode = this.skillNodes.get(edgeData.from);
            edgeData.raw = { parentNode: fromNode.raw.nodeId, childNode: toNode.raw.nodeId };
            callback(edgeData);
         },
         deleteEdge: (edgeData, callback) => {
            this.editingLink = false;
            callback(edgeData);
         },
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

         network.on('selectNode', event => this.onSelectNode(network, event));
         network.on('deselectNode', event => this.onDeselectNode());

         network.on('selectEdge', event => this.onSelectEdge(network, event));
         network.on('deselectEdge', event => this.onDeselectEdge());
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
               this.uniqueSkills = skillTree.uniqueSkills
               this.buildSkillTree();
            }
         }

         reader.readAsText(skillTreeFile);
      },

      downloadSkillTree() {
         let contents = exportSkillTree(this.skillNodes, this.skillLinks, this.uniqueSkills);
         downloadFile(contents, 'skill-graph.json', 'download-tree');
      },

      onSelectNode(network, event) {
         const node = this.skillNodes.get(event.nodes[0]);
         if (!node.raw) {
            node.raw = {properties: []};
            this.skillNodes.update(node);
         }
         this.selectedSkillNode = node;
         this.editingNode = true;
      },

      onDeselectNode() {
         this.editingNode = false;
      },

      copySkillNode(newNode) {
         this.copiedNode = newNode;
         delete this.copiedNode.nodeId;
      },

      onSelectEdge(network, event) {
         const link = this.skillLinks.get(event.edges[0]);
         if (!link.raw) {
            link.raw = {};
            this.skillLinks.update(link);
         }
         this.selectedSkillLink = link;
         this.editingLink = true;
      },

      onDeselectEdge() {
         this.editingLink = false;
      },

      updateSkillNode(newSkillNode) {
         this.selectedSkillNode.raw = newSkillNode;
         this.selectedSkillNode.label = newSkillNode.skillId;
         this.skillNodes.update(this.selectedSkillNode);
      },

      updateSkillLink(newSkillLink) {
         this.selectedSkillLink.raw = newSkillLink;
         this.skillLinks.update(this.selectedSkillLink);
         let otherDirection = getOtherDirection(this.selectedSkillLink, this.skillLinks);
         if (otherDirection.length > 0) {
            otherDirection[0].raw.cost = this.selectedSkillLink.raw.cost;
         }
      },
   }
}
</script>

<style lang="stylus">
#rpg-container
   overflow: hidden

#skill-tree-editor
   display flex
   justify-content space-between

#skill-tree
   background #12110f url(https://www.onlygfx.com/wp-content/uploads/2015/12/simple-old-paper-2-transparent.jpg) no-repeat
   background-size cover
   border solid 3px black
   width 65%
   border-radius 5px
   height 70vh
   display inline-block

.button-row
   margin-top 10px
   margin-bottom 10px
   clear: both
   > button
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

.property 
   display flex
   justify-content space-around
   margin-top 10px
   input 
      width 100px
   .colon 
      padding-top 3px
</style>
