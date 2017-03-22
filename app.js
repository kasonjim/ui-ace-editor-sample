angular.module('sampleApp', [
  'ui.ace'
])

.controller('sampleController', function($scope) {
  $scope.code;

  $scope.boop = function() {
    console.log("raw code", $scope.code);
    console.log("stringified", JSON.stringify($scope.code));
  };

  $scope.aceLoaded = function(_editor) {
    // Ace @ https://ace.c9.io/
    // Ace @ https://github.com/ajaxorg/ace
    // ui-ace @ https://www.npmjs.com/package/angular-ui-ace
    // CDN @ https://cdnjs.com/libraries/ace/

    // Editor font size
    document.getElementById('editor').style.fontSize='12px';

    // Options
    var _session = _editor.getSession();
    var _renderer = _editor.renderer;

    _editor.setHighlightActiveLine(true);
    _editor.setShowPrintMargin(true);
    _editor.setReadOnly(false);
    _session.setUseWrapMode(true);

    // Theme @ https://github.com/ajaxorg/ace/tree/master/lib/ace/theme
    _editor.setTheme("ace/theme/monokai");

    // Mode @ https://github.com/ajaxorg/ace/tree/master/lib/ace/mode
    _session.setMode("ace/mode/javascript");

    // Load the snippet's code
    _session.setValue('function foo(items) { \n  var x = "All this is syntax highlighted";\n  return x;\n}');
    $scope.code = _session.getValue();

    // Events
    _session.on("change", function(e) {
      $scope.code = _session.getValue();
    });
  };
});