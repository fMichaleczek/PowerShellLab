define(() => {
    var parent = document.getElementById('uno-body');
    
    var newContent = document.createTextNode('PowerShell WASM Started:');
    parent.appendChild(newContent, parent.lastChild);
    
    var newTextarea = document.createElement('textarea');
    newTextarea.id="code" ;
    newTextarea.rows="5";
    newTextarea.cols="50";
    newTextarea.value = "$PSVersionTable";
    parent.appendChild(newTextarea, parent.lastChild);
    
    var newButton = document.createElement('button');
    newButton.id = "submitCode";
    newButton.type="button";
    newButton.textContent="Submit Code";
    parent.appendChild(newButton, parent.lastChild);
    
    var newTextarea2 = document.createElement('textarea');
    newTextarea2.id="output" ;
    newTextarea2.rows="20";
    newTextarea2.cols="50";
    parent.appendChild(newTextarea2, parent.lastChild);
    
    
    var newTextarea3 = document.createElement('textarea');
    newTextarea3.id="outputerror" ;
    newTextarea3.rows="10";
    newTextarea3.cols="50";
    parent.appendChild(newTextarea3, parent.lastChild);
    
    
    // document.body.innerHTML = "<div id='results' />";
});

const invokeCode = Module.mono_bind_static_method("[powershell-wasm] Microsoft.PowerShell.Wasm.Program:InvokeCode");
  
var Interop = {
    onClick: function () {
        var code = document.getElementById('code');
        invokeCode(code.value);
    },
};