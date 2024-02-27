 //Set the target for the object sale
 const targetDate = new
Date('2024-03-10T00:00:00').getTime();

//Countdown every second
const timer =setInterval(function() {
    const now = new Date ().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    const minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
     if (distance < 0 ) { 
        clearInterval(timer);
        
        document.getElementById('timer').innerHTML = 'GIVEAWAY ENDS'
}
}, 1000);
