// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a00070004040504050502060305050504040505060405040505050405040606040505020606010504020405040604050405050604040506060602060606050405040505050405050505`, img`
2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 . . 2 2 
2 . . . . 2 2 . 2 2 
2 . 2 2 2 2 2 . 2 2 
2 . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.floorLight0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a00070004020603060606030405050405040405040605050505050405050506050405040505050306060505050306060606050505050506040505040504050505060606060606060105`, img`
2 . . . . . . . 2 2 
2 2 2 2 2 2 2 . 2 2 
2 2 2 2 2 2 2 . 2 2 
2 2 2 2 2 . . . 2 2 
2 . . . . . 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "startTile":
            case "tile1":return tile1;
            case "goalTile":
            case "tile2":return tile2;
            case "coinTile":
            case "tile3":return tile3;
            case "door1":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
