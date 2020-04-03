function karatSuba(x, y) {
    // Check value number
    if ((x < 10) || (y < 10)) {
        return x * y;
    }
    
    // Convert number to string
    var str_x = x.toString();
    var str_y = y.toString();
    
    // Find max length of sting
    var maxLength = (str_x.length > str_y.length) ? str_y.length : str_x.length;
    var m = Math.round(maxLength / 2);

    // Seperate string x
    var x_left = parseInt(str_x.substring(0, str_x.length - m));
    var x_right = parseInt(str_x.substring(str_x.length - m, str_x.length));
    // Seperate string y
    var y_left = parseInt(str_y.substring(0, str_y.length - m));
    var y_right = parseInt(str_y.substring(str_y.length - m, str_y.length));


    var z0 = karatSuba(x_right, y_right);
    var z1 = karatSuba(x_right + x_left, y_right + y_left);
    var z2 = karatSuba(x_left, y_left);
    // Formula of karatsuba
    var res = (z2 * Math.pow(10, 2 * m)) + ((z1 - z2 - z0) * Math.pow(10, m)) + z0;

    return res;

}

var a = 51235435653334543543457;
var b = 426525435435435345353;
console.log(karatSuba(a, b));


