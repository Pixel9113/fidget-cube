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
    dr = randint(1, 20)
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
    } else if (dr == 6) {
        basic.showString("6")
    } else if (dr == 7) {
        basic.showString("7")
    } else if (dr == 8) {
        basic.showString("8")
    } else if (dr == 9) {
        basic.showString("9")
    } else if (dr == 10) {
        basic.showString("10")
    } else if (dr == 11) {
        basic.showString("11")
    } else if (dr == 12) {
        basic.showString("12")
    } else if (dr == 13) {
        basic.showString("13")
    } else if (dr == 14) {
        basic.showString("14")
    } else if (dr == 15) {
        basic.showString("15")
    } else if (dr == 16) {
        basic.showString("16")
    } else if (dr == 17) {
        basic.showString("17")
    } else if (dr == 18) {
        basic.showString("18")
    } else if (dr == 19) {
        basic.showString("19")
    } else {
        basic.showString("20")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Help Help Help Help Help")
})
