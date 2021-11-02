/*
*
* © Arada Sarkisian
* under MIT license
* ASSIST web application
*
*/

//the code for generating file

function downloadNow(un, pw, con)
{
  if(un != "" && un != null && pw != "" && pw != null && con == true){
    let x1=new instalX(),
        key1=new generator(un, "un", con),
        key2=new generator(pw, "ss", con),
        x2=new ender1X(new Date()),
        x3=x1+key1+key2+x2;
    
  }else{
    do500err(con);
  }
}

//helper functions
function do500err(entered){
  if(entered == false){
    document.open();
    document.write("error 500");
    document.close();
  }else{}
} 

function generator(nameX1, doX1, conditionX1)
{
 if(conditionX1 == true)
 {
   if(nameX1 != null && nameX1 != "" && doX1 != null && doX1 != "")
   {
     if(doX1 == "un")
     {
       const ungenenter = new generateUN(nameX1);
       return ungenenter;
     }else if(doX1 == "ss")
     {
       const pwgenenter = new generatePW(nameX1);
       return pwgenenter;
     }else{
       do500err(false);
     }
   }else
   {
     do500err(false);
   }
 }else
 {
   do500err(false);
 }
}
  
function generateUN(enterX2)
{
  
}

function generatePW(enterX3)
{
  
}
