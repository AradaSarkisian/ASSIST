<?php
$what_to_do = $_POST["WTD"];
$Date_for_start = $_REQUEST["ds"];
$text = $_POST["text"];

if($Date_for_start == "now")
{
  includeseter($what_to_do);
  $content = new generator();
  echo '{"name":"'.$what_to_do.'generator", "result":"'.$content.'"}';
}else
{
  header("Error 500", true, 500);
}

?>
