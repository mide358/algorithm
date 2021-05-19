//Task 1 Algorithm

function convertFahrToCelsius(fahr){
  //converting fahr to celcius
   let celsius = Number(((fahr - 32) * 5/9).toFixed(4));

  //Determine input data types
   checkIt=(value)=>{
     let checkType = Object.prototype.toString.call(value).slice(8, -1)

      return paramResult = checkType.toLowerCase()
   }

  //Checking input data types and returning values
  if(isNaN(fahr) ||  checkIt(fahr) === 'boolean' || checkIt(fahr) === 'null' || fahr === ""){
      return `${JSON.stringify(fahr)} is not a valid number but a/an ${checkIt(fahr)}.`
    } else {
      return celsius
    }

 }
 //Testing function with different use cases
 console.log(convertFahrToCelsius(true));
 console.log(convertFahrToCelsius( "-7"));
 console.log(convertFahrToCelsius( 7));
 console.log(convertFahrToCelsius( {}));
 console.log(convertFahrToCelsius( []));
 console.log(convertFahrToCelsius("32"))
 console.log(convertFahrToCelsius([1,2,3]));
 console.log(convertFahrToCelsius({temp: 0}));
 console.log(convertFahrToCelsius(null));
 console.log(convertFahrToCelsius( ""));
 console.log(convertFahrToCelsius("9"))
 console.log(convertFahrToCelsius())





//Task 2 Algorithm

    function checkYuGiOh(n){

    //function to check for type of parameter passed
      function checkIt(value){
        let checkType = Object.prototype.toString.call(value).slice(8, -1)

          return paramResult = checkType.toLowerCase()
      };

    //1. check if a string that can't be converted to a number or another data type - is passed and return `invalid parameter: ${parameter}`
      if(isNaN(n)=== true || checkIt(n) === 'nan' ||checkIt(n) === 'array' || n < 1){
        return `invalid parameter: "${n}"`
        } else {
    //2. create an array of number from 1- n while checking if its a valid number
        let firstArray = [];
          for(let i =1; i <= n; i++){
          firstArray.push(i)
         }
    //3. Loop through the array with map method and replace with multiples of 2, 3, 5 with "yu", "gi" and "oh"

        let transformedArray = firstArray.map(function(item) {

        if(item % 2=== 0 && item % 3 !==0 && item % 5 !== 0){
            item = 'yu';
          } else if(item % 3 === 0 && item % 2 !==0 && item % 5 !== 0 ){
            item = "gi"
          }else if(item % 5 === 0 && item % 2 !==0 && item % 3 !== 0){
            item = "oh"
          }else if(item % 2=== 0 && item % 3 === 0 && item % 5 === 0){
            item= 'yu-gi-oh'
          }else if(item % 2 === 0 && item % 3 === 0){
            item = 'yu-gi'
          }else if(item % 3 === 0 && item % 5 === 0){
            item = 'gi-oh'
          }else if(item % 2 === 0 && item % 5 === 0){
            item = 'yu-oh'
          } else {
            item
          }
            return item;

        })
        return transformedArray
    }

    }
  //Testing use cases
    console.log(checkYuGiOh(-5))
    console.log(checkYuGiOh("10"))
    console.log(checkYuGiOh("30"))
    console.log(checkYuGiOh())
    console.log(checkYuGiOh("fizzbuzz is meh"))
    console.log(checkYuGiOh(6))
    console.log(checkYuGiOh(0))
    console.log(checkYuGiOh(null))
    console.log(checkYuGiOh('10px'))
