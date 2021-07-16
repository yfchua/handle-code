basic.show_icon(IconNames.HEART)
radio.set_group(1)
radio.send_number(7)

def on_forever():
    if GHBit.rocker(GHBit.enRocker.UP):
        radio.send_string("A")
        basic.show_arrow(ArrowNames.NORTH)
    elif GHBit.rocker(GHBit.enRocker.DOWN):
        radio.send_string("B")
        basic.show_arrow(ArrowNames.SOUTH)
    elif GHBit.rocker(GHBit.enRocker.LEFT):
        radio.send_string("C")
        basic.show_arrow(ArrowNames.WEST)
    elif GHBit.rocker(GHBit.enRocker.RIGHT):
        radio.send_string("D")
        basic.show_arrow(ArrowNames.EAST)
    elif GHBit.rocker(GHBit.enRocker.PRESS):
        radio.send_string("I")
        basic.show_icon(IconNames.TARGET)
    elif GHBit.rocker(GHBit.enRocker.NOSTATE):
        radio.send_string("0")
        basic.show_icon(IconNames.HAPPY)
basic.forever(on_forever)

def on_forever2():
    if GHBit.button(GHBit.enButton.B2, GHBit.enButtonState.PRESS):
        radio.send_string("G")
basic.forever(on_forever2)

def on_forever3():
    if GHBit.button(GHBit.enButton.B1, GHBit.enButtonState.PRESS):
        radio.send_string("F")
basic.forever(on_forever3)

def on_forever4():
    if GHBit.button(GHBit.enButton.B4, GHBit.enButtonState.PRESS):
        radio.send_string("E")
basic.forever(on_forever4)

def on_forever5():
    if GHBit.button(GHBit.enButton.B3, GHBit.enButtonState.PRESS):
        radio.send_string("H")
basic.forever(on_forever5)
