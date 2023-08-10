let tile_map1 = tiles.createMap(tilemap`level1`)
let tile_map2 = tiles.createMap(tilemap`level2`)
tiles.loadMap(tile_map1)
robot.beginScreen()
tiles.connectMapById(tile_map1, tile_map2, ConnectionKind.Door1)
scene.onOverlapTile(SpriteKind.Player, assets.tile`door1`, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    tiles.loadMap(tile_map2)
    robot.beginScreen()
})
robot.turnLeft()
robot.moveForward()
robot.moveForward()
robot.moveForward()
robot.collectCoin()
robot.turnLeft()
robot.moveForward()
robot.moveForward()
robot.turnLeft()
robot.moveForward()
robot.moveForward()
robot.moveForward()
robot.collectCoin()
robot.moveForward()
robot.moveForward()
robot.moveForward()
robot.turnLeft()
robot.moveForward()
robot.moveForward()
robot.collectCoin()
robot.moveForward()
robot.turnLeft()
robot.moveForward()
robot.turnRight()
robot.moveForward()
robot.moveForward()
robot.collectCoin()
robot.turnRight()
robot.moveForward()
robot.moveForward()
robot.turnLeft()
robot.moveForward()
robot.moveForward()
robot.moveForward()
robot.moveForward()
robot.moveForward()
robot.moveForward()
robot.moveForward()
robot.turnRight()
robot.moveForward()
while (robot.goalReached() == false) {
    if (robot.canMove("forward")) {
        robot.moveForward()
    }
    
    if (robot.canMove("right")) {
        robot.turnRight()
    }
    
    if (robot.canMove("left")) {
        robot.turnLeft()
    }
    
    if (robot.detectCoin()) {
        robot.collectCoin()
    }
    
}
