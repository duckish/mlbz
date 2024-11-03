function genNHL() {

    ones = ['🤩', 'ANA-Ducks', '💥', 'Utah Hockey Club', '💙',
      '💋', 'BOS-Bruins', 'BUF-Sabres', '💯', 'WAS-Capitals','🙉',
      'CAL-Flames', '👨‍🦱', 'CAR-Hurricanes', '💪', 'CHI-Blackhawks',
      '👍', 'CLB-Blue Jackets', '💣', 'COL-Avalanche', '💕',
      'DAL-Stars', '😹', 'DET-Red Wings', '👁️‍🗨️', 'EDM-Oilers',
      '👹', 'FLA-Panthers', '👻', 'LA-Kings','😱', 'MIN-Wild','👽',
      '💯', 'MON-Canadiens','🙉','NAS-Predators', '😹','NJ-Devils', '🤩',
      '💥', 'NYI-Islanders','💙', 'NYR-Rangers','💋', 'OTT-Senators','💯', 'PHI-Flyers',
      '👨‍🦱', 'PIT-Penguins','💪', 'SEA-Kraken','👍', 'SJ-Sharks',
      '💣', 'STL-Blues','💕', 'TB-Lightning','👁️‍🗨️', 'TOR-Maple Leafs',
      '👹', 'VAN-Canucks','👻', 'VEG-Golden Knights','😱', 'WIN-Jets']
    
    twos = ['👁️‍🗨️','WIN-99-Jets','💯','ANA-99-Ducks','😹','Utah Hockey Club','💕','BOS-99-Bruins',
            'CAR-99-Hurricanes','🙉','CHI-99-Blackhawks','💪','CLB-99-Blue Jackets','💣','COL-99-Avalanche','💋','DAL-99-Stars',
            'DET-99-Red Wings','💯','EDM-99-Oilers','👁️‍🗨️','FLA-99-Panthers','💥','LA-99-Kings','MIN-99-Wild',
            'MON-99-Canadiens','NAS-99-Predators','💯','NJ-99-Devils','💣','NYI-99-Islanders','💥','NYR-99-Rangers',
            'OTT-99-Senators','💯','PHI-99-Flyers','🤩','PIT-99-Penguins','🤩','SEA-99-Kraken','👽','SJ-99-Sharks',
            'STL-99-Blues','💥','TB-99-Lightning','💣','TOR-99-Maple Leafs','👁️‍🗨️','VAN-99-Canucks','💋','VEG-99-Golden Knights',
            'WAS-99-Capitals','👍','BUF-99-Sabres','👻','CAL-99-Flames']
  
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
    
    //alert(fruits)
    document.getElementById('nhl_team').innerHTML = fruits;
           
  }

