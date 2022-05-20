serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    led.toggle(2, 2)
    textLine = serial.readLine().split(":")
    radio.sendValue(textLine[0], parseFloat(textLine[1]))
})
let textLine: string[] = []
radio.setGroup(99)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
