const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)

function judgeVegetable(vegetables, metric) {
  let highest = 0;
  let idxOfHighest;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highest) {
      highest = vegetables[i][metric];
      idxOfHighest = i;
    }
  }
  let name = vegetables[idxOfHighest].submitter;
  return name;
}