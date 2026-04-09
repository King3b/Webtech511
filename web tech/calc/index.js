 const Display = document.getElementById("Display")

 function AppendToDisplay(input){
    Display.value += input;
 }
 function ClearDisplay(){
    Display.value = "";
 }
 function Calculate(){
    try{
        Display.value = eval(Display.value);
   }
   catch(e){
      Display.value = "Error";
    }
 }