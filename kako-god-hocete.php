<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="img/icons/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" href="img/icons/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="57x57" href="img/icons/apple-touch-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="img/icons/apple-touch-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="img/icons/apple-touch-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="img/icons/apple-touch-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="img/icons/apple-touch-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="img/icons/apple-touch-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="img/icons/apple-touch-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="img/icons/apple-touch-icon-180x180.png"/>

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/lightbox.min.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Ubuntu:300,400,500,700&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" href="css/main.min.css">

    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

</head>
<body>
<?php
$prvaPromenljiva = 'Branko';
$drugaPromenljiva = 'Stevanovic';
$prviNiz = array(1,2,3);
?>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Naslov stranice</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur commodi consectetur odit quibusdam quidem quis repellendus tempora veritatis voluptatum!</p>
            <?php

            echo '<strong>Hello World!</strong> <br>';
            echo 'ene nema tacke i zareza <br>';
            echo $prvaPromenljiva.' '.$drugaPromenljiva;
            echo '<br>';
            echo "$drugaPromenljiva < $prvaPromenlovdva";

            echo '<br>';
            echo 3+2; //5
            echo '<br>';
            echo 3-2; //1
            echo '<br>';
            echo 3*2; //6
            echo '<br>';
            echo 3/2; //1.5
            echo '<br>';
            echo 3%2; //1

            echo $prviNiz[0];


            ?>
            <h3>Primer niza</h3>
            <?php
                $tag = '<div class="image-block"><div class="image-wrapper"><div class="image-content"><a href="javascript:void(0)"><img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Zorana_Mihajlovi%C4%87_Crop.JPG" alt=""></a></div></div><h2>moja slika</h2></div>';

                for($i = 0; $i<200; $i++){
                    echo $tag;
                }
            ?>


        </div>
    </div>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.4.min.js"><\/script>')</script>

<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/vendor/jquery.ba-throttle-debounce.min.js"></script>
<script src="js/vendor/lightbox.min.js"></script>
<script src="js/vendor/owl.carousel.min.js"></script>
<script type="text/javascript" src="js/common/utilities.min.js"></script>
<script src="js/main.min.js"></script>
</body>
</html>