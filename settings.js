var editor = ace.edit("editor");
editor.setHighlightActiveLine(false);
editor.setShowPrintMargin(true);  // shows the right-side boundary of the editor
editor.setReadOnly(true);

var session = editor.getSession();
session.setMode("ace/mode/javascript");
session.setTabSize(5);  // ?
session.setUseSoftTabs(true); // ?
session.setUseWrapMode(true);
session.setValue('function foo(items) { \n  var x = "All this is syntax highlighted";\n  return x;\n}');

document.getElementById('editor').style.fontSize = '12px';

// check for errors, dont allow submission if there are linter errors