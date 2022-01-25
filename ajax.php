<?php
$arr_file_types = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'];
$json = json_decode(file_get_contents("php://input"));

$encoded = $json->image;

define('UPLOAD_DIR', 'uploads/');
    $image_parts = explode(";base64,", $encoded);
  	$image_type_aux = explode("image/", $image_parts[0]);
  	$image_type = $image_type_aux[1];
  	$image_base64 = base64_decode($image_parts[1]);
  	$file = UPLOAD_DIR . uniqid() . '.png';
	file_put_contents($file, $image_base64);

  echo $file;
die;
