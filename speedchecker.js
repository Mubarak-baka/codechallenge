// we start by first declaring two variables to enable me to access it inside the function 
let speedlimit= 70;
let penaltydemeritpointskm=5;

        // creating a function called checkspeed to let the user input drive's speed
     function checkspeed(speed){
            // a condition that checks if the speed of the driver is more than the speed limit
            // which prints OK if it is found true
        if(speed < speedlimit){
            console.log("OK");
        } 
       else if( speed > 12){
        // when speed is more than  the speed limit the code should print 
        // license expired
        console.log("License expired")
       }
        
        else {
            // this calculation calculates demerit points by simply subtracting the drivers (speed) and the required 
            // speed limit and later divides it by  5km 
            let points=(speed-speedlimit)/penaltydemeritpointskm
                console.log ("Drivers Points", points)
        }
        }
        // calling the function (checkspeed and inputing the speed prints out one output out of two outputs)
        // in this case 60 which is less than 70(speedlimit) the output will be "OK"
        checkspeed(60)

    
            
        

        
        


        
    
