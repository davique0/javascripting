/*Create a file named function-arguments.js.  
   
  In that file, define a function named math that takes three arguments.  
  It's important for you to understand that arguments names are only used to  
  reference them.  
   
  Name each argument as you like.  
   
  Within the math function, return the value obtained from multiplying the  
  second and third arguments and adding that result to the first argument.  
   
  After that, inside the parentheses of console.log(), call the math()  
  function with the number 53 as first argument, the number 61 as second and  
  the number 67 as third argument.  */

  function math(num1, num2, num3) {
    return (num2*num3) + num1;
  }

  console.log(math(53, 61, 67));