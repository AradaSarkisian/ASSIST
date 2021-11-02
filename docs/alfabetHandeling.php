<?php
$numbers = getC("plugin/number.source");
$s_alfabet = getC("plugin/s_alfabet.source");
$b_alfabet = getC("plugin/b_alfabet.source");
$arabic = getC("plugin/arabic.source");
$s_armenian = getC("plugin/s_armenian.source");
$b_armenian = getC("plugin/barmenian.source");
$others = getC("plugin/others.source");

//get Content function
function getC($Link) 
{
  $content = get_the_content($Link);
  return $content;
}

?>  
