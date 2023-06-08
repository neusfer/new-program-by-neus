input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    radio.sendNumber(2)
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
    basic.clearScreen()
    radio.sendNumber(3)
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(111)
basic.forever(function () {
	
})
