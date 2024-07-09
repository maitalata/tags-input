<template>
    <!-- <div>{{ tags }}</div>
    <div>{{ tags.length }}</div>
    <div v-text="tags.length" ></div>
    <div v-if="!tags.length" >No Tags Elements To Show</div>
    <div v-else>Tags Elements To Show</div>
    <div v-show="tags.length" >Tags Elements To Show</div>
    <div v-show="!tags.length" >No Tags Elements To Show</div> -->
    <!-- <div>
        <h3>Selected Tags: {{ selectedTags }}</h3>
    </div> -->
    <div class="tags-input-wrapper" >
        <span class="tag-item" v-for="(tag, index) in tags" :key="index" >
            {{ index + " : " + tag }}
            <a class="remove-tag" @click.prevent="removeTag(index)" href="#">&times;</a>
        </span>
        
        <!-- <input type="text" v-bind:value="newTag"  v-on:keydown.enter="addNewTag"
        v-on:keydown.tab.prevent="addNewTag"
        /> -->
        
        <input 
        class="tag-input"
        type="text" 
        v-model.trim="newTag"  
        v-on:keydown.enter="addNewTag"
        @keydown.delete="removeLastTag"
        v-on:keydown.tab.prevent="addNewTag"
        :class="{ 'tag-exists': isTagExists }"
        />
    </div>
    
    <!-- <br>
    <br>
    <input type="text" v-model="newTag2" @keydown.enter="showAlert" />
    <br>
    {{ newTag2 }}
    <br>
    <br>     -->
    <!-- <button v-on:click="tags.push(newTag)" >OK</button> -->
</template>

<script>
export default {
   data () {
         return {
              tags: [...this.selectedTags],
              newTag: "",
              newTag2: ""
         }
    },
    emits: ['change'],
    props: {
        selectedTags: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        newTag(newVal) {
            // console.log(newVal, oldVal);
            if (newVal.indexOf(",") > -1) {
                this.newTag = this.newTag.slice(0, -1);
                this.addNewTag();
            }
        }
    },
    computed: {
        isTagExists() {
            return this.tags.includes(this.newTag);
        }
    },
    methods: {
        showAlert() {
            alert('Enter Pressed')
        },
        addNewTag() {
            if (this.newTag && !this.isTagExists) {
                this.tags.push(this.newTag);
                this.newTag = "";
                this.$emit("change", this.tags);
            }
        },
        removeTag(index) {
            this.tags.splice(index, 1);
            this.$emit("change", this.tags);
        },
        removeLastTag() {
            // this.tags.pop();
            if (this.newTag.length === 0) {
                this.removeTag(this.tags.length - 1);
            }
            
        }
    }
}

</script>

<style scoped>
    .tag-input.tag-exists {
      color: red;
      text-decoration: line-through;
    }
    .tags-input-wrapper {
      background: #fff;
      padding: 0.5em;
      border: 1px solid #dbdbdb;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      min-height: 36px;
      box-sizing: border-box;
    }
    .tag-item {
      color: #212529;
      background-color: #eee;
      margin-right: 0.3em;
      padding: 0.25em 0.4em;
      font-size: 75%;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 1.25em;
      padding-left: 0.6em;
    }
    .tag-input {
      color: #495057;
      flex: 1;
      background: transparent;
      border: none;
    }
    .tag-input:focus {
      outline: none;
    }
    a.remove-tag {
      text-decoration: none;
    }
</style>