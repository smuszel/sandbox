// const maze = () => {
//     const size = [26, 14];
//     var walls = [];
//     var connectedIndex = [];
//     var potentialWalls = [];
//     var k = 0;
//     for (var i = 0; i < size[0]; i++) {
//         var row = [];
//         for (var j = 0; j < size[1]; j++) {
//             if (i < size[0] - 1) {
//                 potentialWalls.push([i, j, 0]);
//             }
//             if (j < size[1] - 1) {
//                 potentialWalls.push([i, j, 1]);
//             }
//             row.push(k);
//             k += 1;
//         }
//         connectedIndex.push(row);
//     }

//     while (potentialWalls.length > 0) {
//         var wIndex = Math.floor(Math.random() * potentialWalls.length);
//         var w = potentialWalls[wIndex];
//         var sideOne = connectedIndex[w[0]][w[1]];
//         var sideTwo = connectedIndex[w[0] + (1 - w[2])][w[1] + w[2]];
//         if (sideOne == sideTwo) {
//             walls.push(w);
//         } else {
//             for (var i = 0; i < connectedIndex.length; i++) {
//                 for (var j = 0; j < connectedIndex[i].length; j++) {
//                     if (connectedIndex[i][j] == sideTwo) {
//                         connectedIndex[i][j] = sideOne;
//                     }
//                 }
//             }
//         }
//         potentialWalls.splice(wIndex, 1);
//     }

//     return { walls: walls, width: size[0], height: size[1] };
// };
