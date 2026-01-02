var data = [10,20,30,40,50,60,70];
for (var i=0 ; i<data.length ; i++){
    console.log("Data :" + data[i])
}


data.map(function(value,index,array){
    console.log("Index is : " + index + " Value is : " + value + " ArrayIs : " + array);
})