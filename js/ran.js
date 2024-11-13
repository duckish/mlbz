function genRAN() {

  var team1 = document.getElementById('team1').value;
  var team2 = document.getElementById('team2').value;
  var team3 = document.getElementById('team3').value;
  var team4 = document.getElementById('team4').value;
  var team5 = document.getElementById('team5').value;
  var team6 = document.getElementById('team6').value;
  var team7 = document.getElementById('team7').value;
  var team8 = document.getElementById('team8').value;
  var team9 = document.getElementById('team9').value;
  var team10 = document.getElementById('team10').value;


  ones = ['🤩', team1, '💥', team8, '💙',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    '💋', team4, team2, '💯', '🙉',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    'NULL', '👨‍🦱', team7, '💪', 'NULL',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    '👍', team3, '💣', 'NULL', '💕',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    team6, '😹', team10, '👁️‍🗨️', '😹',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    '👹', '👻', team5, '👻', team9, '👽',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹'
  ]


    twos = ['🤩', team8, '💥',  '💙',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    '💋', team10, '😱',  team5, '🙉',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    team6, '👨‍🦱', 'NULL', '💪', 'NULL',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    '👍', team4, '💣', team9, '💕',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    'NULL', '😹', team7, '💙', team3,'👁️‍🗨️', '😹',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹',
    '👹', '👻', team2, '👻',  '👽',
    '🤩', '😹', 'NULL', '👁️‍🗨️', '😹']

 

      const fruits = [];

  for (let i = 0; i < 50; i++) {
      var ran_int = int_list[Math.floor(Math.random()*int_list.length)];
      var ran_ani = animals[Math.floor(Math.random()*animals.length)];
      console.log(ran_ani+ran_int);

      ran_num = ran_ani+ran_int;

      json_data[ran_num]

      if (json_data[ran_num] % 2 == 0) {
          fruits.push(ones[Math.floor(Math.random()*ones.length)]);
      }

      if (json_data[ran_num] % 2 == 1) {
              fruits.push(twos[Math.floor(Math.random()*twos.length)]);
          }
      
    }


    for (let i = 0; i < 49; i++) {
      var ran_int = int_list[Math.floor(Math.random()*int_list.length)];
      var ran_ani = animals[Math.floor(Math.random()*animals.length)];
      console.log(ran_ani+ran_int);

      ran_num = ran_ani+ran_int;

      json_data[ran_num]

      if (json_data[ran_num] % 2 == 0) {
          fruits.pop();
      }

      if (json_data[ran_num] % 2 == 1) {
              fruits.shift();
          }
      
    }
  
    //var ran_int = threes[Math.floor(Math.random()*threes.length)];


  document.getElementById('ran_team').innerHTML = fruits;

}
