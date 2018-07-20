var output = document.getElementById('output')

checkFizzBuzz = (num)=>{
  if ( num % 15 === 0 ) {
    output.innerHTML += ` <div class='fizzBuzz'> ${num} Fizz BUZZZzzzzZZZ!!!! </div> `
  } else if (num % 5 === 0){
    output.innerHTML += ` <div class='buzz'> ${num} Buzz </div> `
  } else if (num % 3 === 0){
    output.innerHTML += ` <div class='fizz'> ${num} Fizz </div> `
  } else {
    output.innerHTML += ` <div class='num'> ${num} </div> `
  }
}

run = function(){
  for (var i = 1; i <= 100; i++) {
    const ii = i
    setTimeout(()=>{
      checkFizzBuzz(ii)
    },1000*i)
  }
}
