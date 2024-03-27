// Initialize ACE editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt"); // Set the editor theme
editor.getSession().setMode("ace/mode/javascript"); // Set JavaScript mode

document.getElementById('runBtn').addEventListener('click', runCode);

function runCode() {
    var code = editor.getValue();
      var output = '';
  
      // Override console.log to capture its output
      var originalConsoleLog = console.log;
      console.log = function() {
          output += Array.from(arguments).join(' ') + '\n';
      };
  
      try {
          // Evaluate the code using eval()
          eval(code);
  
          // Display the captured output in the result div
          document.getElementById('result').innerText = "\n" + output;
      } catch (error) {
          // Handle errors
          console.error(error);
          document.getElementById('result').innerText = "Error occurred: " + error.message;
      } finally {
          // Restore console.log to its original function
          console.log = originalConsoleLog;
      }
  }

// Function to run the JavaScript code
// function runCode() {
//     var code = editor.getValue();
//     try {
//         // Clear previous output
//         document.getElementById('result').innerText = '';

//         // Capture console.log output
//         var log = console.log;
//         console.log = function(output) {
//             document.getElementById('result').innerText += output +"\n";
//         };

//         // Execute the JavaScript code
//         eval(code);

//         // Restore console.log function
//         console.log = log;
//     } catch (error) {
//         document.getElementById('result').innerText = 'Error: ' + error.message;
//     }
// }




// // Function to copy the code from the editor
// function copyCode() {
//     var code = editor.getValue();
//     if(code != "") {
//         alert('Code copied to clipboard.')
//         navigator.clipboard.writeText(code)
//     } else {
//         alert('Editor is empty, Please enter the Code first !')
//     }
// }

// // Run button click event listener
// document.getElementById('runBtn').addEventListener('click', runCode);

// // Copy button click event listener
// document.getElementById('copyButton').addEventListener('click', copyCode);