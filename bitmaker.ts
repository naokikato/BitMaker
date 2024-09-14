/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="" block="BitMaker"
namespace IMLBitMaker {

    let strip :neopixel.Strip
    intializeLED()

    export enum Cross4Led {
        //% block="上"
        top = 0,
        //% block="右"
        right = 1,
        //% block="下"
        bottom = 2,
        //% block="左"
        left = 3,
        //% block="すべて"
        all = 4
    }

    //% block="LEDを消す|位置 %d"
    //% weight=100    
    export function OffLED(d: Cross4Led) {
                switch (d) {
                    case Cross4Led.top: 
                    case Cross4Led.right: 
                    case Cross4Led.bottom: 
                    case Cross4Led.left:
                        strip.setPixelColor(d,0)
                        strip.show()
                        break;
                    case Cross4Led.all: 
                        strip.showColor(0)
                        break;
                }
    }
    //% block="LEDをつける|位置 %d|色 %c"
    //% weight=100    
    export function OnLED(d: Cross4Led, c: NeoPixelColors ) {
        switch (d) {
            case Cross4Led.top:
            case Cross4Led.right:
            case Cross4Led.bottom:
            case Cross4Led.left:
                strip.setPixelColor(d,c)
                strip.show()
                break;
            case Cross4Led.all:
                strip.showColor(c)
                break;
        }
    }

    function intializeLED() {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
    }

}
