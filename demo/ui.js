require('../src/styles/base.css')

const { EditorPackage, render } = require('../src')

render(EditorPackage, {
  descriptor: {
    profile: 'tabular-data-package',
    resources: [
      {}
    ],
  },
}, document.getElementById('editor-package'))
