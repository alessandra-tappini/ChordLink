var palettes = [
  ["#ff7f50","#6495ed","#32cd32","#ff1493","#0000ff","#8b008b","#00ced1","#ee82ee","#ff0000","#228b22"],
  ["#ff7f50","#6495ed","#32cd32","#ff1493","#0000ff","#8b008b","#00ced1","#ee82ee","#ff0000","#228b22","#87cefa","#808080","#daa520","#008080","#9acd32"],
  ["#ff7f50","#6495ed","#32cd32","#ff1493","#0000ff","#8b008b","#00ced1","#ee82ee","#ff0000","#228b22","#87cefa","#808080","#daa520","#008080","#9acd32","#7b68ee","#8b0000","#00008b","#1e90ff","#d3d3d3"],
  ["#ff7f50","#6495ed","#32cd32","#ff1493","#0000ff","#8b008b","#00ced1","#ee82ee","#ff0000","#228b22","#87cefa","#808080","#daa520","#008080","#9acd32","#7b68ee","#8b0000","#00008b","#1e90ff","#d3d3d3","#7fff00","#dda0dd","#ffff54","#e9967a","#483d8b"],
  ["#ff7f50","#6495ed","#32cd32","#ff1493","#0000ff","#8b008b","#00ced1","#ee82ee","#ff0000","#228b22","#87cefa","#808080","#daa520","#008080","#9acd32","#7b68ee","#8b0000","#00008b","#1e90ff","#d3d3d3","#7fff00","#dda0dd","#ffff54","#e9967a","#483d8b","#808000","#9400d3","#8fbc8f","#db7093","#00fa9a"],
  ["#ff7f50","#6495ed","#32cd32","#ff1493","#0000ff","#8b008b","#00ced1","#ee82ee","#ff0000","#228b22","#87cefa","#808080","#daa520","#008080","#9acd32","#7b68ee","#8b0000","#00008b","#1e90ff","#d3d3d3","#7fff00","#dda0dd","#ffff54","#e9967a","#483d8b","#808000","#9400d3","#8fbc8f","#db7093","#00fa9a","#4682b4","#f0e68c","#ff6347","#556b2f","#7fffd4"],
];

/*var palettes = [
  ["#228b22","#00008b","#b03060","#ff4500","#ffff00","#deb887","#00ff00","#00ffff","#ff00ff","#6495ed"],
  ["#ff69b4","#6b8e23","#4b0082","#ff0000","#00ced1","#ffa500","#0000ff","#ffff00","#2f4f4f","#00ff00","#ff00ff","#6495ed","#ffe4b5","#00fa9a","#a0522d"],
  ["#b22222","#00ced1","#ffa500","#0000cd","#ba55d3","#7fff00","#191970","#ff0000","#808000","#ffa07a","#2e8b57","#ff1493","#1e90ff","#f0e68c","#2f4f4f","#ff00ff","#ffff00","#d3d3d3","#00fa9a","#dda0dd"],
  ["#ee82ee","#1e90ff","#00ff7f","#8b008b","#b22222","#ffa07a","#ff00ff","#8a2be2","#9acd32","#483d8b","#ff1493","#0000ff","#7fff00","#000080","#556b2f","#f0e68c","#00bfff","#ffff00","#b8860b","#2f4f4f","#db7093","#00ffff","#ff0000","#3cb371","#c0c0c0"],
  ["#7b68ee","#1e90ff","#dc143c","#ff4500","#000080","#7f0000","#ff1493","#0000ff","#00ff7f","#b03060","#4682b4","#228b22","#add8e6","#f08080","#7cfc00","#800080","#cd853f","#556b2f","#90ee90","#ff00ff","#ffff00","#8fbc8f","#008b8b","#696969","#ee82ee","#f0e68c","#00ffff","#ffa500","#9acd32","#483d8b"],
  ["#7b68ee","#ff7f50","#00ced1","#00008b","#228b22","#ff1493","#ff6347","#8b008b","#9acd32","#556b2f","#dda0dd","#0000ff","#ff0000","#4682b4","#808080","#ffff54","#e9967a","#8b008b","#008080","#d3d3d3","#f0e68c","#00fa9a","#daa520","#483d8b","#87cefa","#db7093","#9400d3","#8fbc8f","#808000","#ee82ee","#1e90ff","#7fff00","#8b0000","#32cd32","#7fffd4"],
];*/

function getPalette(dim){
  var pos = dim < 11 ? 0 : dim > 34 ? 5 : Math.floor(dim/5) - 1;
  console.log("palette" + palettes[pos].length);
  console.log(palettes[pos]);
  return palettes[pos];
}
