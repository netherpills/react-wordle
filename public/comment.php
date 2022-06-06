<?php
mysql_connect("localhost","root","");
mysql_select_db("cmtdb");
error_reporting(E_ALL ^ E_NOTICE);
$notify = "";
$name=$_POST['name'];
$comment=$_POST['comment'];
$submit=$_POST['submit'];
if(isset($_POST['notify_box'])){ $notify = $_POST['notify_box']; }
$dbLink = mysql_connect("localhost", "root", "");
    mysql_query("SET character_set_client=utf8", $dbLink);
    mysql_query("SET character_set_connection=utf8", $dbLink);
 
if($submit)
{
    if($name&&$comment)
    {
        $insert=mysql_query("INSERT INTO comment (name,comment) VALUES ('$name','$comment') ");
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
 
$sql = "SELECT * FROM comment";
$getquery = mysql_query($sql);
?>
