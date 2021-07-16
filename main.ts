basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.sendNumber(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("U")
        basic.showArrow(ArrowNames.North)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("D")
        basic.showArrow(ArrowNames.South)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("L")
        basic.showArrow(ArrowNames.West)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("R")
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendString("P")
        basic.showIcon(IconNames.Target)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("0")
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendString("BU")
        basic.showLeds(`
            . . # . .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendString("BF")
        basic.showLeds(`
            . . . . .
            . # . . .
            # # . . .
            . # . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendString("BR")
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # #
            . . . # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendString("BD")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . # . .
            `)
    }
})
