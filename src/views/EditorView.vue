<script setup name = 'EditorViews'>
import { ref} from 'vue';
import EditorComponents from '@/components/editorComponents.vue';
const currentLanguage = ref('clickhouse')
const languageList = [
  {
    name: 'clickhouse',
    type: 'clickhouse',
  },
  {
    name: 'trinosql',
    type: 'trinosql'
  }
]
const fieldNames = {value: 'type', label: 'name'}
</script>
<template>
  <div class="editorView">
    <div class="editor_tool_bar">
    <div class="tool_item">
      <span class = "item_label">sql-language</span>
      <a-select v-model="currentLanguage" :options="languageList" :field-names="fieldNames" size = "mini" :style="{width:'120px'}"
            placeholder="Please select ..." />
    </div>
  </div>
  <EditorComponents :language = "currentLanguage"></EditorComponents>
  </div>
</template>

<style scoped>
.editor_tool_bar {
  background:#eee;
  padding: 4px;
  color:#333;
  font-size: 12px;
  line-height: 24px;
}
.item_label {
  margin-right:4px;
}
</style>
