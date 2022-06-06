<?php
mysql_connect("localhost","root","");
mysql_select_db("cmtdb");
error_reporting(E_ALL ^ E_NOTICE);
$notify = "";
$comment=$_POST['sugerir'];
$submit=$_POST['enviar'];
if(isset($_POST['notify_box'])){ $notify = $_POST['notify_box']; }
$dbLink = mysql_connect("localhost", "root", "");
    mysql_query("SET character_set_client=utf8", $dbLink);
    mysql_query("SET character_set_connection=utf8", $dbLink);
 
if($enviar)
{
    if($sugerir)
    {
        $insert=mysql_query("INSERT INTO sugerir (sugerir) VALUES ('$sugerir') ");
    }
    else
    {
        echo "please fill out all fields";
    }
}

$dbLink = mysql_connect("localhost", "root", "");
mysql_query("SET character_set_results=utf8", $dbLink);
mb_language('uni');
mb_internal_encoding('UTF-8');
 
$sql = "SELECT * FROM sugerir";
$getquery = mysql_query($sql);
?>
