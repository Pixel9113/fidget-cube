let dr = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Silly)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    dr = randint(1, 6)
    if (dr == 1) {
        basic.showString("1")
    } else if (dr == 2) {
        basic.showString("2")
    } else if (dr == 3) {
        basic.showString("3")
    } else if (dr == 4) {
        basic.showString("4")
    } else if (dr == 5) {
        basic.showString("5")
    } else {
        basic.showString("6")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Help Help Help HelpHelp")
})
