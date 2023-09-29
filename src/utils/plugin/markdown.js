// 引入markdown支持
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs 核心代码
import hljs from 'highlight.js/lib/core';
// 按需引入语言包
import json from 'highlight.js/lib/languages/json';
import java from 'highlight.js/lib/languages/java';
import shell from 'highlight.js/lib/languages/shell';
import javascript from 'highlight.js/lib/languages/javascript';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';

hljs.registerLanguage('json', json);
hljs.registerLanguage('java', java);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('javascript', javascript);

export function createVMdPreview(app) {
  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  });
  VMdPreview.use(createEmojiPlugin());
  VMdPreview.use(createLineNumbertPlugin());
  VMdPreview.use(createCopyCodePlugin());
  VMdPreview.use(createTipPlugin());
  app.use(VMdPreview);
}
