function fizzbuzz(f, b){
  
  for (let i = 1; i <100; i++){
    if (i % b === 0 && i % f ===0){
      console.log("Fizzbuzz");
    }
    else if (i % b === 0){
      console.log("Buzz");
    }
    else if (i % f === 0){
      console.log("Fizz")
    }
    else{
      console.log(i)
    }
  }
}


fizzbuzz(5, 3);

