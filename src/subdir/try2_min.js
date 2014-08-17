/**
 * Created by guri on 8/17/14.
 */

// just a mock js file to check the uglify grunt service.
function horse() {
    var abcdefg = 5; // var should be shortened.
    // comment should be gone

    var xyz = abcdefg;
    alert(xyz);

}

horse();