var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var result

var array = ['10/30/2022',
'10/31/2022',
'11/1/2022',
'11/2/2022',
'11/3/2022',
'11/4/2022',
'11/5/2022',
'11/6/2022',
'11/7/2022',
'11/8/2022',
'11/9/2022',
'11/10/2022',
'11/11/2022',
'11/12/2022',
'11/13/2022',
'11/14/2022',
'11/15/2022',
'11/16/2022',
'11/17/2022',
'11/18/2022',
'11/19/2022',
'11/20/2022',
'11/21/2022',
'11/22/2022',
'11/23/2022',
'11/24/2022',
'11/25/2022',
'11/26/2022',
'11/27/2022',
'11/28/2022',
'11/29/2022',
'11/30/2022',
'12/1/2022',
'12/2/2022',
'12/3/2022',
'12/4/2022',
'12/5/2022',
'12/6/2022',
'12/7/2022',
'12/8/2022',
'12/9/2022',
'12/10/2022',
'12/11/2022',
'12/12/2022',
'12/13/2022',
'12/14/2022',
'12/15/2022',
'12/16/2022',
'12/17/2022',
'12/18/2022',
'12/19/2022',
'12/20/2022',
'12/21/2022',
'12/22/2022',
'12/23/2022',
'12/24/2022',
'12/25/2022',
'12/26/2022',
'12/27/2022',
'12/28/2022',
'12/29/2022',
'12/30/2022',
'12/31/2022',
'1/1/2023',
'1/2/2023',
'1/3/2023',
'1/4/2023',
'1/5/2023',
'1/6/2023',
'1/7/2023',
'1/8/2023',
'1/9/2023',
'1/10/2023',
'1/11/2023',
'1/12/2023'];

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
