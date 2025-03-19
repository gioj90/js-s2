// •	შემოვაყვანინოთ რიცხვი,შემდეგ არითმეტიკული ოპერატორი,შემდეგ 
// ისევ რიცხვი და დავბეჭდოთ მიღებული შედეგი კონსოლში.
// მაგალითად მომხმარებელმა შემოიყვანა 10,შემდეგ “+”,შემდეგ 20,
// კონსოლში უნდა დაიბეჭდოს 30 


// let firstNum = Number(prompt("enter first number"))  /// NaN   isNaN  Number("gfg")   !isNaN
// let opp = prompt("enter opperrator + - * /  %")
// let secondNum = Number(prompt("enter second number"))


if(!isNaN(firstNum)&& !isNaN(secondNum)){
    if(opp == "+"){
        document.write(`${firstNum} + ${secondNum} = ${firstNum+secondNum}`)
    }
    else if(opp == "-"){
        document.write(`${firstNum} - ${secondNum} = ${firstNum-secondNum}`)
    }
    else if(opp == "*"){
        document.write(`${firstNum} * ${secondNum} = ${firstNum*secondNum}`)
    }
    else if(opp == "/" ){
       if(secondNum == 0){
        document.write("0 -ზე გაყოფა არ შეიძლება")
       }
       else {
        document.write(`${firstNum} / ${secondNum} = ${firstNum/secondNum}`)
       }
    }
    else if(opp == "%"){
        if(secondNum == 0){
            document.write("0 -ზე გაყოფა არ შეიძლება")
           }
           else {
            document.write(`${firstNum} გაყოფილილ ${secondNum} -ზე ნაშთი  = ${firstNum%secondNum}`)
           }
    }
    else {
        document.write("არასწორი ოპერატორი")
    }
}
else {
    document.write(`${firstNum} ან ${secondNum} არ არის რიცხვი`)
}



// •	შექმენით ცვლადი,სადაც შეინახავთ პაროლს მაგ:”abc123”,შემდეგ 
// მომხმარებელს სთხოვეთ შემოიყვანოს პაროლი,თუ მომხმარებლის მიერ შემოყვანილი 
// პაროლი დაემთხვა თქვენს მიერ შექმნილ პაროლს,დაბეჭდეთ success,სხვა შემთხვევაში დაბეჭდეთ error 

// let pass = 'abc123'
// let userPass = prompt("Enter password")

// if(pass == userPass){
//   console.log('success') 
// }
// else {
//     console.log('error')
// }


// •	მომხმარებელს შემოაყვანინეთ 3 რიცხვი და დაადგინეთ ამ რიცხვების სიგრძის გვერდებით
//  შეიძლება თუ არა შეიქმნას სამკუთხედი (სამკუთხედის თეორემა - სამკუთხედის ნებმისმიერი ერთი 
// გვერდის იგრძე ნაკლები უნდა იყოს სხვა ორი გევრდის სიგრძის ჯამზე)
// 	ავაწყოთ კალკულატორი if/else /else if-ის დახმარებით.მომხმარებელს 


// let firstSide = Number(prompt("Entter first Side"))
// let secondSide = Number(prompt("Entter second Side"))
// let thirdSide = Number(prompt("Entter third Side"))
   
//    if(!isNaN(firstSide) && !isNaN(secondSide) && !isNaN(thirdSide)){
//        if((firstSide+secondSide>thirdSide) 
//            && (secondSide+thirdSide>firstSide) 
//            && (thirdSide+firstSide>secondSide) ){
//                 console.log("done")
//        }
//        else{
//            console.log("can't be done")
//        }
//     }
//     else {
//         console.log("you did not write numbers as a sides")
//     }





