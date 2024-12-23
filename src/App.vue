<script setup>
import { LanguageIdEnum } from 'monaco-sql-languages'
import { ref} from 'vue';
import EditorComponents from './components/editorComponents.vue';
const currentLanguage = ref('clickHouseSql')
const otherSql = Object.values(LanguageIdEnum).map(i => {
  return {
    type: i,
    name: i == 'mysql' ? i.toLocaleUpperCase()  : i.replace(/sql/, '').toLocaleUpperCase()
  }
})
const languageList = [
  {
    name: 'CLICKHOUSE',
    type: 'clickHouseSql',
  },
  ...otherSql
]
const fieldNames = {value: 'type', label: 'name'}
const curEditType = ref('normal')
const  editTypes = [
  {
    label: '普通模式',
    value: 'normal'
  },
  {
    label: '对比模式',
    value: 'diff'
  }
]
</script>

<template>
  <div class="editor_tool_bar">
    <div class="tool_item">
      <span class = "item_label">sql-language</span>
      <a-select v-model="currentLanguage" :options="languageList" :field-names="fieldNames" size = "mini" :style="{width:'120px'}"
            placeholder="Please select ..." />
    </div>
    <div class="tool_item">
      <span class = "item_label">编辑器模式</span>
      <a-select v-model="curEditType" :options="editTypes" size = "mini" :style="{width:'120px'}"
            placeholder="Please select ..." />
    </div>
  </div>
  <EditorComponents :language = "currentLanguage" :editor-type="curEditType"</EditorComponents>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.editor_tool_bar {
  background:#eee;
  padding: 4px;
  color:#333;
  font-size: 12px;
  line-height: 24px;
}
.tool_item {
  display: inline-block;
}
.tool_item:not(:last-of-type) {
  margin-right: 4px;
}
.item_label {
  margin-right:4px;
}
</style>
