//Used in case of MARS (Minimal accessable retrofit specification) keyboards
//special loading of csv files from other origins such as one-handed typing
var alt = 2223;
var mars = 171;
var ky = alt/mars;
var message = "1234567890qwertyuiopasdfghjlklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
function mars3(csv) {
    let marsCSV = csv.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? ky : -ky)));
    var regex = /[.,@\s]/g;
    marsCSV = marsCSV.replace(regex, '')+"pppeee";
    return marsCSV;
}
function mars2(csv, name) {
  let string2Hash = name+csv;//10962700,"theuns@sun.ac.za"
  //text2.substring(0,8) + text2.substring(10,13);
  let text222 = string2Hash.substring(0,8) + string2Hash.substring(9,12);
    let marsCSV = hash(text222, false, 0);
    return marsCSV;
}

