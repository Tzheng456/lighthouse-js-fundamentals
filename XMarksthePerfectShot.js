const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

function finalPosition(a) {
  let position = [0, 0];
  for (let dir of a) {
    if (dir === 'north') {
      position[1]++;
    } else if (dir === 'south') {
      position[1]--;
    } else if (dir === 'east') {
      position[0]++;
    } else {
      position[0]--;
    }
  }
  return position;
}


console.log(finalPosition(moves));