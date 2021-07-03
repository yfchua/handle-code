basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.sendNumber(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("A")
        basic.showArrow(ArrowNames.North)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("B")
        basic.showArrow(ArrowNames.South)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("C")
        basic.showArrow(ArrowNames.West)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("D")
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendString("I")
        basic.showIcon(IconNames.Target)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("0")
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendString("G")
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendString("F")
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendString("E")
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendString("H")
    }
})
