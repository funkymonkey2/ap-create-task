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

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`28000a0005050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050504040404040505040404010505050505050505050505050505040404040505050505050505050504030303050505050303030404040404050504040404040405050303030305050505050505050504030303040504040404050503030303030505030303030303050505050505050505050505050505030303030405050505050502050505050505050505050505050505050505050505050505050505040303030304040404040404040505050505050505050505050505050505040404040505050505050303030303030303030303030305050505050505050505050505050505050303030304040404040403030303030303030303030303`, img`
........................................
........................................
........................................
..............................22222..222
...............2222..........22.2....222
22222..222222..2222.........22..2.2222..
22222..222222...............2...2.......
...........................2....22222222
.................2222......2....22222222
.................2222222222.............
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.builtin.coral1,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
