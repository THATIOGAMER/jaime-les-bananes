scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................fff......................fffff...............................................................................................................
    ...................fff...................fffffffff..............................................................................................................
    ...................fff.................fffffffffff..............................................................................................................
    ...................fff.................ffffff22222fffff.........................................................................................................
    ...................fff................ffff2222222ffffffff.......................................................................................................
    ...................fff...............ffff222222ffffffffff.......................................................................................................
    ...................fff..............fffff222222fffff2222ff......................................................................................................
    ..................ffff..............fffff22222fffff22222ff......................................................................................................
    ..................ffff..............fffff22222ffff222222ff......................................................................................................
    ..................fff...............ffffff2222fff2222222ff......................................................................................................
    ..................fff..................fff22222222222ffff.......................................................................................................
    ..................fff..................fff2222222222fffff.......................................................................................................
    ..................fff..................fff222222222ffffff.......................................................................................................
    ..................fff..................ffff2222222fffff.........................................................................................................
    ..................fff..................fffff2222fffffff.........................................................................................................
    .................ffff...................fffff22ffffff...........................................................................................................
    .................ffff....................fffffffffff............................................................................................................
    .................fff......................ffffffff..............................................................................................................
    .................fff......................fffffff...............................................................................................................
    .................fff.......................fff..................................................................................................................
    .................fff............................................................................................................................................
    .................fff............................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................................................555555555...........................................................................................
    ..........................................................55555555555...........................................................................................
    ........................................................5555555fff555...........................................................................................
    .......................................................55555555fff555...........................................................................................
    .......................................................55555555fff5555..........................................................................................
    ......................................................5555555555555555..........................................................................................
    ......................................................5555555555555555..........................................................................................
    ......................................................555555555555555...........................................................................................
    ......................................................55555555555555............................................................................................
    .....................................................55555555555555.............................................................................................
    .....................................................5555555555555..............................................................................................
    .....................................................555555555555............................fff................................................................
    ....................................................555555555555.............................fff................................................................
    ....................................................55555555555..............................fff................................................................
    ....................................................5555555555...............................ffffff.............................................................
    ....................................................555555555...............................fffffff.............................................................
    ....................................................55555555................................ffffffff............................................................
    ....................................................55555555................................fff.ffff............................................................
    ....................................................55555555................................fff.ffff............................................................
    ....................................................55555555...............................ffff.ffff............................................................
    ...................................................555555555...............................ffffffff.............................................................
    ...................................................555555555...............................fff.ffff.............................................................
    ...................................................555555555...............................fffffff..............................................................
    ...................................................555555555..............................ffffffff......................fff.....................................
    ...................................................555555555..............................fffffffff....................ffff.....................................
    ...................................................5555555555.............................fff..fffff........fffff.....fffff.....................................
    ....................................................555555555.............................fff.ffffff.......ffffffff...fffff.....................................
    ....................................................5555555555...........................fffffffffff......fffffffff...fffffff...................................
    .....................................................5555555555.........................ffffffffff........fffffffff...fffffff...................................
    .....................................................555555555555.......................ffffffff.........fffffffff....ffffffff..................................
    ......................................................55555555555555....................fffff............fffffffff....ffffffff..................................
    ......................................................55555555555555555..................................fffffffff....ffff.ffff.................................
    .......................................................555555555555555555................................fffff.fff....ffff.ffff.................................
    ........................................................55555555555555555555.......55555.......................ffffff.ffff..fff.................................
    .........................................................5555555555555555555555555555555.......................ffffff.ffff..fff.......fffffffffff...............
    ..........................................................555555555555555555555555555555........................fffff.fff...fff......ffffffffffff...............
    ...........................................................5555555555555555555555555555.....................................fff.....fffffffffffff...............
    ............................................................555555555555555555555555555................fff..................fff.....ffff.......fff..............
    .............................................................55555555555555555555555555...............ffff..................ffff....fff.......ffff..............
    ...............................................................555555555555555555555555...............ffff..................ffff....ffff....ffffff..............
    ...................................................................5555555555555555555...............ffff.....ffff...........fff....ffffffffffffff..............
    .......................................................................55555555.....................fffff...ffffff...........fff.....fffffffffffff..............
    ....................................................................................................fffff.fffffffff..........fff......ffffffff.fff..............
    ....................................................................................................fffffffffffffff............................fffffff..fff.....
    ...................................................................................................fffffffffff..fff............................ffffffffffff.....
    ...................................................................................................fffffffff....ffff............................fffffffffff.....
    ...................................................................................................fffffff......ffff................................ffffff......
    ..................................................................................................ffffff.........ffff............ffffff.........................
    ..................................................................................................fffff..........ffff..........fffffffff........................
    ..................................................................................................ffff............ffff........ffffffffff........................
    ..................................................................................................ffff............ffff......ffffffffffff........................
    ..................................................................................................fff..............fff......fffffffffffff..ffff.................
    ..................................................................................................fff.............ffff......fffffffffffffffffff.................
    ..................................................................................................................ffff......fffffffff.fffffffff.................
    ..................................................................................................................fff.........fffff....fffffff..................
    ................................................................................................................................................................
    `)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . 5 f . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . . . . . 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000047b000700080001220e000f0001221200130001221500160001221a001b0001241c001d00012220002100012522002300012227002800012229002a0001222d002e00012230003100012532003300012233003400011e38003900011e39003a0001223a003b00011e3b003c000220243d003e00011d3e003f0003202429`), music.PlaybackMode.UntilDone)
