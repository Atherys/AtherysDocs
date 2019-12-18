<template>
   <div id="quest-editor">
      <fieldset id="options">
         <legend> Quest Options </legend>
         <BasicOption id="ID" v-model="quest.id"/>
         <BasicOption id="Name" v-model="quest.name"/>
         <BasicOption id="Description" v-model="quest.description"/>
         <BasicOption id="Version" v-model="quest.version" type="number"/>
         <BasicOption id="Time" v-model="quest.time" type="number"/>
         Quest Type
         <form>
            <input type="radio" name="type" value="Simple" v-model="quest.type" checked> Simple<br>
            <input type="radio" name="type" value="Staged" v-model="quest.type"> Staged<br>
         </form>
      </fieldset>
      <button @click="generateQuest">Generate Quest</button>
      <button @click="downloadQuest">Download Quest</button>
      <button @click="clearAll">Clear All</button>
      <div class="output-window">
         <pre class="language-js"><code class="language-js">{{ generated }}</code></pre>
      </div>
      <a id="download"></a>
   </div>
</template>

<script>
import { templater, downloadFile } from '../util/util';
const ID_TEMPLATE = templater`\tdef QUEST_ID = "${'id'}";`;
const NAME_TEMPLATE = templater`\tdef QUEST_NAME= textOf("${'name'}");`;
const DESC_TEMPLATE = templater`\tdef QUEST_DESCRIPTION = textOf("${'description'})";`;
const VERSION_TEMPLATE = templater`\tdef QUEST_VERSION = ${'version'};`;
const CREATE_TEMPLATE = templater`\tcreate${'type'}Quest(QUEST ID, QUEST_NAME, QUEST_DESCRIPTION, QUEST_VERSION);`;
const TIME_TEMPLATE = templater`\tmakeQuestTimed(quest, ${`time`});`;

const templates = [
   {template : ID_TEMPLATE},
   {template : NAME_TEMPLATE},
   {template : DESC_TEMPLATE}, 
   {template : VERSION_TEMPLATE, lineAfter: true},
   {template : CREATE_TEMPLATE, lineAfter: true}
];

const optionalTemplates = [
   {template: TIME_TEMPLATE, field: 'time', lineAfter: true}
];
export default {
   data() {
      return {
         quest: {
            id: "",
            name: "",
            description: "",
            version: 1,
            type: "Simple",
            time: null
         },
         generated: ""
      }
   },
   methods: {
      generateQuest() {
         this.generated = "onQuestRegistration({ event ->\n";
         templates.forEach(template => {
            this.writeLine(template.template(this.quest));
            if (template.lineAfter) this.writeLine("");
         });

         optionalTemplates.forEach(template => {
            if (this.quest[template.field]) {
               this.writeLine(template.template(this.quest));
               if (template.lineAfter) this.writeLine("");
            }

         });
         this.generated += "\tevent.getManager().registerQuest(quest);\n"
         this.generated += "});";
      },
      writeLine(line) {
         this.generated += line + "\n";
      },
      clearAll () {
         Object.assign(this.$data, this.$options.data.call(this));
      },
      downloadQuest() {
         downloadFile(this.generated, this.quest.id + ".groovy", "download");
      }
   }
}
</script>

