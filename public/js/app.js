function pythag() {
    var s1 = parseFloat($('#side1').val());
    var s2 = parseFloat($('#side2').val());
    $('#output').html("Hypotenuse: ".concat(String(Math.sqrt(s1 * s1 + s2 * s2))));
}

function factorial() {
    var num = parseFloat($('#num').val());
    var val = 1;
    for (var i = 2; i <= num; i++)
        val = val * i;
    $('#output').html(String(num).concat("! = ").concat(String(val)));
}

function quadcalc() {
    var a = parseFloat($('#a').val());
    var b = parseFloat($('#b').val());
    var c = parseFloat($('#c').val());
    var d = Math.pow(b, 2)-(4*a*c);
    var x1 = (-b + Math.sqrt(d))/(2*a);
    var x2 = (-b - Math.sqrt(d))/(2*a);
    $('#output').html("Zeros: ".concat(String(x1)).concat(", ").concat(String(x2)));

}

$('#zeros').click(quadcalc);
$('#fact').click(factorial);
$('#pythag').click(pythag);