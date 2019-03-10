function setDate() {
    // Save the present day in a constant
    const now = new Date();
    
    // Select the div for the secs, mins and hour hands and rotate it by the calculated degrees
    const seconds = now.getSeconds();
    const secondsToDegree = ((seconds / 60) * 360) + 90;
    const secondsHand = document.querySelector('.seconds-hand');
    secondsHand.style.transform = `rotate(${secondsToDegree}deg)`;
    
    const minutes = now.getMinutes();
    const minutesToDegree = ((minutes / 60) * 360) + 90;
    const minutesHand = document.querySelector('.minutes-hand');
    minutesHand.style.transform = `rotate(${minutesToDegree}deg)`;

    const hours = now.getHours();
    const hoursToDegree = ((hours / 12) * 360) + 90;
    const hoursHand = document.querySelector('.hours-hand');
    hoursHand.style.transform = `rotate(${hoursToDegree}deg)`;
    
    // Fix for animation on 0s
    if (secondsToDegree === 90) {
        secondsHand.style.transition = 'all 0.0s';
    } else {
        secondsHand.style.transition = 'all 0.05s';
    }
};

// Run setDate every second
setInterval(setDate, 1000);