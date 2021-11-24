input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
