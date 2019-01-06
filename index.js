// Code your solutions in this file
function printBadges(employees){
  for (let counter = 0; counter < employees.length; counter++){
    console.log(`Welcome ${employees[counter]}! You are employee #${counter + 1}.`)
  }
  return employees
}

function tailsNeverFails(){
  let coin_count = 0;
  while (Math.random() >= 0.5){
    coin_count++
  }
  return `You got ${coin_count} tails in a row!`
}
