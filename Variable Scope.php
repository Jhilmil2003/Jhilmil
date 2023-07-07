<!-- Global & Local variable -->
<?php
function myTest1(){
    $y=5;
    echo"<p>Variable y inside function is:$y</p>";
}
myTest1();
echo "<p> Variable y outside function is:$y:</p>";
?>
<?php
$X=5;
$Y=10;
function test2(){
    $GLOBALS['Y'] =$GLOBALS['X'] + $GLOBALS['Y'];
}
test2();
echo $Y;
?>

