<template>
   <div id="item-editor">
      <div id="options">
         <fieldset id="general-options">
            <legend> Item Options </legend>
            <BasicOption id="ID" v-model="item.id"/>
            <BasicOption id="Name" v-model="item.name"/>
            <BasicOption id="Durability" v-model.number="item.durability" type="number"/>
            <BasicOption id="Quantity" v-model.number="item.quantity" type="number"/>
            <BasicOption id="Item Type" v-model="item.type"/>
            <div class="option">
               <div class="label">Lore</div>
               <textarea rows="2" v-model.lazy="item.lore"></textarea>
            </div>
         </fieldset>

         <fieldset id="attributes">
            <legend> Attributes </legend>
            <div class="attribute" v-for="(amount, name) in item.attributes">
                  <div class="label">{{ name | capitalize }}</div>
                  <input class="attribute-input" v-model.number.lazy="item.attributes[name]" type="number" step="any">
            </div>
         </fieldset>

         <fieldset id="enchantments">
            <legend> Enchantments </legend>
            <div class="enchantment" v-for="enchantment in item.enchantments"> 
               <div>
                  <div class="label"> Type </div>
                  <input v-model.lazy="enchantment.type"> 
               </div>
               <div>
                  <div class="label"> Level </div> 
                  <input class="level" type="number" v-model.number.lazy="enchantment.level">
               </div>
            </div>
            <button @click="addEnchantment">
               Add Enchantment
            </button>
            <button @click="removeEnchantment">
               Remove Enchantment
            </button>
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
               con: 0,
               str: 0,
               dex: 0,
               int: 0,
               wis: 0,
               magicres: 0,
               physres: 0,
            },
            enchantments: []
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
            if (option === "enchantments" || option === "attributes") {
               info += this.optionToString(option, this.item[option]);
            } else if(this.item[option]) {
               info += "\t" + option + this.optionToString(option, this.item[option]) + "\n";
            }
         });
         info += "}";
         this.generated = info;
      },
      optionToString(option, value) {
         let prepared = "\t";
         switch(option) {
            case "name": case "type":
               prepared = "=\"" + value + "\"";
               break;
            case "id":
               prepared = "=" + value.split(' ').join('-');
               break;
            case "lore":
               prepared = "=[";
               value.split('\n').forEach(line => {
                  prepared += "\n\t\t\"" + line + "\",";
               })
               prepared = prepared.replace(/.$/,"");
               prepared += "\n\t]";
               break;
            case "enchantments":
               prepared = "";
               value.forEach(enchantment => {
                  prepared += '\n\t\t"' + enchantment.type + '"=' + enchantment.level + ",";
               });
               prepared = prepared.replace(/.$/, "");
               if (prepared === "") {
                  prepared = "";
               } else {
                  prepared = "\tenchantments=[" + prepared + "\n\t]\n";
               }
               break;
            case "attributes":
               prepared = "";
               Object.keys(value).forEach(attribute => {
                  if (value[attribute]) {
                     prepared += "\t\t" + attribute + "=" + value[attribute] + "\n";
                  }
               })
               if (prepared !== "") {
                  prepared = "\tattributes {\n" + prepared + "\t}\n";
               }
               break;
            default:
               prepared = "=" + value;
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
      },
      addEnchantment() {
         this.item.enchantments.push({type:"", level:""});
      },
      removeEnchantment() {
         if (this.item.enchantments.length > 0) {
            this.item.enchantments.pop();
         }
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
   display: flex
   align-items: center
   margin-right: 5px
   width: 30%
   min-width: 60px

#enchantments 
   padding-right: 20px

.enchantment
   display: grid 
   grid-template-columns: 1fr 1fr
   margin-bottom: 10px
   > .label
      min-width: 50px
      max-width: 50px
   > input:first-of-type
      margin-right: 10px
   > div
      display: flex
   > div:last-of-type 
      margin-left: 10px

.level
   max-width: 50px

.attribute, .option 
   align-items: center
   display: flex

.attribute .label 
   min-width 100px

#options 
   display: grid 
   grid-template-columns: 1fr 1fr
   grid-gap: 10px
   margin-bottom: 10px

#general-options 
   display: grid
   grid-template-columns: repeat(2, 1fr)
   grid-gap: 10px
   > div
      margin-bottom: 5px
      > input, textarea
         width: 150px
         box-sizing: border-box

#attributes 
   display: grid
   grid-template-columns: repeat(2, 1fr)
   grid-gap: 10px

.attribute-input 
   width: 10%
   min-width: 50px

@media (max-width: 1100px)
   #options
      grid-template-columns: 1fr
      grid-template-rows: 1fr 1fr
</style>
