/**
 * Created by jiwei on 25/05/2018.
 */
var $par = $('#parent');
var $parentDiv  = $('#parent div');
var $noneClone = $('#test');
var $firstClone =  $parentDiv.eq(0).clone(true);
var $secondClone = $parentDiv.eq(1).clone(true);

/**
 * click to test / if you click "click to test",it will display only two colors instead of four;
 * because the method 'append' in jquery pass objects (they are '$firstClone' and '$secondClone' here)
 * which they are the same as every two.The key is to point to the same memory address,
 * after the first reference is removed from the memory address and point to other places
 */
$noneClone.click(function(){
    $parentDiv.remove();
    $par.append($firstClone);
    $par.append($firstClone);
    $par.append($secondClone);
    $par.append($secondClone);
});