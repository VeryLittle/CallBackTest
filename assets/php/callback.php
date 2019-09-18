<?php

require_once 'vendor/autoload.php';

$creator = new \CallBack\MySQL_Creator();

echo $creator->Write(new \CallBack\CallBackModel($_POST['name'],$_POST['phone'],$_POST['message']));
