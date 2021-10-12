serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showIcon(IconNames.Heart)
    textLine = serial.readLine().split(":")
    radio.sendValue(textLine[0], parseFloat(textLine[1]))
    basic.pause(1000)
    basic.showIcon(IconNames.Ghost)
})
let textLine: string[] = []
radio.setGroup(99)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
