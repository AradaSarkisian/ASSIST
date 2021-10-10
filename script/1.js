function downloadNow(un, pw, con){
  if(con==true){
    let x1=new instalX(),
        key1=new generator(un, "un"),
        key2=new generator(pw, "ss"),
        x2=new ender1X(new Date()),
        x3=x1+key1+key2+x2;
    
  }else{
    do500err(con);
  }
}

function do500err(entered){
  if(entered==false){
    document.open();
    document.write("error 500");
    document.close();
  }else{}
}
