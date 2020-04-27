define(() => {
    document.body.innerHTML = "<div style='width:80%;padding-left:10%;'>PowerShell WASM Started:<br><textarea id='code' rows='5' cols='50'></textarea><br><button id='submitCode' type='button'>Submit Code</button><br><textarea id='output' rows='20' cols='50'></textarea><br><textarea id='outputerror' rows='10' cols='50'></textarea></div>";
});

const invokeCode = Module.mono_bind_static_method("[powershell-wasm] Microsoft.PowerShell.Wasm.Program:InvokeCode");
  
var Interop = {
    onClick: function () {
        var code = document.getElementById('code');
        invokeCode(code.value);
    },
};