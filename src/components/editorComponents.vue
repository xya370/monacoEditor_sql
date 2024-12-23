<script setup name="EditorComponent">
import './languageSetup'
import * as monaco from 'monaco-editor'
import { language } from 'monaco-editor/esm/vs/basic-languages/sql/sql'
import { setupLanguageFeatures } from '@/components/langs/setupLanguageFeatures'
import { ref, onMounted, watch } from 'vue'
import { format } from 'sql-formatter';
import {codeCompletions}  from '@/https/codeApi'
const props = defineProps({
  language: {
    type: String,
    default: 'clickHouseSql'
  },
  editorType: {
    type: String,
    default:' normal' // normal | diff
  }
})
const monacoEditorRef = ref(null)
const { keywords } = language
let monacoInstance = null
let editorOption = {
  theme: 'vs',
  automaticLayout: true,
  colorDecorators: true, // 颜色装饰器，
  minimap: {
    enabled: false
  },
  overviewRulerLanes: 0,
  hideCursorInOverviewRuler: true,
  acceptSuggestionOnCommitCharacter: true, // 接受关于提交字符的建议
  acceptSuggestionOnEnter: 'on', // 接受输入建议 "on" | "off" | "smart" 
  overviewRulerBorder: false,
  scrollbar: {
    vertical: 'hidden'
  },
  roundedSelection: true, // 右侧不显示编辑器预览框
  originalEditable: true, // 是否允许修改原始文本,
  contextmenu:true
}
const initEditor = () => {
  initAutoCompletion()
  if(props.editorType == 'diff') {
    initDiffEditor()
  }
  if(props.editorType == 'normal') {
    initNormalEditor()
  }
}
const initDiffEditor = () => {
  monacoInstance = monaco.editor.createDiffEditor(monacoEditorRef.value, {
    ...editorOption,
    language: props.language
  })
  monacoInstance.setModel({
    original: monaco.editor.createModel(null, props.language),
    modified: monaco.editor.createModel(null, props.language),
  })
  monacoInstance.onDidChangeModel (() => {
    console.log(arguments)
  })
}
const initNormalEditor = () => {
  monacoInstance = monaco.editor.create(monacoEditorRef.value, {
    ...editorOption,
    language: props.language
  })
  monacoInstance.addAction({
    id: 'sql-format',
    label: '格式化',
    contextMenuOrder:1,
    contextMenuGroupId: 'customCommand',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF], 
    run() {
      let oldValue = monacoInstance.getValue()
      let newValue = format(oldValue)
      monacoInstance.executeEdits("", [
        { range: new monaco.Range(1, 1, monacoInstance.getModel()?.getLineCount() + 1, 1), text: newValue },
      ]);
    },
  })
  monacoInstance.onDidChangeModelContent(() => {
    let value = monacoInstance.getValue()
    if(!value.trim()) {
      clearMistake()
    }
    // 获取编辑器模型和光标位置
    const model = monacoInstance.getModel();
    const position = monacoInstance.getPosition();

    // 获取当前行的内容
    const currentLineContent = model.getLineContent(position.lineNumber).trim();

    // 判断是否为注释
    const isComment = currentLineContent.startsWith('--') || currentLineContent.startsWith('//') || currentLineContent.startsWith('#') || currentLineContent.startsWith('/*');

    if (isComment) {
      console.log('Detected comment:', currentLineContent);
      testCodeFn(currentLineContent)
      // 在这里执行你的自定义逻辑
    }
  })
}
const initAutoCompletion = () => {
  if (!monaco.languages.registerCompletionItemProvider['inSql']) {
    monaco.languages.registerCompletionItemProvider['inSql'] = true
    setupLanguageFeatures(props.language, {
      completionItems: {
        enable: true,
        triggerCharacters: ['.', ' ', ...keywords],
        completionService: (model, position) => {
          // 获取当前行的内容
          
          const currentLineContent = model.getLineContent(position.lineNumber).trim();
          return new Promise(async (resolve, reject) => {
            let suggestions = keywords.map((key) => ({
              label: key,
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: key
            }))
            // const codePreivew = await testCodeFn(currentLineContent)
            // if(codePreivew?.content) {
            //   suggestions = [
            //     {
            //       label:'select code',
            //       insertText: codePreivew.content,
            //       kind: monaco.languages.CompletionItemKind.Keyword,
            //       range:new monaco.Range(position.lineNumber, currentLineContent.length, position.lineNumber, codePreivew.content.length)
            //     },
            //     // ...suggestions
            //   ]
            // }
            resolve(suggestions)
            // console.log(codePreivew)
            // resolve(suggestions)
          })
        }
      }
    })
  }
}

const changeLang = (langId) => {
  const model  =monacoInstance.getModel();
  if(props.editorType == 'normal') {
    if(model&& model.getLanguageId() !== langId ) {
      monaco.editor.setModelLanguage(model, langId);
      setTimeout(() => {
        console.log(
          'language changed, current is: ',
          monacoInstance?.getModel()?.getLanguageId()
        );
      }, 200);
    }
  }
  else {
    const {original, modified} = model;
    monaco.editor.setModelLanguage(original, langId);
    monaco.editor.setModelLanguage(modified, langId);
    setTimeout(() => {
        console.log(
          'diff-editor language changed, current is: ',
          monacoInstance?.getModel()?.original.getLanguageId()
        );
      }, 200);
  }

}

// const markMistake = (range, type, message) => {
//   const { startLineNumber, endLineNumber, startColumn, endColumn } = range
//   monaco.editor.setModelMarkers(monacoInstance.getModel(), 'eslint', [
//     {
//       startLineNumber,
//       endLineNumber,
//       startColumn,
//       endColumn,
//       severity: monaco.MarkerSeverity[type], // type可以是Error,Warning,Info
//       message
//     }
//   ])
// }

const clearMistake = () => {
  monaco.editor.setModelMarkers(monacoInstance.getModel(), 'eslint', [])
}

const testCodeFn = async (content) => {
  if(!content) return;
 const result = await codeCompletions({
    extra: {
      target: {
        language:'sql',
        code_prefix: content,
        code_suffix: ''
      }
    }
  })
  const {choices } =result;
  return choices[0].message
}

watch(() => props.language, (val) => {
  changeLang(val)
})
watch(() => props.editorType, () => {
  monacoInstance && monacoInstance.dispose()
  initEditor()
})
onMounted(() => {
  initEditor()
  testCodeFn()
})
</script>

<template>
  <div class="editor_component" ref="monacoEditorRef"></div>
</template>

<style scoped>
.editor_component {
  width: 100%;
  height: calc(100% - 24px);
}
</style>
