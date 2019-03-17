<template>
   <div id="item-editor">
      <div id="options">
         <fieldset id="general-options">
            <legend> Item Options </legend>
            <div class="option">
               <div class="label">ID</div>
               <input v-model.trim="item.id">
            </div>
            <div class="option">
               <div class="label">Name</div>
               <input v-model="item.name">
            </div>
            <div class="option">
               <div class="label">Durability</div>
               <input v-model.number="item.durability" type="number" step="any">
            </div>
            <div class="option">
               <div class="label">Quantity</div>
               <input v-model.number="item.quantity" type="number">
            </div>
            <div class="option">
               <div class="label">Item Type</div>
               <input v-model="item.type">
            </div>
            <div class="option">
               <div class="label">Lore</div>
               <textarea rows="2" v-model="item.lore"></textarea>
            </div>
         </fieldset>

         <fieldset id="attributes">
            <legend> Attributes </legend>
            <div class="attribute" v-for="(amount, name) in item.attributes">
                  <div class="label">{{ name | capitalize }}</div>
                  <input class="attribute-input" v-model.number="item.attributes[name]" type="number" step="any">
            </div>
         </fieldset>
      </div>

      <button @click="generate">Generate Item</button>
      <button @click="clearAll">Clear All</button>
      <button @click="downloadJson">Download</button>
      <button @click="copy">Copy Text</button>

      <div class="output-window">
         <pre>{{ generated }}</pre>
      </div>

      <a id="download"></a>
      <textarea id="copy"></textarea>
   </div>
</template>

<script>
<<<<<<< Updated upstream
import ItemAttribute from './ItemAttribute.vue'
=======
>>>>>>> Stashed changes
export default {
   data () {
      return {
         item: {
            id: "",
            name: "",
            durability: "",
            quantity: 1,
            type: "",
            lore: "",
            attributes: {
               strength: 0,
               constitution: 0,
               defense: 0,
               agility: 0,
               charisma: 0,
               perception: 0,
               luck: 0,
               intelligence: 0,
               wisdom: 0,
               willpower: 0
            }
         },
         generated: ""
      }
   },
   methods: {
      downloadJson () {
         let json = new Blob([this.generate()], {type: "text/plain;charset=utf-8"});
         let link = document.getElementById("download");
         link.href = window.URL.createObjectURL(json);
         link.download = this.item.id + ".json"
         link.click();
      },
      generate () {
         let info = "{\n";
         Object.keys(this.item).forEach(option => {
            if (this.item[option] && typeof this.item[option] !== 'object') {
               info += "\t" + option + "=" + this.optionToString(option, this.item[option]) + "\n";
            }
         });
         info += "\tattributes {\n"
         Object.keys(this.item.attributes).forEach(attribute => {
            if (this.item.attributes[attribute]) {
               info += "\t\t" + attribute + "=" + this.item.attributes[attribute] + "\n";
            }
         })
         info += "\t}\n"
         info += "}";
         this.generated = info;
      },
      optionToString(option, value) {
         let prepared;
         switch(option) {
            case "name": case "type":
               prepared = "\"" + value + "\"";
               break;
            case "id":
               prepared = value.split(' ').join('-');
               break;
            case "lore":
               prepared = "[";
               value.split('\n').forEach(line => {
                  prepared += "\n\t\t\"" + line + "\",";
               })
               prepared = prepared.replace(/.$/,"");
               prepared += "\n\t]";
               break;
            default:
               prepared = value;
         }
         return prepared;
      },
      clearAll () {
         Object.assign(this.$data, this.$options.data.call(this));
      },
      copy() {
         let copied = document.getElementById('copy');
         copied.value = this.generated;
         copied.select();
         let bool = document.execCommand("copy");
         console.log(bool);
      }
   },
   filters: {
      whitespace(value) {
         return value.split(' ').join('');
      },
      capitalize(value) {
         if (!value) return ''
         value = value.toString()
         return value.charAt(0).toUpperCase() + value.slice(1)
      }
   }
}
</script>

<style lang="stylus">
@import '../theme/styles/config.styl'

input
   max-height: 30px

button 
   margin-right: 5px

textarea 
   resize: none

#item-editor 
   max-width: 100%
   box-sizing: border-box

.output-window 
   color: wheat

.value 
   color: cornflowerblue

#download 
   display: none

#copy 
   position: absolute
   left: -9999px

.label 
   margin-right: 5px
   width: 30%
   min-width: 100px

.attribute, .option 
   display: flex

#options 
   display: grid 
   grid-template-columns: 1fr 1fr

#general-options 
   display: grid
   grid-template-columns: repeat(2, 1fr)
   grid-gap: 10px
   margin-bottom: 10px
   > div
      margin-bottom: 5px
      > input, textarea
         width: 150px
         box-sizing: border-box

#attributes 
   display: grid
   grid-template-columns: repeat(2, 1fr)
   grid-gap: 10px
   margin-bottom: 10px

.attribute-input 
   width: 10%
   min-width: 50px

@media (max-width: 1100px)
   #options
      grid-template-columns: 1fr
      grid-template-rows: 1fr 1fr
</style>
