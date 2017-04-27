<?php

$user=json_decode(file_get_contents("php://input"));

if ($user->mail == 'tayo@me.com' && $user->pass == 'password' )
print 'success'; 
else print 'error';


?>