/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)

// 192.168.1.104

var mraa = require('mraa');

var led = new mraa.Gpio(6);
var motion = new mraa.Gpio(7);
var current = new mraa.Aio(0);

led.dir(mraa.DIR_OUT);
motion.dir(mraa.DIR_IN);

function blink()
{
    if(motion.read() == 1)
    {
        console.log('turn on led');
        led.write(1);
    }
    else
    {
        console.log('turn off led');
        led.write(0);
    }
    var value = current.read();
    console.log("energy = " + value);
}

setInterval(blink, 1000);
