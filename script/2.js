/*
*
* © Arada Sarkisian
* under MIT license
* ASSIST web application
*
*/

//the code for generating file
var FileText = "",
    installLink = "installer_handeler.txt",
    UN_1Link = "un1_handeler.txt",
    UN_2Link = "un2_handeler.txt",
    PW_1Link = "pw1_handeler.txt",
    PW_2Link = "pw2_handeler.txt",
    DateLink = "date_handeler.txt",
    EnderLink = "end_handeler.txt";

function downloadNow(un, pw, con)
{
  if(un != "" && un != null && pw != "" && pw != null && con == true){
    let x1=new installX(),
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

function installX(Link)
{
  const result = ""
 if(Link == null)
 {
   result = new getContent("GET", installLink, false);
 }else
 {
   result = new getContent("GET", Link, false);
 }
   FileText += "InsallX1 installed";
   FileText += "Runer calling F(x) installed";
   FileText += "End of InstallX()";
   FileText += result;
}

function generateUN(enterX2)
{
  
}

function generatePW(enterX3)
{
  
}

function getContent(method, Link, ToF, sendTextInner)
{
 const XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
       const result = XHR.responseText;
       return result;
    }
};
  XHR.open(method, Link, ToF);
  XHR.send(sendTextInner);
}
