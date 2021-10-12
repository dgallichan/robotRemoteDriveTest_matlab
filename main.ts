serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    radio.sendString(serial.readLine())
})
radio.setGroup(99)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
