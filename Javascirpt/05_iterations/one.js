//for loops

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element+1 == 5){
        // console.log('5 is best number')
    }
    // console.log(element + 1);
}

for(let i=1;i<=10;i++){
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j<=10; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);
        // console.log(i+"*"+j+"="+i*j);
        
    }
}


let myArray = ["Flash","batman","superman"]
for(let index =0 ;index<myArray.length;index++){
    const element = myArray[index];
    // console.log(element)
}

// break and continue 

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`Deteched 5`);
        break
    }
    // console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`Deteched 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}