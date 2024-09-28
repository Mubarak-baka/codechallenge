// Functio to determine the grade based on the students marks
function checkmarks(marks){
    // check if the marks entered are within the range indicated in each of the conditional brackets 
    if(marks >0 && marks <=40)   
            // console.log prints the grades to the students attaining the specific range of marks 
        console.log("E-")       

    else if(marks >=41 && marks <=49 )
        console.log("D-")

    else if(marks>=49 && marks<=59 )
        console.log("C-")

    else if (marks >= 60 && marks <=79)
        console.log("B-")

    else if(marks >=79 )
        console.log ("A") 
}
//  call the function with an example of 50
(checkmarks(50))
// this value entered will output C-
