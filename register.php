<?php
$username=$_POST["username"];
$email=$_POST["email"];
if (!empty($_POST["button"]) && !empty($username) && !empty($email)) {
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "myDB";
    $condition1=false;
    $TextX1="Registeration failed";
    $ColorX1="red";
    $ScriptX1="";
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $random_key=new generateRandomString();
    $sql = "INSERT INTO WebsiteMembers (email, username, password)
    VALUES ('".$email."', '".$username."', '".$random_key."')";

    if ($conn->query($sql) === TRUE) {
        $condition1=true;
    callIfAllIsOK();
} else {
  
}

$conn->close();
} else {  
    
}
function generateRandomString($length = 15) {
    include("alfabetHandeling.php");
    $characters = $numbers.$salfabet.$balfabet.$arabic.$sarmenian.$barmenian.$others;
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
function callIfAllIsOK() {
    $TextX1="You was registered now";
    $ColorX1="green";
    $ScriptX1="scipts/1.js";
    $CallX1="downloadNow(".$random_key.",".$condition1.")";
}
?>
<!DOCTYPE html>
<html>
    <title>Server</title>
    <link href="style/1.css" type="text/stylesheet"/>
    <script src="<?php echo $ScriptX1; ?>"></script>
    <script src="script/2.js"></script>
</html>
<body>
    <!--Install source here-->
    <?php 
    include("docs/s1body.php");
    if($condition1==true){echo "<script>".$CallX1."</script>";}else{}
    ?>
</body>
</html>
