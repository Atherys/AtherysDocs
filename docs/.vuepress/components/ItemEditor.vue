<template>
   <div id="item-editor">
   ID
   <input v-model="id">
   Name
   <input v-model="name">
   Durability
   <input v-model="durability">
   Quantity
   <input v-model="quantity">
   <div class="output-window">
      <pre class="output">
{
   id=<span class="value">{{ id }}</span>
   name=<span class="value">"{{ name }}"</span>
   durability=<span class="value">{{ durability }}</span>
   quantity=<span class="value">{{ quantity }}</span>
}</pre>
   </div>
   </div>
</template>

<script>
module.exports = {
   data: () => {
      return {
         id: "",
         name: "",
         durability: "",
         quantity: 1
      }
   }
}
</script>

<style>
.output {
   color: wheat;
}

.value {
   color: cornflowerblue;
}
</style>



