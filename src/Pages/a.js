
var team=  [
  {
    a: 5,
    b: true
  },
  {
    a: 5,
    b: true
  },
  {
    a: 5,
    b: true
  },
  {
    a: 5,
    b: true
  }
]

var id = 2;
for (let i = 0; i < team.length; i++) {
  if(i === id){
    team[i].a = 2;
  }
}

console.log(team)