function genCFL() {


  ones = ['🤩', 'Hamilton', '💥', 'Montreal', '💙',
    '💋', 'Ottawa', 'Minnesota Lynx', '💯', '🙉',
    'Toronto', '👨‍🦱', 'BC', '💪', 'Calgary',
    '👍', 'Edmonton', '💣', 'Sascatchewan', '💕',
    'Winnipeg', '😹', '💙', '👁️‍🗨️', '😹',
    '👹', '👻', 'Sascatchewan', '👻', '😱', '👽']


    twos = ['🤩', 'Hamilton', '💥',  '💙',
    '💋', 'Ottawa', '😱',  '💯', '🙉',
    'Toronto', '👨‍🦱', 'BC', '💪', 'Calgary',
    '👍', 'Edmonton', '💣', 'Sascatchewan', '💕',
    'Winnipeg', '😹', 'Minnesota Lynx', '💙', 'Montreal','👁️‍🗨️', '😹',
    '👹', '👻', 'Sascatchewan', '👻',  '👽']

 

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


  document.getElementById('cfl_team').innerHTML = fruits;

}
