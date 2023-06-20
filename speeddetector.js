//a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. 
//Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

function checkSpeed(speed) {

    //speedLimit set to 50 km/h, which is the speed limit.
    const speedLimit = 50;

    // demeritPointsPerKm is set to 5, indicating the number of demerit points given for every 5 km/h above the speed limit.
    const Points = 5;

    //maxDemeritPoints is set to 12, which represents the  limit on a scale for license suspension.
    const maxPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {

        //If the speed is above the speed limit, the function calculates the number of demerit points by subtracting the speed limit from the actual speed, 
        //dividing it by demeritPointsPerKm, and flooring the result using Math.floor
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKm);

        //If the calculated demeritPoints exceed the maxDemeritPoints, it prints "License suspended".
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
            
        //Otherwise, it prints the number of demerit points with the message "Points: [demeritPoints]".
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage with some speed value
//checkSpeed takes the value of the speed in context
checkSpeed(180);
