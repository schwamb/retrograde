var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var result

var array = ['4/21/23',
'4/22/23',
'4/23/23',
'4/24/23',
'4/25/23',
'4/26/23',
'4/27/23',
'4/28/23',
'4/29/23',
'4/30/23',
'5/1/23',
'5/2/23',
'5/3/23',
'5/4/23',
'5/5/23',
'5/6/23',
'5/7/23',
'5/8/23',
'5/9/23',
'5/10/23',
'5/11/23',
'5/12/23',
'5/13/23',
'5/14/23'];

// var testDate = '1/6/2023'


function isInArray(array, value) {
    today = mm + '/' + dd + '/' + yyyy;
    // console.log(testDate);
  return (array.find(item => {return item == value}) || []).length > 0;
}

result = isInArray(array, today);

if (result === true){
    result = "Yes."
}
else{
    result = "No."
}

// if (testDate === array[1]){
//     document.write("true") 
// }
// else{
//     document.write("false")
// }
document.getElementById('log').innerHTML += result;
