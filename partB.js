// Solution - 3

const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  };
  
  // a) 
//   const total = Object.values(orderData).reduce((prev, next) => prev + next);  // Calculating the total of all key values 
 
var out = 0;
for(key in orderData){
    out +=Number(orderData[key])
}

  // b) 
//   const headers = Object.keys(orderData);  // Computing all keys of the Object
  
function getpercent(orderData){
    var total = 0;
    for (key in orderData){
        total += Number(orderData [key]);
    }


  //c) 
  var output = [];
var count = 0;
for (key in orderData){
    var perCentValue = (orderData [key]/total)*100;
    count = count+1;
    let myObj = {}
    myObj.id = count;
    myObj.order=key;
    myObj.order_percentage = '${perCentValue} %'
    myObj.restaurant='punjabi Tadka'
    output.push(myObj)
}
return output
}
