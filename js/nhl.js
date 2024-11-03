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



{"gameDay": "2022-10-07",	2:00 PM	San Jose Sharks	1	Nashville Predators	4		16,648	2:43	at O2 Arena (Prague, CZ)
{"gameDay": "2022-10-08",	2:00 PM	Nashville Predators	3	San Jose Sharks	2		17,023	2:33	at O2 Arena (Prague, CZ)
{"gameDay": "2022-10-11",	10:00 PM	Vegas Golden Knights	4	Los Angeles Kings	3		18,230	2:31	
{"gameDay": "2022-10-11",	7:30 PM	Tampa Bay Lightning	1	New York Rangers	3		18,006	2:21	
{"gameDay": "2022-10-12",	10:00 PM	Seattle Kraken	4	Anaheim Ducks	5	OT	17,530	2:28	
{"gameDay": "2022-10-12",	7:00 PM	Columbus Blue Jackets	1	Carolina Hurricanes	4		18,824	2:37	
{"gameDay": "2022-10-12",	9:30 PM	Chicago Blackhawks	2	Colorado Avalanche	5		18,143	2:19	
{"gameDay": "2022-10-12",	10:00 PM	Vancouver Canucks	3	Edmonton Oilers	5		18,347	2:41	
{"gameDay": "2022-10-12",	7:00 PM	Toronto Maple Leafs	3	Montreal Canadiens	4		21,105	2:30	
{"gameDay": "2022-10-12",	7:00 PM	Boston Bruins	5	Washington Capitals	2		18,573	2:28	
{"gameDay": "2022-10-13",	7:00 PM	Ottawa Senators	1	Buffalo Sabres	4		15,364	2:21	
{"gameDay": "2022-10-13",	9:30 PM	Colorado Avalanche	3	Calgary Flames	5		19,289	2:35	
{"gameDay": "2022-10-13",	10:30 PM	Seattle Kraken	4	Los Angeles Kings	1		15,645	2:28	
{"gameDay": "2022-10-13",	8:00 PM	New York Rangers	7	Minnesota Wild	3		18,612	2:31	
{"gameDay": "2022-10-13",	8:30 PM	Dallas Stars	4	Nashville Predators	1		17,692	2:26	
{"gameDay": "2022-10-13",	7:30 PM	Florida Panthers	3	New York Islanders	1		17,255	2:36	
{"gameDay": "2022-10-13",	7:00 PM	New Jersey Devils	2	Philadelphia Flyers	5		19,107	2:34	
{"gameDay": "2022-10-13",	7:00 PM	Arizona Coyotes	2	Pittsburgh Penguins	6		18,355	2:34	
{"gameDay": "2022-10-13",	7:30 PM	Washington Capitals	2	Toronto Maple Leafs	3		18,914	2:31	
{"gameDay": "2022-10-13",	10:00 PM	Chicago Blackhawks	0	Vegas Golden Knights	1		18,467	2:27	
{"gameDay": "2022-10-14",	7:00 PM	Tampa Bay Lightning	5	Columbus Blue Jackets	2		18,889	2:25	
{"gameDay": "2022-10-14",	7:00 PM	Montreal Canadiens	0	Detroit Red Wings	3		19,515	2:30	
{"gameDay": "2022-10-14",	10:30 PM	Carolina Hurricanes	2	San Jose Sharks	1		17,562	2:27	
{"gameDay": "2022-10-14",	8:00 PM	New York Rangers	1	Winnipeg Jets	4		14,553	2:26	
{"gameDay": "2022-10-15",	7:00 PM	Arizona Coyotes	3	Boston Bruins	6		17,850	2:33	
{"gameDay": "2022-10-15",	1:00 PM	Florida Panthers	4	Buffalo Sabres	3		11,481	2:30	
{"gameDay": "2022-10-15",	8:00 PM	Nashville Predators	1	Dallas Stars	5		18,532	2:30	
{"gameDay": "2022-10-15",	10:00 PM	Calgary Flames	4	Edmonton Oilers	3		18,347	2:35	
{"gameDay": "2022-10-15",	8:00 PM	Los Angeles Kings	7	Minnesota Wild	6		18,421	2:44	
{"gameDay": "2022-10-15",	7:00 PM	Detroit Red Wings	5	New Jersey Devils	2		16,514	2:25	
{"gameDay": "2022-10-15",	7:30 PM	Anaheim Ducks	1	New York Islanders	7		16,487	2:32	
{"gameDay": "2022-10-15",	4:00 PM	Vancouver Canucks	2	Philadelphia Flyers	3		14,837	2:27	
{"gameDay": "2022-10-15",	7:00 PM	Tampa Bay Lightning	2	Pittsburgh Penguins	6		18,416	2:25	
{"gameDay": "2022-10-15",	10:00 PM	Vegas Golden Knights	5	Seattle Kraken	2		17,151	2:32	
{"gameDay": "2022-10-15",	10:00 PM	Chicago Blackhawks	5	San Jose Sharks	2		15,219	2:22	
{"gameDay": "2022-10-15",	8:00 PM	Columbus Blue Jackets	2	St. Louis Blues	5		18,096	2:19	
{"gameDay": "2022-10-15",	7:00 PM	Ottawa Senators	2	Toronto Maple Leafs	3		18,709	2:28	
{"gameDay": "2022-10-15",	7:00 PM	Montreal Canadiens	1	Washington Capitals	3		18,573	2:29	
{"gameDay": "2022-10-17",	7:00 PM	Florida Panthers	3	Boston Bruins	5		17,850	2:32	
{"gameDay": "2022-10-17",	8:30 PM	Winnipeg Jets	1	Dallas Stars	4		17,875	2:22	
{"gameDay": "2022-10-17",	7:00 PM	Los Angeles Kings	5	Detroit Red Wings	4	OT	15,919	2:35	
{"gameDay": "2022-10-17",	8:00 PM	Colorado Avalanche	6	Minnesota Wild	3		17,437	2:36	
{"gameDay": "2022-10-17",	7:00 PM	Pittsburgh Penguins	2	Montreal Canadiens	3	OT	21,105	2:32	
{"gameDay": "2022-10-17",	7:00 PM	Anaheim Ducks	4	New York Rangers	6		18,006	2:29	
{"gameDay": "2022-10-17",	10:00 PM	Carolina Hurricanes	5	Seattle Kraken	1		17,151	2:30	
{"gameDay": "2022-10-17",	7:00 PM	Arizona Coyotes	4	Toronto Maple Leafs	2		18,346	2:28	
{"gameDay": "2022-10-17",	7:00 PM	Vancouver Canucks	4	Washington Capitals	6		18,573	2:32	
{"gameDay": "2022-10-18",	7:00 PM	Vancouver Canucks	3	Columbus Blue Jackets	4	OT	14,060	2:30	
{"gameDay": "2022-10-18",	9:00 PM	Vegas Golden Knights	2	Calgary Flames	3		16,944	2:34	
{"gameDay": "2022-10-18",	9:00 PM	Buffalo Sabres	4	Edmonton Oilers	2		16,121	2:35	
{"gameDay": "2022-10-18",	7:00 PM	Anaheim Ducks	2	New Jersey Devils	4		10,130	2:29	
{"gameDay": "2022-10-18",	9:30 PM	Los Angeles Kings	4	Nashville Predators	3	SO	17,159	2:35	
{"gameDay": "2022-10-18",	7:30 PM	San Jose Sharks	2	New York Islanders	5		13,892	2:31	
{"gameDay": "2022-10-18",	7:00 PM	Boston Bruins	5	Ottawa Senators	7		19,811	2:41	
{"gameDay": "2022-10-18",	7:00 PM	Philadelphia Flyers	3	Tampa Bay Lightning	2		19,092	2:31	
{"gameDay": "2022-10-19",	8:00 PM	Winnipeg Jets	4	Colorado Avalanche	3	OT	18,062	2:26	
{"gameDay": "2022-10-19",	7:30 PM	Philadelphia Flyers	3	Florida Panthers	4		17,421	2:38	
{"gameDay": "2022-10-19",	10:00 PM	St. Louis Blues	4	Seattle Kraken	3	OT	17,151	2:27	
{"gameDay": "2022-10-20",	7:00 PM	Anaheim Ducks	1	Boston Bruins	2	SO	17,850	2:48	
{"gameDay": "2022-10-20",	7:00 PM	Nashville Predators	3	Columbus Blue Jackets	5		14,691	2:37	
{"gameDay": "2022-10-20",	9:30 PM	Buffalo Sabres	6	Calgary Flames	3		17,080	2:28	
{"gameDay": "2022-10-20",	9:00 PM	Carolina Hurricanes	4	Edmonton Oilers	6		16,023	2:38	
{"gameDay": "2022-10-20",	8:00 PM	Vancouver Canucks	3	Minnesota Wild	4	OT	17,323	2:29	
{"gameDay": "2022-10-20",	7:00 PM	Arizona Coyotes	2	Montreal Canadiens	6		20,691	2:28	
{"gameDay": "2022-10-20",	7:30 PM	New Jersey Devils	4	New York Islanders	1		16,046	2:22	
{"gameDay": "2022-10-20",	7:00 PM	San Jose Sharks	3	New York Rangers	2	OT	17,083	2:27	
{"gameDay": "2022-10-20",	7:00 PM	Washington Capitals	2	Ottawa Senators	5		14,210	2:28	
{"gameDay": "2022-10-20",	7:00 PM	Los Angeles Kings	1	Pittsburgh Penguins	6		17,136	2:27	
{"gameDay": "2022-10-20",	7:00 PM	Dallas Stars	2	Toronto Maple Leafs	3	OT	18,488	2:50	
{"gameDay": "2022-10-20",	10:00 PM	Winnipeg Jets	2	Vegas Golden Knights	5		17,777	2:19	
{"gameDay": "2022-10-21",	8:30 PM	Detroit Red Wings	3	Chicago Blackhawks	4	OT	18,753	2:31	
{"gameDay": "2022-10-21",	9:00 PM	Seattle Kraken	3	Colorado Avalanche	2		18,131	2:26	
{"gameDay": "2022-10-21",	7:30 PM	Tampa Bay Lightning	3	Florida Panthers	2	OT	17,531	2:44	
{"gameDay": "2022-10-22",	1:00 PM	Minnesota Wild	3	Boston Bruins	4	OT	17,850	2:42	
{"gameDay": "2022-10-22",	7:00 PM	Pittsburgh Penguins	6	Columbus Blue Jackets	3		18,051	2:35	
{"gameDay": "2022-10-22",	10:00 PM	Carolina Hurricanes	2	Calgary Flames	3	OT	17,210	2:27	
{"gameDay": "2022-10-22",	4:00 PM	St. Louis Blues	2	Edmonton Oilers	0		17,102	2:12	
{"gameDay": "2022-10-22",	7:00 PM	Dallas Stars	5	Montreal Canadiens	2		21,105	2:26	
{"gameDay": "2022-10-22",	1:00 PM	San Jose Sharks	1	New Jersey Devils	2		11,037	2:31	
{"gameDay": "2022-10-22",	8:00 PM	Philadelphia Flyers	3	Nashville Predators	1		17,470	2:34	
{"gameDay": "2022-10-22",	4:00 PM	Arizona Coyotes	2	Ottawa Senators	6		15,107	2:29	
{"gameDay": "2022-10-22",	7:00 PM	New York Islanders	3	Tampa Bay Lightning	5		19,092	2:29	
{"gameDay": "2022-10-22",	10:00 PM	Buffalo Sabres	5	Vancouver Canucks	1		18,809	2:26	
{"gameDay": "2022-10-22",	10:00 PM	Colorado Avalanche	3	Vegas Golden Knights	2		18,207	2:29	
{"gameDay": "2022-10-22",	7:00 PM	Toronto Maple Leafs	4	Winnipeg Jets	1		15,325	2:23	
{"gameDay": "2022-10-22",	7:00 PM	Los Angeles Kings	3	Washington Capitals	4		18,573	2:26	
{"gameDay": "2022-10-23",	2:00 PM	Seattle Kraken	4	Chicago Blackhawks	5		14,892	2:26	
{"gameDay": "2022-10-23",	5:00 PM	Anaheim Ducks	1	Detroit Red Wings	5		17,932	2:33	
{"gameDay": "2022-10-23",	5:00 PM	New York Islanders	2	Florida Panthers	3		16,342	2:26	
{"gameDay": "2022-10-23",	5:00 PM	Columbus Blue Jackets	5	New York Rangers	1		18,006	2:23	
{"gameDay": "2022-10-23",	7:00 PM	San Jose Sharks	3	Philadelphia Flyers	0		14,512	2:29	
{"gameDay": "2022-10-24",	8:00 PM	Pittsburgh Penguins	3	Edmonton Oilers	6		17,392	2:27	
{"gameDay": "2022-10-24",	7:00 PM	Washington Capitals	6	New Jersey Devils	3		11,405	2:31	
{"gameDay": "2022-10-24",	7:00 PM	Dallas Stars	2	Ottawa Senators	4		12,088	2:29	
{"gameDay": "2022-10-24",	10:30 PM	Carolina Hurricanes	3	Vancouver Canucks	2		18,775	2:34	
{"gameDay": "2022-10-24",	10:00 PM	Toronto Maple Leafs	1	Vegas Golden Knights	3		17,989	2:35	
{"gameDay": "2022-10-24",	8:00 PM	St. Louis Blues	0	Winnipeg Jets	4		13,936	2:18	
{"gameDay": "2022-10-25",	7:00 PM	Dallas Stars	1	Boston Bruins	3		17,850	2:27	
{"gameDay": "2022-10-25",	7:00 PM	Arizona Coyotes	6	Columbus Blue Jackets	3		14,498	2:33	
{"gameDay": "2022-10-25",	9:00 PM	Pittsburgh Penguins	1	Calgary Flames	4		17,628	2:28	
{"gameDay": "2022-10-25",	8:30 PM	Florida Panthers	2	Chicago Blackhawks	4		12,859	2:28	
{"gameDay": "2022-10-25",	7:00 PM	New Jersey Devils	6	Detroit Red Wings	2		16,546	2:27	
{"gameDay": "2022-10-25",	10:30 PM	Tampa Bay Lightning	2	Los Angeles Kings	4		16,480	2:26	
{"gameDay": "2022-10-25",	7:00 PM	Minnesota Wild	3	Montreal Canadiens	1		20,867	2:24	
{"gameDay": "2022-10-25",	8:00 PM	Colorado Avalanche	3	New York Rangers	2	SO	18,006	2:47	
{"gameDay": "2022-10-25",	10:00 PM	Buffalo Sabres	1	Seattle Kraken	5		17,151	2:21	
{"gameDay": "2022-10-25",	10:30 PM	Vegas Golden Knights	4	San Jose Sharks	2		12,003	2:26	
{"gameDay": "2022-10-26",	10:00 PM	Tampa Bay Lightning	4	Anaheim Ducks	2		14,889	2:31	
{"gameDay": "2022-10-26",	7:30 PM	New York Rangers	0	New York Islanders	3		17,255	2:25	
{"gameDay": "2022-10-26",	8:00 PM	Edmonton Oilers	3	St. Louis Blues	1		18,096	2:24	
{"gameDay": "2022-10-27",	7:00 PM	Detroit Red Wings	1	Boston Bruins	5		17,850	2:31	
{"gameDay": "2022-10-27",	7:00 PM	Montreal Canadiens	3	Buffalo Sabres	2		12,735	2:21	
{"gameDay": "2022-10-27",	8:30 PM	Edmonton Oilers	6	Chicago Blackhawks	5		13,685	2:38	
{"gameDay": "2022-10-27",	8:30 PM	Washington Capitals	0	Dallas Stars	2		18,235	2:25	
{"gameDay": "2022-10-27",	10:30 PM	Winnipeg Jets	6	Los Angeles Kings	4		15,716	2:25	
{"gameDay": "2022-10-27",	8:00 PM	St. Louis Blues	2	Nashville Predators	6		17,159	2:19	
{"gameDay": "2022-10-27",	7:00 PM	Minnesota Wild	4	Ottawa Senators	2		13,870	2:35	
{"gameDay": "2022-10-27",	7:00 PM	Florida Panthers	3	Philadelphia Flyers	4		14,871	2:37	
{"gameDay": "2022-10-27",	10:00 PM	Vancouver Canucks	5	Seattle Kraken	4		17,151	2:31	
{"gameDay": "2022-10-27",	10:30 PM	Toronto Maple Leafs	3	San Jose Sharks	4	OT	12,507	2:21	
{"gameDay": "2022-10-28",	10:30 PM	Winnipeg Jets	3	Arizona Coyotes	2	OT	4,600	2:27	
{"gameDay": "2022-10-28",	7:00 PM	New York Islanders	6	Carolina Hurricanes	2		18,680	2:29	
{"gameDay": "2022-10-28",	7:00 PM	Boston Bruins	4	Columbus Blue Jackets	0		16,162	2:19	
{"gameDay": "2022-10-28",	7:00 PM	Colorado Avalanche	0	New Jersey Devils	1		12,502	2:21	
{"gameDay": "2022-10-28",	10:00 PM	Pittsburgh Penguins	1	Vancouver Canucks	5		18,528	2:26	
{"gameDay": "2022-10-28",	6:00 PM	Anaheim Ducks	0	Vegas Golden Knights	4		18,036	2:32	
{"gameDay": "2022-10-29",	7:00 PM	Chicago Blackhawks	3	Buffalo Sabres	4	OT	14,547	2:31	
{"gameDay": "2022-10-29",	10:00 PM	Edmonton Oilers	3	Calgary Flames	2		19,289	2:30	
{"gameDay": "2022-10-29",	2:00 PM	New York Rangers	6	Dallas Stars	3		18,532	2:28	
{"gameDay": "2022-10-29",	7:00 PM	Minnesota Wild	1	Detroit Red Wings	2		17,364	2:15	
{"gameDay": "2022-10-29",	4:00 PM	Ottawa Senators	3	Florida Panthers	5		15,577	2:38	
{"gameDay": "2022-10-29",	7:00 PM	Toronto Maple Leafs	2	Los Angeles Kings	4		17,530	2:28	
{"gameDay": "2022-10-29",	8:00 PM	Washington Capitals	3	Nashville Predators	0		17,159	2:32	
{"gameDay": "2022-10-29",	7:30 PM	Colorado Avalanche	4	New York Islanders	5		17,255	2:30	
{"gameDay": "2022-10-29",	7:00 PM	Carolina Hurricanes	4	Philadelphia Flyers	3	OT	13,335	2:40	
{"gameDay": "2022-10-29",	10:00 PM	Pittsburgh Penguins	1	Seattle Kraken	3		17,151	2:33	
{"gameDay": "2022-10-29",	4:30 PM	Tampa Bay Lightning	4	San Jose Sharks	3		15,122	2:17	
{"gameDay": "2022-10-29",	7:00 PM	Montreal Canadiens	7	St. Louis Blues	4		18,096	2:27	
{"gameDay": "2022-10-30",	8:00 PM	Toronto Maple Leafs	3	Anaheim Ducks	4	OT	16,084	2:35	
{"gameDay": "2022-10-30",	8:00 PM	New York Rangers	3	Arizona Coyotes	2		4,600	2:24	
{"gameDay": "2022-10-30",	7:00 PM	Minnesota Wild	4	Chicago Blackhawks	3	SO	14,149	2:43	
{"gameDay": "2022-10-30",	2:00 PM	Columbus Blue Jackets	1	New Jersey Devils	7		11,547	2:28	
{"gameDay": "2022-10-30",	8:00 PM	Winnipeg Jets	1	Vegas Golden Knights	2	OT	17,824	2:31	
{"gameDay": "2022-10-31",	7:00 PM	Detroit Red Wings	3	Buffalo Sabres	8		9,673	2:27	
{"gameDay": "2022-10-31",	7:00 PM	Washington Capitals	2	Carolina Hurricanes	3	SO	16,211	2:41	
{"gameDay": "2022-10-31",	8:00 PM	Los Angeles Kings	5	St. Louis Blues	1		17,220	2:23	
{"gameDay": "2022-11-01",	10:00 PM	Florida Panthers	1	Arizona Coyotes	3		4,600	2:30	
{"gameDay": "2022-11-01",	9:00 PM	Seattle Kraken	5	Calgary Flames	4		16,803	2:33	
{"gameDay": "2022-11-01",	8:30 PM	New York Islanders	3	Chicago Blackhawks	1		12,523	2:25	
{"gameDay": "2022-11-01",	8:30 PM	Los Angeles Kings	2	Dallas Stars	5		18,374	2:28	
{"gameDay": "2022-11-01",	9:00 PM	Nashville Predators	4	Edmonton Oilers	7		16,812	2:37	
{"gameDay": "2022-11-01",	8:00 PM	Montreal Canadiens	1	Minnesota Wild	4		16,385	2:26	
{"gameDay": "2022-11-01",	7:00 PM	Philadelphia Flyers	0	New York Rangers	1	OT	17,206	2:29	
{"gameDay": "2022-11-01",	8:00 PM	Boston Bruins	6	Pittsburgh Penguins	5	OT	17,629	2:43	
{"gameDay": "2022-11-01",	10:30 PM	Anaheim Ducks	6	San Jose Sharks	5	SO	10,058	2:42	
{"gameDay": "2022-11-01",	7:00 PM	Ottawa Senators	3	Tampa Bay Lightning	4		19,092	2:33	
{"gameDay": "2022-11-01",	10:00 PM	New Jersey Devils	5	Vancouver Canucks	2		18,548	2:24	
{"gameDay": "2022-11-01",	7:00 PM	Vegas Golden Knights	3	Washington Capitals	2	OT	18,573	2:34	
{"gameDay": "2022-11-02",	7:30 PM	Pittsburgh Penguins	3	Buffalo Sabres	6		12,201	2:28	
{"gameDay": "2022-11-02",	7:00 PM	Philadelphia Flyers	2	Toronto Maple Leafs	5		18,437	2:36	
{"gameDay": "2022-11-03",	10:00 PM	Dallas Stars	7	Arizona Coyotes	2		4,600	2:25	
{"gameDay": "2022-11-03",	9:00 PM	Nashville Predators	4	Calgary Flames	1		16,984	2:31	
{"gameDay": "2022-11-03",	8:30 PM	Los Angeles Kings	1	Chicago Blackhawks	2	OT	16,658	2:30	
{"gameDay": "2022-11-03",	7:00 PM	Washington Capitals	1	Detroit Red Wings	3		18,527	2:25	
{"gameDay": "2022-11-03",	9:00 PM	New Jersey Devils	4	Edmonton Oilers	3		17,021	2:22	
{"gameDay": "2022-11-03",	8:00 PM	Seattle Kraken	4	Minnesota Wild	0		17,221	2:19	
{"gameDay": "2022-11-03",	7:30 PM	Boston Bruins	5	New York Rangers	2		18,006	2:21	
{"gameDay": "2022-11-03",	7:00 PM	Vegas Golden Knights	5	Ottawa Senators	4		16,043	2:34	
{"gameDay": "2022-11-03",	10:30 PM	Florida Panthers	4	San Jose Sharks	3	SO	10,182	2:42	
{"gameDay": "2022-11-03",	8:00 PM	New York Islanders	5	St. Louis Blues	2		18,096	2:33	
{"gameDay": "2022-11-03",	7:00 PM	Carolina Hurricanes	4	Tampa Bay Lightning	3	SO	19,092	3:01	
{"gameDay": "2022-11-03",	10:00 PM	Anaheim Ducks	5	Vancouver Canucks	8		18,760	2:34	
{"gameDay": "2022-11-03",	8:00 PM	Montreal Canadiens	2	Winnipeg Jets	3	OT	13,729	2:27	
{"gameDay": "2022-11-04",	7:00 PM	Buffalo Sabres	3	Carolina Hurricanes	5		18,727	2:32	
{"gameDay": "2022-11-04",	2:00 PM	Columbus Blue Jackets	3	Colorado Avalanche	6		12,882	2:40	at Nokia Arena (Tampere, FI)
{"gameDay": "2022-11-05",	2:00 PM	Colorado Avalanche	5	Columbus Blue Jackets	1		12,897	2:27	at Nokia Arena (Tampere, FI)
{"gameDay": "2022-11-05",	10:00 PM	New Jersey Devils	4	Calgary Flames	3	OT	17,386	2:38	
{"gameDay": "2022-11-05",	1:00 PM	New York Islanders	0	Detroit Red Wings	3		19,515	2:22	
{"gameDay": "2022-11-05",	4:00 PM	Dallas Stars	6	Edmonton Oilers	2		17,067	2:25	
{"gameDay": "2022-11-05",	10:30 PM	Florida Panthers	4	Los Angeles Kings	5		16,161	2:44	
{"gameDay": "2022-11-05",	7:00 PM	Vegas Golden Knights	6	Montreal Canadiens	4		21,105	2:27	
{"gameDay": "2022-11-05",	7:00 PM	Philadelphia Flyers	2	Ottawa Senators	1		16,722	2:29	
{"gameDay": "2022-11-05",	7:00 PM	Seattle Kraken	3	Pittsburgh Penguins	2		18,302	2:10	
{"gameDay": "2022-11-05",	10:30 PM	Anaheim Ducks	5	San Jose Sharks	4	SO	17,562	2:47	
{"gameDay": "2022-11-05",	7:00 PM	Buffalo Sabres	3	Tampa Bay Lightning	5		19,092	2:35	
{"gameDay": "2022-11-05",	7:00 PM	Boston Bruins	1	Toronto Maple Leafs	2		18,926	2:14	
{"gameDay": "2022-11-05",	10:00 PM	Nashville Predators	4	Vancouver Canucks	3	SO	18,855	2:46	
{"gameDay": "2022-11-05",	3:00 PM	Chicago Blackhawks	0	Winnipeg Jets	4		13,210	2:24	
{"gameDay": "2022-11-05",	7:00 PM	Arizona Coyotes	3	Washington Capitals	2		18,573	2:30	
{"gameDay": "2022-11-06",	9:00 PM	Florida Panthers	5	Anaheim Ducks	3		15,174	2:30	
{"gameDay": "2022-11-06",	5:00 PM	Toronto Maple Leafs	3	Carolina Hurricanes	1		18,463	2:23	
{"gameDay": "2022-11-06",	5:00 PM	Detroit Red Wings	3	New York Rangers	2	OT	18,006	2:33	
{"gameDay": "2022-11-07",	7:00 PM	St. Louis Blues	1	Boston Bruins	3		17,850	2:25	
{"gameDay": "2022-11-07",	7:00 PM	Calgary Flames	3	New York Islanders	4	OT	15,722	2:33	
{"gameDay": "2022-11-07",	8:00 PM	Edmonton Oilers	4	Washington Capitals	5		18,573	2:34	
{"gameDay": "2022-11-08",	7:00 PM	Arizona Coyotes	4	Buffalo Sabres	1		10,296	2:47	
{"gameDay": "2022-11-08",	7:00 PM	Montreal Canadiens	3	Detroit Red Wings	2	SO	17,033	2:38	
{"gameDay": "2022-11-08",	10:30 PM	Minnesota Wild	0	Los Angeles Kings	1		13,558	2:23	
{"gameDay": "2022-11-08",	7:00 PM	Calgary Flames	2	New Jersey Devils	3		13,096	2:32	
{"gameDay": "2022-11-08",	7:00 PM	New York Islanders	4	New York Rangers	3		18,006	2:31	
{"gameDay": "2022-11-08",	7:00 PM	Vancouver Canucks	6	Ottawa Senators	4		13,351	2:22	
{"gameDay": "2022-11-08",	7:00 PM	St. Louis Blues	1	Philadelphia Flyers	5		15,228	2:25	
{"gameDay": "2022-11-08",	10:00 PM	Nashville Predators	1	Seattle Kraken	5		17,151	2:18	
{"gameDay": "2022-11-08",	7:30 PM	Edmonton Oilers	3	Tampa Bay Lightning	2		19,092	2:40	
{"gameDay": "2022-11-08",	7:00 PM	Vegas Golden Knights	4	Toronto Maple Leafs	3	OT	18,459	2:22	
{"gameDay": "2022-11-08",	8:00 PM	Dallas Stars	1	Winnipeg Jets	5		13,847	2:19	
{"gameDay": "2022-11-09",	10:00 PM	Minnesota Wild	4	Anaheim Ducks	1		14,803	2:30	
{"gameDay": "2022-11-09",	7:00 PM	Carolina Hurricanes	0	Florida Panthers	3		13,225	2:25	
{"gameDay": "2022-11-09",	7:30 PM	Vancouver Canucks	2	Montreal Canadiens	5		21,105	2:24	
{"gameDay": "2022-11-09",	7:30 PM	Pittsburgh Penguins	4	Washington Capitals	1		18,573	2:25	
{"gameDay": "2022-11-10",	7:00 PM	Calgary Flames	1	Boston Bruins	3		17,850	2:28	
{"gameDay": "2022-11-10",	7:00 PM	Vegas Golden Knights	7	Buffalo Sabres	4		15,757	2:37	
{"gameDay": "2022-11-10",	7:00 PM	Edmonton Oilers	2	Carolina Hurricanes	7		18,118	2:22	
{"gameDay": "2022-11-10",	7:00 PM	Philadelphia Flyers	2	Columbus Blue Jackets	5		15,490	2:37	
{"gameDay": "2022-11-10",	9:00 PM	Nashville Predators	3	Colorado Avalanche	5		18,134	2:34	
{"gameDay": "2022-11-10",	7:00 PM	New York Rangers	8	Detroit Red Wings	2		18,869	2:20	
{"gameDay": "2022-11-10",	10:30 PM	Chicago Blackhawks	1	Los Angeles Kings	2	OT	16,443	2:33	
{"gameDay": "2022-11-10",	7:00 PM	Ottawa Senators	3	New Jersey Devils	4	OT	13,806	2:35	
{"gameDay": "2022-11-10",	7:30 PM	Arizona Coyotes	2	New York Islanders	0		17,255	2:28	
{"gameDay": "2022-11-10",	8:00 PM	San Jose Sharks	3	St. Louis Blues	5		18,096	2:24	
{"gameDay": "2022-11-11",	8:30 PM	San Jose Sharks	5	Dallas Stars	4		18,532	2:31	
{"gameDay": "2022-11-11",	10:00 PM	Minnesota Wild	1	Seattle Kraken	0		17,151	2:22	
{"gameDay": "2022-11-11",	7:00 PM	Pittsburgh Penguins	4	Toronto Maple Leafs	2		19,229	2:19	
{"gameDay": "2022-11-11",	7:00 PM	Tampa Bay Lightning	1	Washington Capitals	5		18,573	2:29	
{"gameDay": "2022-11-12",	10:00 PM	Chicago Blackhawks	3	Anaheim Ducks	2		15,184	2:32	
{"gameDay": "2022-11-12",	7:00 PM	Boston Bruins	3	Buffalo Sabres	1		19,070	2:28	
{"gameDay": "2022-11-12",	10:00 PM	Winnipeg Jets	2	Calgary Flames	3		18,501	2:33	
{"gameDay": "2022-11-12",	9:00 PM	Carolina Hurricanes	1	Colorado Avalanche	4		18,127	2:21	
{"gameDay": "2022-11-12",	4:00 PM	Edmonton Oilers	4	Florida Panthers	2		16,579	2:24	
{"gameDay": "2022-11-12",	10:30 PM	Detroit Red Wings	3	Los Angeles Kings	4		18,230	2:26	
{"gameDay": "2022-11-12",	7:00 PM	Pittsburgh Penguins	4	Montreal Canadiens	5	OT	21,105	2:35	
{"gameDay": "2022-11-12",	7:00 PM	Arizona Coyotes	2	New Jersey Devils	4		16,514	2:30	
{"gameDay": "2022-11-12",	8:00 PM	New York Rangers	1	Nashville Predators	2		17,169	2:25	
{"gameDay": "2022-11-12",	7:30 PM	Columbus Blue Jackets	3	New York Islanders	4	OT	17,255	2:26	
{"gameDay": "2022-11-12",	1:00 PM	Ottawa Senators	4	Philadelphia Flyers	1		16,912	2:28	
{"gameDay": "2022-11-12",	7:00 PM	Vancouver Canucks	2	Toronto Maple Leafs	3		19,497	2:18	
{"gameDay": "2022-11-12",	10:00 PM	St. Louis Blues	3	Vegas Golden Knights	2		18,343	2:28	
{"gameDay": "2022-11-13",	6:00 PM	Vancouver Canucks	2	Boston Bruins	5		17,850	2:30	
{"gameDay": "2022-11-13",	6:00 PM	San Jose Sharks	3	Minnesota Wild	2	SO	17,105	2:34	
{"gameDay": "2022-11-13",	7:00 PM	Arizona Coyotes	1	New York Rangers	4		18,006	2:25	
{"gameDay": "2022-11-13",	1:00 PM	Dallas Stars	5	Philadelphia Flyers	1		16,898	2:24	
{"gameDay": "2022-11-13",	8:00 PM	Winnipeg Jets	3	Seattle Kraken	2	OT	17,151	2:28	
{"gameDay": "2022-11-13",	7:00 PM	Washington Capitals	3	Tampa Bay Lightning	6		19,092	2:41	
{"gameDay": "2022-11-14",	8:30 PM	Los Angeles Kings	5	Calgary Flames	6		17,308	2:32	
{"gameDay": "2022-11-14",	8:30 PM	Carolina Hurricanes	3	Chicago Blackhawks	0		15,676	2:23	
{"gameDay": "2022-11-14",	9:00 PM	St. Louis Blues	3	Colorado Avalanche	2		18,104	2:30	
{"gameDay": "2022-11-14",	5:30 PM	New York Islanders	4	Ottawa Senators	2		13,408	2:28	
{"gameDay": "2022-11-15",	10:00 PM	Detroit Red Wings	2	Anaheim Ducks	3	OT	15,198	2:34	
{"gameDay": "2022-11-15",	7:00 PM	Vancouver Canucks	5	Buffalo Sabres	4		11,130	2:27	
{"gameDay": "2022-11-15",	7:30 PM	Philadelphia Flyers	4	Columbus Blue Jackets	5	OT	15,713	2:34	
{"gameDay": "2022-11-15",	7:00 PM	Washington Capitals	2	Florida Panthers	5		13,813	2:29	
{"gameDay": "2022-11-15",	7:00 PM	New Jersey Devils	5	Montreal Canadiens	1		20,753	2:32	
{"gameDay": "2022-11-15",	8:00 PM	Minnesota Wild	1	Nashville Predators	2		17,159	2:32	
{"gameDay": "2022-11-15",	7:00 PM	Toronto Maple Leafs	5	Pittsburgh Penguins	2		17,035	2:21	
{"gameDay": "2022-11-15",	7:00 PM	Dallas Stars	4	Tampa Bay Lightning	5	OT	19,092	2:49	
{"gameDay": "2022-11-15",	10:00 PM	San Jose Sharks	5	Vegas Golden Knights	2		17,899	2:25	
{"gameDay": "2022-11-16",	7:30 PM	St. Louis Blues	5	Chicago Blackhawks	2		16,284	2:18	
{"gameDay": "2022-11-16",	10:00 PM	Los Angeles Kings	3	Edmonton Oilers	1		16,943	2:28	
{"gameDay": "2022-11-16",	7:00 PM	Buffalo Sabres	1	Ottawa Senators	4		13,558	2:32	
{"gameDay": "2022-11-17",	7:00 PM	Philadelphia Flyers	1	Boston Bruins	4		17,850	2:30	
{"gameDay": "2022-11-17",	7:00 PM	Colorado Avalanche	3	Carolina Hurricanes	2	OT	18,680	2:33	
{"gameDay": "2022-11-17",	7:00 PM	Montreal Canadiens	4	Columbus Blue Jackets	6		14,914	2:36	
{"gameDay": "2022-11-17",	7:00 PM	Dallas Stars	6	Florida Panthers	4		14,428	2:38	
{"gameDay": "2022-11-17",	8:00 PM	Pittsburgh Penguins	6	Minnesota Wild	4		18,224	2:28	
{"gameDay": "2022-11-17",	8:00 PM	New York Islanders	4	Nashville Predators	5		17,159	2:25	
{"gameDay": "2022-11-17",	10:00 PM	New York Rangers	2	Seattle Kraken	3	OT	17,151	2:28	
{"gameDay": "2022-11-17",	10:30 PM	Detroit Red Wings	7	San Jose Sharks	4		14,134	2:19	
{"gameDay": "2022-11-17",	8:00 PM	Washington Capitals	4	St. Louis Blues	5	SO	18,096	2:50	
{"gameDay": "2022-11-17",	7:00 PM	Calgary Flames	1	Tampa Bay Lightning	4		19,092	2:38	
{"gameDay": "2022-11-17",	7:00 PM	New Jersey Devils	3	Toronto Maple Leafs	2	OT	18,189	2:22	
{"gameDay": "2022-11-17",	10:00 PM	Arizona Coyotes	1	Vegas Golden Knights	4		17,708	2:27	
{"gameDay": "2022-11-17",	8:00 PM	Anaheim Ducks	2	Winnipeg Jets	3		14,278	2:24	
{"gameDay": "2022-11-18",	10:00 PM	Los Angeles Kings	1	Vancouver Canucks	4		18,841	2:24	
{"gameDay": "2022-11-19",	7:00 PM	Chicago Blackhawks	1	Boston Bruins	6		17,850	2:21	
{"gameDay": "2022-11-19",	7:00 PM	Detroit Red Wings	6	Columbus Blue Jackets	1		18,693	2:25	
{"gameDay": "2022-11-19",	8:00 PM	New York Islanders	2	Dallas Stars	5		18,532	2:25	
{"gameDay": "2022-11-19",	10:00 PM	Vegas Golden Knights	3	Edmonton Oilers	4	OT	18,347	2:20	
{"gameDay": "2022-11-19",	4:00 PM	Calgary Flames	5	Florida Panthers	4	SO	15,842	2:48	
{"gameDay": "2022-11-19",	8:00 PM	Carolina Hurricanes	1	Minnesota Wild	2	OT	18,278	2:31	
{"gameDay": "2022-11-19",	7:00 PM	Philadelphia Flyers	4	Montreal Canadiens	5	SO	21,105	2:41	
{"gameDay": "2022-11-19",	8:00 PM	Tampa Bay Lightning	3	Nashville Predators	2	OT	17,444	2:32	
{"gameDay": "2022-11-19",	1:00 PM	New Jersey Devils	5	Ottawa Senators	1		18,881	2:33	
{"gameDay": "2022-11-19",	10:00 PM	Los Angeles Kings	2	Seattle Kraken	3	OT	17,151	2:21	
{"gameDay": "2022-11-19",	10:30 PM	New York Rangers	2	San Jose Sharks	1		17,562	2:28	
{"gameDay": "2022-11-19",	8:00 PM	Anaheim Ducks	2	St. Louis Blues	6		18,096	2:27	
{"gameDay": "2022-11-19",	7:00 PM	Buffalo Sabres	2	Toronto Maple Leafs	5		18,645	2:26	
{"gameDay": "2022-11-19",	7:00 PM	Pittsburgh Penguins	3	Winnipeg Jets	0		15,325	2:26	
{"gameDay": "2022-11-19",	7:00 PM	Colorado Avalanche	4	Washington Capitals	0		18,573	2:26	
{"gameDay": "2022-11-20",	6:00 PM	Florida Panthers	3	Columbus Blue Jackets	5		15,643	2:30	
{"gameDay": "2022-11-20",	7:00 PM	Pittsburgh Penguins	5	Chicago Blackhawks	3		21,182	2:30	
{"gameDay": "2022-11-21",	8:30 PM	Colorado Avalanche	3	Dallas Stars	2	SO	18,532	2:44	
{"gameDay": "2022-11-21",	7:00 PM	Edmonton Oilers	2	New Jersey Devils	5		16,514	2:23	
{"gameDay": "2022-11-21",	8:00 PM	Arizona Coyotes	3	Nashville Predators	4	SO	17,159	2:46	
{"gameDay": "2022-11-21",	7:00 PM	Calgary Flames	5	Philadelphia Flyers	2		17,896	2:21	
{"gameDay": "2022-11-21",	10:30 PM	Ottawa Senators	1	San Jose Sharks	5		11,295	2:26	
{"gameDay": "2022-11-21",	8:00 PM	Anaheim Ducks	1	St. Louis Blues	3		18,096	2:21	
{"gameDay": "2022-11-21",	7:00 PM	Boston Bruins	5	Tampa Bay Lightning	3		19,092	2:29	
{"gameDay": "2022-11-21",	7:30 PM	New York Islanders	3	Toronto Maple Leafs	2	OT	18,494	2:32	
{"gameDay": "2022-11-21",	10:30 PM	Vegas Golden Knights	5	Vancouver Canucks	4		18,558	2:37	
{"gameDay": "2022-11-21",	7:30 PM	Carolina Hurricanes	3	Winnipeg Jets	4	OT	13,346	2:19	
{"gameDay": "2022-11-22",	10:30 PM	New York Rangers	5	Los Angeles Kings	3		18,230	2:27	
{"gameDay": "2022-11-22",	7:00 PM	Buffalo Sabres	7	Montreal Canadiens	2		20,984	2:26	
{"gameDay": "2022-11-23",	10:00 PM	New York Rangers	2	Anaheim Ducks	3		13,759	2:21	
{"gameDay": "2022-11-23",	7:00 PM	St. Louis Blues	2	Buffalo Sabres	6		17,302	2:20	
{"gameDay": "2022-11-23",	7:00 PM	Arizona Coyotes	4	Carolina Hurricanes	0		18,775	2:27	
{"gameDay": "2022-11-23",	7:00 PM	Montreal Canadiens	3	Columbus Blue Jackets	1		14,197	2:32	
{"gameDay": "2022-11-23",	10:00 PM	Vancouver Canucks	4	Colorado Avalanche	3		18,132	2:38	
{"gameDay": "2022-11-23",	8:30 PM	Chicago Blackhawks	4	Dallas Stars	6		18,532	2:29	
{"gameDay": "2022-11-23",	7:00 PM	Nashville Predators	0	Detroit Red Wings	3		19,515	2:19	
{"gameDay": "2022-11-23",	7:00 PM	Boston Bruins	2	Florida Panthers	5		17,511	2:37	
{"gameDay": "2022-11-23",	7:00 PM	Winnipeg Jets	1	Minnesota Wild	6		17,450	2:33	
{"gameDay": "2022-11-23",	7:00 PM	Toronto Maple Leafs	2	New Jersey Devils	1		16,514	2:42	
{"gameDay": "2022-11-23",	7:30 PM	Edmonton Oilers	0	New York Islanders	3		17,255	2:34	
{"gameDay": "2022-11-23",	7:00 PM	Calgary Flames	1	Pittsburgh Penguins	2	SO	18,149	2:37	
{"gameDay": "2022-11-23",	10:00 PM	San Jose Sharks	5	Seattle Kraken	8		17,151	2:25	
{"gameDay": "2022-11-23",	10:00 PM	Ottawa Senators	1	Vegas Golden Knights	4		17,955	2:34	
{"gameDay": "2022-11-23",	7:30 PM	Philadelphia Flyers	2	Washington Capitals	3	OT	18,573	2:33	
{"gameDay": "2022-11-25",	3:00 PM	Ottawa Senators	5	Anaheim Ducks	1		14,278	2:36	
{"gameDay": "2022-11-25",	1:00 PM	Carolina Hurricanes	2	Boston Bruins	3	OT	17,850	2:48	
{"gameDay": "2022-11-25",	8:00 PM	New Jersey Devils	3	Buffalo Sabres	1		16,727	2:32	
{"gameDay": "2022-11-25",	8:00 PM	New York Islanders	3	Columbus Blue Jackets	2		17,286	2:29	
{"gameDay": "2022-11-25",	2:00 PM	Montreal Canadiens	3	Chicago Blackhawks	2	SO	16,159	2:32	
{"gameDay": "2022-11-25",	8:30 PM	Winnipeg Jets	5	Dallas Stars	4	OT	18,532	2:49	
{"gameDay": "2022-11-25",	8:00 PM	Arizona Coyotes	3	Detroit Red Wings	4	SO	19,515	2:41	
{"gameDay": "2022-11-25",	2:00 PM	Toronto Maple Leafs	4	Minnesota Wild	3		18,997	2:28	
{"gameDay": "2022-11-25",	5:30 PM	Pittsburgh Penguins	4	Philadelphia Flyers	1		19,309	2:22	
{"gameDay": "2022-11-25",	10:30 PM	Los Angeles Kings	5	San Jose Sharks	2		17,562	2:29	
{"gameDay": "2022-11-25",	8:00 PM	St. Louis Blues	2	Tampa Bay Lightning	5		19,092	2:22	
{"gameDay": "2022-11-25",	8:00 PM	Seattle Kraken	4	Vegas Golden Knights	2		18,119	2:22	
{"gameDay": "2022-11-25",	2:00 PM	Calgary Flames	0	Washington Capitals	3		18,573	2:25	
{"gameDay": "2022-11-26",	4:00 PM	Calgary Flames	2	Carolina Hurricanes	3		18,845	2:29	
{"gameDay": "2022-11-26",	9:00 PM	Dallas Stars	1	Colorado Avalanche	4		18,129	2:40	
{"gameDay": "2022-11-26",	6:30 PM	St. Louis Blues	5	Florida Panthers	4	OT	15,649	2:26	
{"gameDay": "2022-11-26",	7:00 PM	Washington Capitals	1	New Jersey Devils	5		16,514	2:27	
{"gameDay": "2022-11-26",	7:30 PM	Philadelphia Flyers	2	New York Islanders	5		17,255	2:18	
{"gameDay": "2022-11-26",	1:00 PM	Edmonton Oilers	4	New York Rangers	3		18,006	2:34	
{"gameDay": "2022-11-26",	7:00 PM	Toronto Maple Leafs	4	Pittsburgh Penguins	1		18,166	2:25	
{"gameDay": "2022-11-26",	10:00 PM	Vancouver Canucks	5	Vegas Golden Knights	1		18,004	2:30	
{"gameDay": "2022-11-27",	8:00 PM	Seattle Kraken	5	Anaheim Ducks	4		14,324	2:25	
{"gameDay": "2022-11-27",	7:00 PM	Winnipeg Jets	7	Chicago Blackhawks	2		17,611	2:23	
{"gameDay": "2022-11-27",	10:30 PM	Ottawa Senators	3	Los Angeles Kings	2	OT	15,136	2:37	
{"gameDay": "2022-11-27",	2:00 PM	Arizona Coyotes	3	Minnesota Wild	4		17,745	2:31	
{"gameDay": "2022-11-27",	8:00 PM	Vancouver Canucks	4	San Jose Sharks	3	OT	11,307	2:21	
{"gameDay": "2022-11-28",	7:00 PM	Tampa Bay Lightning	6	Buffalo Sabres	5	OT	11,766	2:37	
{"gameDay": "2022-11-28",	7:00 PM	Vegas Golden Knights	3	Columbus Blue Jackets	2	SO	13,771	2:44	
{"gameDay": "2022-11-28",	7:00 PM	Toronto Maple Leafs	4	Detroit Red Wings	2		18,277	2:24	
{"gameDay": "2022-11-28",	9:30 PM	Florida Panthers	3	Edmonton Oilers	4	OT	17,775	2:36	
{"gameDay": "2022-11-28",	7:00 PM	New Jersey Devils	5	New York Rangers	3		17,928	2:24	
{"gameDay": "2022-11-28",	8:00 PM	Dallas Stars	4	St. Louis Blues	1		18,096	2:13	
{"gameDay": "2022-11-29",	7:00 PM	Tampa Bay Lightning	1	Boston Bruins	3		17,850	2:26	
{"gameDay": "2022-11-29",	9:00 PM	Florida Panthers	2	Calgary Flames	6		17,806	2:26	
{"gameDay": "2022-11-29",	10:30 PM	Seattle Kraken	9	Los Angeles Kings	8	OT	13,215	2:31	
{"gameDay": "2022-11-29",	7:00 PM	San Jose Sharks	4	Montreal Canadiens	0		21,105	2:22	
{"gameDay": "2022-11-29",	8:00 PM	Anaheim Ducks	1	Nashville Predators	2	OT	17,159	2:28	
{"gameDay": "2022-11-29",	7:30 PM	New York Islanders	1	Philadelphia Flyers	3		18,143	2:27	
{"gameDay": "2022-11-29",	7:00 PM	Carolina Hurricanes	3	Pittsburgh Penguins	2	OT	15,942	2:26	
{"gameDay": "2022-11-29",	10:00 PM	Washington Capitals	5	Vancouver Canucks	1		18,179	2:18	
{"gameDay": "2022-11-29",	8:00 PM	Colorado Avalanche	0	Winnipeg Jets	5		13,510	2:24	
{"gameDay": "2022-11-30",	9:30 PM	Edmonton Oilers	5	Chicago Blackhawks	4		15,397	2:34	
{"gameDay": "2022-11-30",	7:00 PM	Buffalo Sabres	5	Detroit Red Wings	4	SO	17,117	2:47	
{"gameDay": "2022-11-30",	7:00 PM	New York Rangers	3	Ottawa Senators	1		14,654	2:23	
{"gameDay": "2022-11-30",	7:00 PM	San Jose Sharks	1	Toronto Maple Leafs	3		18,679	2:21	
{"gameDay": "2022-12-01",	7:00 PM	Colorado Avalanche	6	Buffalo Sabres	4		12,805	2:32	
{"gameDay": "2022-12-01",	9:00 PM	Montreal Canadiens	2	Calgary Flames	1		18,106	2:33	
{"gameDay": "2022-12-01",	8:30 PM	Anaheim Ducks	0	Dallas Stars	5		18,012	2:27	
{"gameDay": "2022-12-01",	10:30 PM	Arizona Coyotes	3	Los Angeles Kings	5		13,764	2:25	
{"gameDay": "2022-12-01",	8:00 PM	Edmonton Oilers	3	Minnesota Wild	5		17,651	2:23	
{"gameDay": "2022-12-01",	7:00 PM	Nashville Predators	4	New Jersey Devils	3	OT	14,071	2:26	
{"gameDay": "2022-12-01",	7:00 PM	Tampa Bay Lightning	4	Philadelphia Flyers	1		17,867	2:20	
{"gameDay": "2022-12-01",	7:00 PM	Vegas Golden Knights	3	Pittsburgh Penguins	4		15,895	2:28	
{"gameDay": "2022-12-01",	10:00 PM	Washington Capitals	2	Seattle Kraken	3	OT	17,151	2:25	
{"gameDay": "2022-12-01",	8:00 PM	Carolina Hurricanes	6	St. Louis Blues	4		18,096	2:24	
{"gameDay": "2022-12-01",	10:00 PM	Florida Panthers	5	Vancouver Canucks	1		18,052	2:31	
{"gameDay": "2022-12-02",	7:30 PM	Nashville Predators	4	New York Islanders	1		16,263	2:30	
{"gameDay": "2022-12-02",	7:00 PM	Ottawa Senators	3	New York Rangers	2	OT	18,006	2:45	
{"gameDay": "2022-12-02",	8:00 PM	Columbus Blue Jackets	4	Winnipeg Jets	1		13,240	2:31	
{"gameDay": "2022-12-03",	7:00 PM	Colorado Avalanche	1	Boston Bruins	5		17,850	2:40	
{"gameDay": "2022-12-03",	10:00 PM	Washington Capitals	2	Calgary Flames	5		18,698	2:30	
{"gameDay": "2022-12-03",	7:00 PM	Vegas Golden Knights	4	Detroit Red Wings	1		19,515	2:24	
{"gameDay": "2022-12-03",	7:00 PM	Montreal Canadiens	3	Edmonton Oilers	5		18,347	2:25	
{"gameDay": "2022-12-03",	10:30 PM	Carolina Hurricanes	4	Los Angeles Kings	2		16,067	2:27	
{"gameDay": "2022-12-03",	2:00 PM	Anaheim Ducks	4	Minnesota Wild	5	SO	17,822	2:56	
{"gameDay": "2022-12-03",	7:30 PM	Chicago Blackhawks	5	New York Rangers	2		18,006	2:29	
{"gameDay": "2022-12-03",	7:00 PM	San Jose Sharks	2	Ottawa Senators	5		17,101	2:24	
{"gameDay": "2022-12-03",	7:00 PM	New Jersey Devils	3	Philadelphia Flyers	2		18,427	2:23	
{"gameDay": "2022-12-03",	7:00 PM	St. Louis Blues	2	Pittsburgh Penguins	6		17,330	2:28	
{"gameDay": "2022-12-03",	10:00 PM	Florida Panthers	5	Seattle Kraken	1		17,151	2:24	
{"gameDay": "2022-12-03",	7:00 PM	Toronto Maple Leafs	3	Tampa Bay Lightning	4	OT	19,092	2:39	
{"gameDay": "2022-12-03",	10:00 PM	Arizona Coyotes	2	Vancouver Canucks	3	OT	18,516	2:34	
{"gameDay": "2022-12-04",	7:00 PM	San Jose Sharks	3	Buffalo Sabres	6		13,655	2:22	
{"gameDay": "2022-12-04",	6:00 PM	Detroit Red Wings	4	Columbus Blue Jackets	2		16,087	2:28	
{"gameDay": "2022-12-04",	3:00 PM	Minnesota Wild	6	Dallas Stars	5	SO	18,120	2:38	
{"gameDay": "2022-12-04",	7:30 PM	Chicago Blackhawks	0	New York Islanders	3		16,124	2:32	
{"gameDay": "2022-12-04",	3:00 PM	Anaheim Ducks	2	Winnipeg Jets	5		13,444	2:30	
{"gameDay": "2022-12-05",	7:00 PM	Vegas Golden Knights	4	Boston Bruins	3	SO	17,850	2:46	
{"gameDay": "2022-12-05",	9:00 PM	Arizona Coyotes	2	Calgary Flames	3		16,899	2:23	
{"gameDay": "2022-12-05",	8:30 PM	Washington Capitals	3	Edmonton Oilers	2		17,264	2:24	
{"gameDay": "2022-12-05",	7:00 PM	St. Louis Blues	4	New York Rangers	6		16,682	2:30	
{"gameDay": "2022-12-05",	7:00 PM	Colorado Avalanche	3	Philadelphia Flyers	5		18,361	2:21	
{"gameDay": "2022-12-05",	10:30 PM	Montreal Canadiens	6	Vancouver Canucks	7	OT	18,420	2:31	
{"gameDay": "2022-12-06",	10:00 PM	Carolina Hurricanes	3	Anaheim Ducks	4	OT	14,576	2:29	
{"gameDay": "2022-12-06",	8:30 PM	Toronto Maple Leafs	4	Dallas Stars	0		18,021	2:22	
{"gameDay": "2022-12-06",	7:00 PM	Chicago Blackhawks	0	New Jersey Devils	3		13,071	2:18	
{"gameDay": "2022-12-06",	7:30 PM	St. Louis Blues	7	New York Islanders	4		16,044	2:26	
{"gameDay": "2022-12-06",	7:00 PM	Los Angeles Kings	5	Ottawa Senators	2		13,459	2:25	
{"gameDay": "2022-12-06",	7:00 PM	Columbus Blue Jackets	1	Pittsburgh Penguins	4		15,867	2:33	
{"gameDay": "2022-12-06",	10:00 PM	Montreal Canadiens	4	Seattle Kraken	2		17,151	2:28	
{"gameDay": "2022-12-06",	7:00 PM	Detroit Red Wings	4	Tampa Bay Lightning	2		19,092	2:23	
{"gameDay": "2022-12-06",	8:00 PM	Florida Panthers	2	Winnipeg Jets	5		13,426	2:26	
{"gameDay": "2022-12-07",	7:30 PM	Buffalo Sabres	9	Columbus Blue Jackets	4		15,659	2:25	
{"gameDay": "2022-12-07",	8:00 PM	Minnesota Wild	3	Calgary Flames	5		17,562	2:31	
{"gameDay": "2022-12-07",	9:00 PM	Boston Bruins	4	Colorado Avalanche	0		18,119	2:29	
{"gameDay": "2022-12-07",	9:30 PM	Arizona Coyotes	2	Edmonton Oilers	8		16,633	2:25	
{"gameDay": "2022-12-07",	7:00 PM	Washington Capitals	4	Philadelphia Flyers	1		16,826	2:25	
{"gameDay": "2022-12-07",	10:30 PM	Vancouver Canucks	6	San Jose Sharks	5	OT	11,492	2:30	
{"gameDay": "2022-12-07",	10:00 PM	New York Rangers	5	Vegas Golden Knights	1		17,939	2:33	
{"gameDay": "2022-12-08",	8:30 PM	Ottawa Senators	3	Dallas Stars	4	OT	18,023	2:40	
{"gameDay": "2022-12-08",	7:30 PM	Detroit Red Wings	1	Florida Panthers	5		14,961	2:27	
{"gameDay": "2022-12-08",	8:00 PM	Winnipeg Jets	5	St. Louis Blues	2		18,096	2:19	
{"gameDay": "2022-12-08",	7:00 PM	Nashville Predators	2	Tampa Bay Lightning	5		19,092	2:36	
{"gameDay": "2022-12-08",	7:00 PM	Los Angeles Kings	0	Toronto Maple Leafs	5		18,567	2:26	
{"gameDay": "2022-12-09",	10:00 PM	San Jose Sharks	6	Anaheim Ducks	1		14,487	2:28	
{"gameDay": "2022-12-09",	9:30 PM	Boston Bruins	3	Arizona Coyotes	4		4,600	2:28	
{"gameDay": "2022-12-09",	7:00 PM	Pittsburgh Penguins	4	Buffalo Sabres	3	OT	17,205	2:29	
{"gameDay": "2022-12-09",	7:00 PM	Calgary Flames	1	Columbus Blue Jackets	3		16,902	2:28	
{"gameDay": "2022-12-09",	8:30 PM	Winnipeg Jets	3	Chicago Blackhawks	1		17,847	2:36	
{"gameDay": "2022-12-09",	9:00 PM	New York Rangers	2	Colorado Avalanche	1	SO	18,112	2:30	
{"gameDay": "2022-12-09",	9:00 PM	Minnesota Wild	2	Edmonton Oilers	5		17,589	2:45	
{"gameDay": "2022-12-09",	7:00 PM	New York Islanders	6	New Jersey Devils	4		16,514	2:33	
{"gameDay": "2022-12-09",	10:00 PM	Philadelphia Flyers	1	Vegas Golden Knights	2	OT	17,767	2:35	
{"gameDay": "2022-12-09",	7:00 PM	Seattle Kraken	1	Washington Capitals	4		18,573	2:25	
{"gameDay": "2022-12-10",	2:00 PM	Detroit Red Wings	2	Dallas Stars	3	OT	18,532	2:31	
{"gameDay": "2022-12-10",	7:00 PM	Los Angeles Kings	4	Montreal Canadiens	2		21,105	2:24	
{"gameDay": "2022-12-10",	1:30 PM	Ottawa Senators	3	Nashville Predators	2		17,414	2:34	
{"gameDay": "2022-12-10",	7:30 PM	Carolina Hurricanes	3	New York Islanders	0		17,255	2:11	
{"gameDay": "2022-12-10",	7:00 PM	Buffalo Sabres	1	Pittsburgh Penguins	3		18,414	2:22	
{"gameDay": "2022-12-10",	4:30 PM	Florida Panthers	1	Tampa Bay Lightning	4		19,092	2:26	
{"gameDay": "2022-12-10",	7:00 PM	Calgary Flames	4	Toronto Maple Leafs	5	OT	18,857	2:37	
{"gameDay": "2022-12-10",	10:00 PM	Minnesota Wild	3	Vancouver Canucks	0		18,526	2:21	
{"gameDay": "2022-12-11",	7:00 PM	Philadelphia Flyers	4	Arizona Coyotes	5	OT	4,600	2:43	
{"gameDay": "2022-12-11",	6:00 PM	Los Angeles Kings	5	Columbus Blue Jackets	6	OT	14,560	2:30	
{"gameDay": "2022-12-11",	6:00 PM	Seattle Kraken	5	Florida Panthers	2		15,625	2:28	
{"gameDay": "2022-12-11",	3:00 PM	Colorado Avalanche	3	St. Louis Blues	2	OT	18,096	2:33	
{"gameDay": "2022-12-11",	8:00 PM	Boston Bruins	3	Vegas Golden Knights	1		18,114	2:28	
{"gameDay": "2022-12-11",	7:00 PM	Washington Capitals	5	Winnipeg Jets	2		14,096	2:22	
{"gameDay": "2022-12-12",	8:00 PM	Edmonton Oilers	1	Minnesota Wild	2		17,707	2:30	
{"gameDay": "2022-12-12",	7:00 PM	Calgary Flames	1	Montreal Canadiens	2	SO	21,105	2:55	
{"gameDay": "2022-12-12",	7:00 PM	New Jersey Devils	3	New York Rangers	4	OT	18,006	2:27	
{"gameDay": "2022-12-12",	7:30 PM	Anaheim Ducks	0	Ottawa Senators	3		14,204	2:31	
{"gameDay": "2022-12-12",	7:00 PM	Dallas Stars	1	Pittsburgh Penguins	2		17,147	2:23	
{"gameDay": "2022-12-12",	8:00 PM	Nashville Predators	0	St. Louis Blues	1	OT	18,096	2:24	
{"gameDay": "2022-12-13",	7:00 PM	New York Islanders	3	Boston Bruins	4	SO	17,850	2:42	
{"gameDay": "2022-12-13",	7:00 PM	Los Angeles Kings	0	Buffalo Sabres	6		12,873	2:29	
{"gameDay": "2022-12-13",	9:00 PM	Washington Capitals	7	Chicago Blackhawks	3		16,181	2:19	
{"gameDay": "2022-12-13",	9:00 PM	Philadelphia Flyers	2	Colorado Avalanche	3		18,082	2:26	
{"gameDay": "2022-12-13",	7:00 PM	Carolina Hurricanes	1	Detroit Red Wings	0		19,515	2:27	
{"gameDay": "2022-12-13",	7:00 PM	Columbus Blue Jackets	0	Florida Panthers	4		15,819	2:21	
{"gameDay": "2022-12-13",	7:00 PM	Dallas Stars	4	New Jersey Devils	1		13,114	2:26	
{"gameDay": "2022-12-13",	8:00 PM	Edmonton Oilers	6	Nashville Predators	3		17,159	2:28	
{"gameDay": "2022-12-13",	10:30 PM	Arizona Coyotes	2	San Jose Sharks	3		10,462	2:22	
{"gameDay": "2022-12-13",	7:00 PM	Seattle Kraken	2	Tampa Bay Lightning	6		19,092	2:34	
{"gameDay": "2022-12-13",	7:00 PM	Anaheim Ducks	0	Toronto Maple Leafs	7		18,477	2:32	
{"gameDay": "2022-12-13",	8:00 PM	Vegas Golden Knights	6	Winnipeg Jets	5		13,102	2:30	
{"gameDay": "2022-12-14",	10:00 PM	Vancouver Canucks	4	Calgary Flames	3	SO	17,552	2:35	
{"gameDay": "2022-12-14",	7:30 PM	Detroit Red Wings	1	Minnesota Wild	4		18,324	2:23	
{"gameDay": "2022-12-14",	7:00 PM	Montreal Canadiens	2	Ottawa Senators	3		19,567	2:23	
{"gameDay": "2022-12-15",	7:00 PM	Los Angeles Kings	3	Boston Bruins	2	SO	17,850	2:45	
{"gameDay": "2022-12-15",	7:00 PM	Seattle Kraken	2	Carolina Hurricanes	3		18,680	2:23	
{"gameDay": "2022-12-15",	8:30 PM	Vegas Golden Knights	4	Chicago Blackhawks	1		15,911	2:12	
{"gameDay": "2022-12-15",	9:00 PM	Buffalo Sabres	4	Colorado Avalanche	2		18,103	2:32	
{"gameDay": "2022-12-15",	9:00 PM	St. Louis Blues	4	Edmonton Oilers	3	SO	17,550	2:40	
{"gameDay": "2022-12-15",	7:00 PM	Pittsburgh Penguins	4	Florida Panthers	2		14,538	2:33	
{"gameDay": "2022-12-15",	7:00 PM	Anaheim Ducks	5	Montreal Canadiens	2		21,105	2:26	
{"gameDay": "2022-12-15",	7:00 PM	Philadelphia Flyers	2	New Jersey Devils	1		14,137	2:26	
{"gameDay": "2022-12-15",	7:00 PM	Toronto Maple Leafs	1	New York Rangers	3		18,006	2:20	
{"gameDay": "2022-12-15",	7:00 PM	Columbus Blue Jackets	1	Tampa Bay Lightning	4		19,092	2:25	
{"gameDay": "2022-12-15",	8:00 PM	Nashville Predators	1	Winnipeg Jets	2	OT	13,949	2:31	
{"gameDay": "2022-12-15",	7:00 PM	Dallas Stars	2	Washington Capitals	1		18,573	2:31	
{"gameDay": "2022-12-16",	9:30 PM	New York Islanders	4	Arizona Coyotes	5		4,600	2:39	
{"gameDay": "2022-12-16",	9:00 PM	St. Louis Blues	5	Calgary Flames	2		18,001	2:26	
{"gameDay": "2022-12-16",	8:00 PM	Chicago Blackhawks	1	Minnesota Wild	4		18,501	2:25	
{"gameDay": "2022-12-17",	9:00 PM	Buffalo Sabres	5	Arizona Coyotes	2		4,600	2:25	
{"gameDay": "2022-12-17",	1:00 PM	Columbus Blue Jackets	2	Boston Bruins	4		17,850	2:29	
{"gameDay": "2022-12-17",	7:00 PM	Dallas Stars	4	Carolina Hurricanes	5	OT	18,680	2:42	
{"gameDay": "2022-12-17",	9:00 PM	Nashville Predators	1	Colorado Avalanche	3		18,131	2:22	
{"gameDay": "2022-12-17",	1:00 PM	Ottawa Senators	6	Detroit Red Wings	3		19,515	2:25	
{"gameDay": "2022-12-17",	4:00 PM	Anaheim Ducks	4	Edmonton Oilers	3		18,296	2:37	
{"gameDay": "2022-12-17",	10:30 PM	San Jose Sharks	2	Los Angeles Kings	3	SO	18,230	2:39	
{"gameDay": "2022-12-17",	7:00 PM	Tampa Bay Lightning	5	Montreal Canadiens	1		21,105	2:23	
{"gameDay": "2022-12-17",	7:30 PM	Florida Panthers	4	New Jersey Devils	2		15,082	2:29	
{"gameDay": "2022-12-17",	7:00 PM	New York Rangers	6	Philadelphia Flyers	3		18,340	2:26	
{"gameDay": "2022-12-17",	10:00 PM	Winnipeg Jets	5	Vancouver Canucks	1		18,487	2:20	
{"gameDay": "2022-12-17",	10:00 PM	New York Islanders	5	Vegas Golden Knights	2		18,007	2:28	
{"gameDay": "2022-12-17",	7:00 PM	Toronto Maple Leafs	2	Washington Capitals	5		18,573	2:20	
{"gameDay": "2022-12-18",	5:00 PM	Pittsburgh Penguins	2	Carolina Hurricanes	3		18,117	2:22	
{"gameDay": "2022-12-18",	7:30 PM	New York Rangers	7	Chicago Blackhawks	1		17,365	2:17	
{"gameDay": "2022-12-18",	2:00 PM	Ottawa Senators	2	Minnesota Wild	4		18,213	2:22	
{"gameDay": "2022-12-18",	8:00 PM	Winnipeg Jets	2	Seattle Kraken	3		17,151	2:22	
{"gameDay": "2022-12-18",	10:00 PM	Calgary Flames	5	San Jose Sharks	2		14,207	2:34	
{"gameDay": "2022-12-19",	10:00 PM	Montreal Canadiens	3	Arizona Coyotes	2	OT	4,600	2:28	
{"gameDay": "2022-12-19",	7:00 PM	Florida Panthers	3	Boston Bruins	7		17,850	2:32	
{"gameDay": "2022-12-19",	7:00 PM	Dallas Stars	2	Columbus Blue Jackets	1		16,402	2:22	
{"gameDay": "2022-12-19",	9:00 PM	New York Islanders	0	Colorado Avalanche	1	SO	18,110	2:41	
{"gameDay": "2022-12-19",	8:00 PM	Edmonton Oilers	3	Nashville Predators	4	OT	17,558	2:23	
{"gameDay": "2022-12-19",	10:30 PM	St. Louis Blues	5	Vancouver Canucks	1		18,692	2:16	
{"gameDay": "2022-12-19",	10:00 PM	Buffalo Sabres	3	Vegas Golden Knights	2		17,808	2:35	
{"gameDay": "2022-12-19",	7:00 PM	Detroit Red Wings	3	Washington Capitals	4	OT	18,573	2:33	
{"gameDay": "2022-12-20",	7:00 PM	New Jersey Devils	1	Carolina Hurricanes	4		18,680	2:26	
{"gameDay": "2022-12-20",	10:30 PM	Anaheim Ducks	1	Los Angeles Kings	4		18,230	2:26	
{"gameDay": "2022-12-20",	7:00 PM	Columbus Blue Jackets	3	Philadelphia Flyers	5		19,432	2:22	
{"gameDay": "2022-12-20",	7:00 PM	New York Rangers	2	Pittsburgh Penguins	3		18,005	2:27	
{"gameDay": "2022-12-20",	10:00 PM	St. Louis Blues	2	Seattle Kraken	5		17,151	2:20	
{"gameDay": "2022-12-20",	10:30 PM	Calgary Flames	7	San Jose Sharks	3		10,431	2:28	
{"gameDay": "2022-12-20",	7:00 PM	Tampa Bay Lightning	1	Toronto Maple Leafs	4		18,962	2:22	
{"gameDay": "2022-12-20",	8:00 PM	Ottawa Senators	1	Winnipeg Jets	5		14,277	2:19	
{"gameDay": "2022-12-21",	10:00 PM	Minnesota Wild	4	Anaheim Ducks	1		14,961	2:28	
{"gameDay": "2022-12-21",	8:30 PM	Nashville Predators	4	Chicago Blackhawks	2		15,239	2:20	
{"gameDay": "2022-12-21",	8:00 PM	Montreal Canadiens	1	Colorado Avalanche	2	OT	18,091	2:27	
{"gameDay": "2022-12-21",	9:30 PM	Edmonton Oilers	6	Dallas Stars	3		18,532	2:27	
{"gameDay": "2022-12-21",	7:00 PM	Tampa Bay Lightning	4	Detroit Red Wings	7		19,515	2:33	
{"gameDay": "2022-12-21",	7:00 PM	New Jersey Devils	4	Florida Panthers	2		17,073	2:30	
{"gameDay": "2022-12-21",	10:00 PM	Arizona Coyotes	2	Vegas Golden Knights	5		17,711	2:27	
{"gameDay": "2022-12-22",	7:00 PM	Winnipeg Jets	2	Boston Bruins	3		17,850	2:25	
{"gameDay": "2022-12-22",	10:30 PM	Calgary Flames	3	Los Angeles Kings	4	OT	16,731	2:27	
{"gameDay": "2022-12-22",	7:00 PM	New York Islanders	3	New York Rangers	5		18,006	2:26	
{"gameDay": "2022-12-22",	7:00 PM	Washington Capitals	3	Ottawa Senators	2	OT	17,231	2:32	
{"gameDay": "2022-12-22",	7:00 PM	Carolina Hurricanes	4	Pittsburgh Penguins	3	OT	18,075	2:34	
{"gameDay": "2022-12-22",	10:30 PM	Minnesota Wild	2	San Jose Sharks	5		13,128	2:28	
{"gameDay": "2022-12-22",	2:00 PM	Philadelphia Flyers	3	Toronto Maple Leafs	4		18,908	2:24	
{"gameDay": "2022-12-22",	10:00 PM	Seattle Kraken	5	Vancouver Canucks	6	SO	18,794	2:39	
{"gameDay": "2022-12-23",	10:30 PM	Calgary Flames	3	Anaheim Ducks	2	OT	16,094	2:30	
{"gameDay": "2022-12-23",	9:30 PM	Los Angeles Kings	1	Arizona Coyotes	2	SO	4,600	2:32	
{"gameDay": "2022-12-23",	7:00 PM	Philadelphia Flyers	5	Carolina Hurricanes	6		18,680	2:34	
{"gameDay": "2022-12-23",	8:30 PM	Columbus Blue Jackets	2	Chicago Blackhawks	5		17,108	2:36	
{"gameDay": "2022-12-23",	8:00 PM	Montreal Canadiens	2	Dallas Stars	4		18,532	2:32	
{"gameDay": "2022-12-23",	9:00 PM	Vancouver Canucks	5	Edmonton Oilers	2		18,347	2:22	
{"gameDay": "2022-12-23",	7:00 PM	Boston Bruins	4	New Jersey Devils	3		16,514	2:20	
{"gameDay": "2022-12-23",	8:00 PM	Colorado Avalanche	3	Nashville Predators	2	OT	17,159	2:36	
{"gameDay": "2022-12-23",	7:30 PM	Florida Panthers	1	New York Islanders	5		17,255	2:24	
{"gameDay": "2022-12-23",	10:00 PM	St. Louis Blues	4	Vegas Golden Knights	5	SO	18,125	2:30	
{"gameDay": "2022-12-23",	7:00 PM	Winnipeg Jets	1	Washington Capitals	4		18,573	2:34	
{"gameDay": "2022-12-27",	9:00 PM	Colorado Avalanche	3	Arizona Coyotes	6		4,600	2:22	
{"gameDay": "2022-12-27",	7:00 PM	Chicago Blackhawks	0	Carolina Hurricanes	3		18,814	2:18	
{"gameDay": "2022-12-27",	9:00 PM	Edmonton Oilers	2	Calgary Flames	1		19,289	2:24	
{"gameDay": "2022-12-27",	10:30 PM	Vegas Golden Knights	2	Los Angeles Kings	4		18,230	2:19	
{"gameDay": "2022-12-27",	8:00 PM	Dallas Stars	3	Nashville Predators	2		17,768	2:26	
{"gameDay": "2022-12-27",	7:30 PM	Pittsburgh Penguins	1	New York Islanders	5		17,255	2:24	
{"gameDay": "2022-12-27",	7:00 PM	Washington Capitals	4	New York Rangers	0		18,006	2:27	
{"gameDay": "2022-12-27",	7:00 PM	Boston Bruins	2	Ottawa Senators	3	SO	20,016	2:44	
{"gameDay": "2022-12-27",	8:00 PM	Toronto Maple Leafs	5	St. Louis Blues	4	OT	18,096	2:29	
{"gameDay": "2022-12-27",	10:00 PM	San Jose Sharks	2	Vancouver Canucks	6		18,875	2:19	
{"gameDay": "2022-12-27",	8:00 PM	Minnesota Wild	4	Winnipeg Jets	1		15,325	2:25	
{"gameDay": "2022-12-28",	10:00 PM	Vegas Golden Knights	2	Anaheim Ducks	3	SO	15,156	2:40	
{"gameDay": "2022-12-28",	7:30 PM	Boston Bruins	3	New Jersey Devils	1		16,514	2:25	
{"gameDay": "2022-12-28",	7:30 PM	Detroit Red Wings	5	Pittsburgh Penguins	4	OT	18,387	2:27	
{"gameDay": "2022-12-28",	10:00 PM	Calgary Flames	3	Seattle Kraken	2		17,151	2:28	
{"gameDay": "2022-12-28",	7:00 PM	Montreal Canadiens	1	Tampa Bay Lightning	4		19,092	2:31	
{"gameDay": "2022-12-29",	9:00 PM	Toronto Maple Leafs	3	Arizona Coyotes	6		4,600	2:24	
{"gameDay": "2022-12-29",	7:00 PM	Detroit Red Wings	3	Buffalo Sabres	6		19,070	2:29	
{"gameDay": "2022-12-29",	9:00 PM	Los Angeles Kings	5	Colorado Avalanche	4	SO	18,132	2:39	
{"gameDay": "2022-12-29",	7:00 PM	Montreal Canadiens	2	Florida Panthers	7		19,623	2:35	
{"gameDay": "2022-12-29",	8:00 PM	Dallas Stars	4	Minnesota Wild	1		19,316	2:34	
{"gameDay": "2022-12-29",	7:30 PM	Columbus Blue Jackets	1	New York Islanders	2		17,255	2:27	
{"gameDay": "2022-12-29",	10:30 PM	Philadelphia Flyers	4	San Jose Sharks	3	OT	17,562	2:23	
{"gameDay": "2022-12-29",	8:00 PM	Chicago Blackhawks	1	St. Louis Blues	3		18,096	2:16	
{"gameDay": "2022-12-29",	7:00 PM	New York Rangers	1	Tampa Bay Lightning	2	SO	19,092	2:46	
{"gameDay": "2022-12-29",	8:00 PM	Vancouver Canucks	2	Winnipeg Jets	4		15,325	2:23	
{"gameDay": "2022-12-29",	7:00 PM	Ottawa Senators	4	Washington Capitals	3	OT	18,573	2:30	
{"gameDay": "2022-12-30",	5:00 PM	Nashville Predators	6	Anaheim Ducks	1		14,890	2:19	
{"gameDay": "2022-12-30",	7:30 PM	Florida Panthers	0	Carolina Hurricanes	4		18,767	2:32	
{"gameDay": "2022-12-30",	7:00 PM	New Jersey Devils	4	Pittsburgh Penguins	2		18,387	2:36	
{"gameDay": "2022-12-30",	10:00 PM	Edmonton Oilers	7	Seattle Kraken	2		17,151	2:27	
{"gameDay": "2022-12-31",	1:00 PM	Buffalo Sabres	4	Boston Bruins	3	OT	17,850	2:41	
{"gameDay": "2022-12-31",	1:00 PM	Chicago Blackhawks	1	Columbus Blue Jackets	4		18,280	2:29	
{"gameDay": "2022-12-31",	10:00 PM	Vancouver Canucks	2	Calgary Flames	3		19,289	2:30	
{"gameDay": "2022-12-31",	7:00 PM	Toronto Maple Leafs	6	Colorado Avalanche	2		18,136	2:19	
{"gameDay": "2022-12-31",	8:00 PM	San Jose Sharks	2	Dallas Stars	5		18,532	2:21	
{"gameDay": "2022-12-31",	7:00 PM	Ottawa Senators	2	Detroit Red Wings	4		19,515	2:23	
{"gameDay": "2022-12-31",	10:00 PM	Winnipeg Jets	2	Edmonton Oilers	1		18,347	2:23	
{"gameDay": "2022-12-31",	4:00 PM	Philadelphia Flyers	4	Los Angeles Kings	2		18,230	2:25	
{"gameDay": "2022-12-31",	6:00 PM	Minnesota Wild	5	St. Louis Blues	2		18,096	2:26	
{"gameDay": "2022-12-31",	5:00 PM	Arizona Coyotes	3	Tampa Bay Lightning	5		19,092	2:27	
{"gameDay": "2022-12-31",	3:00 PM	Nashville Predators	4	Vegas Golden Knights	5	OT	18,333	2:39	
{"gameDay": "2022-12-31",	4:00 PM	Montreal Canadiens	2	Washington Capitals	9		18,573	2:37	
{"gameDay": "2023-01-01",	7:00 PM	San Jose Sharks	5	Chicago Blackhawks	2		19,047	2:17	
{"gameDay": "2023-01-01",	5:00 PM	New York Rangers	5	Florida Panthers	3		18,272	2:27	
{"gameDay": "2023-01-01",	3:00 PM	Carolina Hurricanes	5	New Jersey Devils	4	SO	16,514	2:48	
{"gameDay": "2023-01-01",	7:00 PM	Buffalo Sabres	1	Ottawa Senators	3		18,231	2:24	
{"gameDay": "2023-01-01",	8:00 PM	New York Islanders	1	Seattle Kraken	4		17,151	2:29	
{"gameDay": "2023-01-02",	10:00 PM	Philadelphia Flyers	4	Anaheim Ducks	1		13,600	2:18	
{"gameDay": "2023-01-02",	2:00 PM	Pittsburgh Penguins	1	Boston Bruins	2		39,243	2:42	at Fenway Park (Boston, MA)
{"gameDay": "2023-01-02",	9:00 PM	Vegas Golden Knights	3	Colorado Avalanche	2		18,092	2:28	
{"gameDay": "2023-01-03",	8:30 PM	Tampa Bay Lightning	4	Chicago Blackhawks	1		18,429	2:29	
{"gameDay": "2023-01-03",	9:00 PM	Seattle Kraken	5	Edmonton Oilers	2		18,297	2:29	
{"gameDay": "2023-01-03",	7:00 PM	Arizona Coyotes	3	Florida Panthers	5		19,484	2:31	
{"gameDay": "2023-01-03",	10:00 PM	Dallas Stars	2	Los Angeles Kings	3		16,498	2:22	
{"gameDay": "2023-01-03",	8:00 PM	Montreal Canadiens	3	Nashville Predators	6		17,581	2:28	
{"gameDay": "2023-01-03",	7:00 PM	Carolina Hurricanes	3	New York Rangers	5		17,747	2:28	
{"gameDay": "2023-01-03",	7:00 PM	Columbus Blue Jackets	0	Ottawa Senators	4		14,457	2:27	
{"gameDay": "2023-01-03",	7:00 PM	St. Louis Blues	6	Toronto Maple Leafs	5	SO	18,553	2:36	
{"gameDay": "2023-01-03",	10:00 PM	New York Islanders	6	Vancouver Canucks	2		18,912	2:20	
{"gameDay": "2023-01-03",	8:00 PM	Calgary Flames	2	Winnipeg Jets	3		14,130	2:26	
{"gameDay": "2023-01-03",	7:00 PM	Buffalo Sabres	5	Washington Capitals	4	OT	18,573	2:35	
{"gameDay": "2023-01-04",	10:00 PM	Dallas Stars	0	Anaheim Ducks	2		13,179	2:30	
{"gameDay": "2023-01-04",	7:00 PM	New Jersey Devils	5	Detroit Red Wings	1		19,515	2:27	
{"gameDay": "2023-01-04",	9:30 PM	Tampa Bay Lightning	1	Minnesota Wild	5		18,427	2:32	
{"gameDay": "2023-01-05",	7:00 PM	Nashville Predators	5	Carolina Hurricanes	3		18,344	2:35	
{"gameDay": "2023-01-05",	7:00 PM	Washington Capitals	6	Columbus Blue Jackets	2		17,924	2:20	
{"gameDay": "2023-01-05",	9:00 PM	New York Islanders	2	Edmonton Oilers	4		17,755	2:24	
{"gameDay": "2023-01-05",	10:30 PM	Boston Bruins	5	Los Angeles Kings	2		18,230	2:21	
{"gameDay": "2023-01-05",	7:00 PM	New York Rangers	4	Montreal Canadiens	1		21,105	2:22	
{"gameDay": "2023-01-05",	7:00 PM	St. Louis Blues	5	New Jersey Devils	3		15,561	2:14	
{"gameDay": "2023-01-05",	7:00 PM	Arizona Coyotes	2	Philadelphia Flyers	6		17,572	2:18	
{"gameDay": "2023-01-05",	7:00 PM	Seattle Kraken	5	Toronto Maple Leafs	1		18,624	2:21	
{"gameDay": "2023-01-05",	10:00 PM	Colorado Avalanche	2	Vancouver Canucks	4		18,706	2:33	
{"gameDay": "2023-01-05",	10:00 PM	Pittsburgh Penguins	2	Vegas Golden Knights	5		18,149	2:27	
{"gameDay": "2023-01-06",	10:00 PM	San Jose Sharks	4	Anaheim Ducks	5	OT	16,281	2:35	
{"gameDay": "2023-01-06",	9:00 PM	New York Islanders	1	Calgary Flames	4		18,837	2:21	
{"gameDay": "2023-01-06",	8:30 PM	Arizona Coyotes	0	Chicago Blackhawks	2		19,359	2:18	
{"gameDay": "2023-01-06",	7:00 PM	Florida Panthers	3	Detroit Red Wings	2		19,515	2:27	
{"gameDay": "2023-01-06",	8:00 PM	Tampa Bay Lightning	2	Winnipeg Jets	4		15,325	2:23	
{"gameDay": "2023-01-06",	7:00 PM	Nashville Predators	3	Washington Capitals	2		18,573	2:27	
{"gameDay": "2023-01-07",	7:00 PM	Minnesota Wild	5	Buffalo Sabres	6	OT	19,070	2:34	
{"gameDay": "2023-01-07",	4:00 PM	Carolina Hurricanes	3	Columbus Blue Jackets	4	SO	18,663	2:42	
{"gameDay": "2023-01-07",	10:00 PM	Colorado Avalanche	3	Edmonton Oilers	2	OT	18,347	2:39	
{"gameDay": "2023-01-07",	7:00 PM	St. Louis Blues	4	Montreal Canadiens	5		21,105	2:22	
{"gameDay": "2023-01-07",	1:00 PM	New York Rangers	3	New Jersey Devils	4	OT	16,514	2:31	
{"gameDay": "2023-01-07",	7:00 PM	Seattle Kraken	8	Ottawa Senators	4		19,347	2:32	
{"gameDay": "2023-01-07",	10:30 PM	Boston Bruins	4	San Jose Sharks	2		17,562	2:27	
{"gameDay": "2023-01-07",	7:00 PM	Detroit Red Wings	1	Toronto Maple Leafs	4		19,101	2:25	
{"gameDay": "2023-01-07",	10:00 PM	Los Angeles Kings	5	Vegas Golden Knights	1		18,339	2:24	
{"gameDay": "2023-01-08",	8:30 PM	Boston Bruins	7	Anaheim Ducks	1		16,127	2:27	
{"gameDay": "2023-01-08",	7:00 PM	Pittsburgh Penguins	4	Arizona Coyotes	1		4,600	2:18	
{"gameDay": "2023-01-08",	7:00 PM	Calgary Flames	3	Chicago Blackhawks	4	OT	18,123	2:33	
{"gameDay": "2023-01-08",	3:30 PM	Florida Panthers	1	Dallas Stars	5		18,532	2:29	
{"gameDay": "2023-01-08",	7:00 PM	St. Louis Blues	3	Minnesota Wild	0		18,745	2:19	
{"gameDay": "2023-01-08",	7:00 PM	Toronto Maple Leafs	6	Philadelphia Flyers	2		17,862	2:25	
{"gameDay": "2023-01-08",	3:00 PM	Vancouver Canucks	4	Winnipeg Jets	7		14,206	2:23	
{"gameDay": "2023-01-08",	5:00 PM	Columbus Blue Jackets	0	Washington Capitals	1		18,573	2:20	
{"gameDay": "2023-01-09",	7:00 PM	Philadelphia Flyers	4	Buffalo Sabres	0		11,271	2:21	
{"gameDay": "2023-01-09",	10:30 PM	Edmonton Oilers	3	Los Angeles Kings	6		16,039	2:42	
{"gameDay": "2023-01-09",	7:30 PM	Seattle Kraken	4	Montreal Canadiens	0		21,105	2:20	
{"gameDay": "2023-01-09",	7:30 PM	Nashville Predators	3	Ottawa Senators	0		13,362	2:34	
{"gameDay": "2023-01-10",	9:00 PM	San Jose Sharks	4	Arizona Coyotes	2		4,600	2:21	
{"gameDay": "2023-01-10",	7:00 PM	Seattle Kraken	4	Buffalo Sabres	3		13,219	2:29	
{"gameDay": "2023-01-10",	7:00 PM	New Jersey Devils	5	Carolina Hurricanes	3		18,092	2:33	
{"gameDay": "2023-01-10",	9:30 PM	Florida Panthers	5	Colorado Avalanche	4		18,102	2:39	
{"gameDay": "2023-01-10",	7:00 PM	Winnipeg Jets	5	Detroit Red Wings	7		19,075	2:34	
{"gameDay": "2023-01-10",	7:30 PM	Dallas Stars	2	New York Islanders	1	SO	16,412	2:34	
{"gameDay": "2023-01-10",	7:00 PM	Minnesota Wild	3	New York Rangers	4	SO	18,006	2:47	
{"gameDay": "2023-01-10",	7:00 PM	Vancouver Canucks	4	Pittsburgh Penguins	5		17,986	2:26	
{"gameDay": "2023-01-10",	8:00 PM	Calgary Flames	3	St. Louis Blues	4	OT	18,096	2:23	
{"gameDay": "2023-01-10",	7:00 PM	Columbus Blue Jackets	3	Tampa Bay Lightning	6		19,092	2:21	
{"gameDay": "2023-01-11",	10:00 PM	Edmonton Oilers	6	Anaheim Ducks	2		16,963	2:28	
{"gameDay": "2023-01-11",	10:00 PM	San Jose Sharks	3	Los Angeles Kings	4		16,717	2:24	
{"gameDay": "2023-01-11",	7:00 PM	Washington Capitals	3	Philadelphia Flyers	5		17,352	2:31	
{"gameDay": "2023-01-11",	7:30 PM	Nashville Predators	1	Toronto Maple Leafs	2		18,638	2:24	
{"gameDay": "2023-01-12",	9:00 PM	Ottawa Senators	5	Arizona Coyotes	3		4,600	2:30	
{"gameDay": "2023-01-12",	7:00 PM	Seattle Kraken	3	Boston Bruins	0		17,850	2:17	
{"gameDay": "2023-01-12",	7:00 PM	Winnipeg Jets	4	Buffalo Sabres	2		15,208	2:26	
{"gameDay": "2023-01-12",	7:00 PM	Carolina Hurricanes	6	Columbus Blue Jackets	2		15,766	2:32	
{"gameDay": "2023-01-12",	8:30 PM	Colorado Avalanche	2	Chicago Blackhawks	3		16,532	2:31	
{"gameDay": "2023-01-12",	7:00 PM	Toronto Maple Leafs	1	Detroit Red Wings	4		19,515	2:23	
{"gameDay": "2023-01-12",	7:00 PM	Nashville Predators	3	Montreal Canadiens	4		21,105	2:28	
{"gameDay": "2023-01-12",	7:30 PM	Minnesota Wild	3	New York Islanders	1		17,255	2:29	
{"gameDay": "2023-01-12",	7:00 PM	Dallas Stars	1	New York Rangers	2	OT	18,006	2:24	
{"gameDay": "2023-01-12",	8:00 PM	Calgary Flames	4	St. Louis Blues	1		18,096	2:21	
{"gameDay": "2023-01-12",	7:00 PM	Vancouver Canucks	4	Tampa Bay Lightning	5		19,092	2:39	
{"gameDay": "2023-01-12",	10:00 PM	Florida Panthers	2	Vegas Golden Knights	4		17,735	2:42	
{"gameDay": "2023-01-13",	10:00 PM	New Jersey Devils	6	Anaheim Ducks	2		16,167	2:26	
{"gameDay": "2023-01-13",	7:00 PM	Winnipeg Jets	4	Pittsburgh Penguins	1		18,268	2:30	
{"gameDay": "2023-01-13",	10:30 PM	Edmonton Oilers	7	San Jose Sharks	1		15,887	2:25	
{"gameDay": "2023-01-14",	7:00 PM	Toronto Maple Leafs	3	Boston Bruins	4		17,850	2:33	
{"gameDay": "2023-01-14",	7:00 PM	Pittsburgh Penguins	1	Carolina Hurricanes	2		18,769	2:24	
{"gameDay": "2023-01-14",	8:00 PM	Seattle Kraken	8	Chicago Blackhawks	5		20,075	2:28	
{"gameDay": "2023-01-14",	7:00 PM	Ottawa Senators	0	Colorado Avalanche	7		18,124	2:29	
{"gameDay": "2023-01-14",	2:00 PM	Calgary Flames	6	Dallas Stars	5		18,532	2:34	
{"gameDay": "2023-01-14",	7:00 PM	Columbus Blue Jackets	4	Detroit Red Wings	3		19,515	2:20	
{"gameDay": "2023-01-14",	7:00 PM	Vancouver Canucks	3	Florida Panthers	4		17,584	2:27	
{"gameDay": "2023-01-14",	10:30 PM	New Jersey Devils	5	Los Angeles Kings	2		18,230	2:38	
{"gameDay": "2023-01-14",	8:00 PM	Arizona Coyotes	1	Minnesota Wild	2		19,299	2:26	
{"gameDay": "2023-01-14",	8:00 PM	Buffalo Sabres	5	Nashville Predators	3		17,761	2:31	
{"gameDay": "2023-01-14",	7:00 PM	Montreal Canadiens	1	New York Islanders	2		17,255	2:24	
{"gameDay": "2023-01-14",	8:00 PM	Tampa Bay Lightning	4	St. Louis Blues	2		18,096	2:23	
{"gameDay": "2023-01-14",	10:00 PM	Edmonton Oilers	4	Vegas Golden Knights	3		18,143	2:27	
{"gameDay": "2023-01-14",	7:00 PM	Philadelphia Flyers	3	Washington Capitals	1		18,573	2:25	
{"gameDay": "2023-01-15",	5:00 PM	Vancouver Canucks	4	Carolina Hurricanes	3	SO	18,680	2:39	
{"gameDay": "2023-01-15",	5:00 PM	Montreal Canadiens	2	New York Rangers	1		18,006	2:22	
{"gameDay": "2023-01-15",	7:00 PM	Arizona Coyotes	1	Winnipeg Jets	2		13,949	2:18	
{"gameDay": "2023-01-16",	1:00 PM	Philadelphia Flyers	0	Boston Bruins	6		17,850	2:34	
{"gameDay": "2023-01-16",	1:00 PM	Florida Panthers	4	Buffalo Sabres	1		15,251	2:24	
{"gameDay": "2023-01-16",	7:00 PM	New York Rangers	3	Columbus Blue Jackets	1		17,024	2:25	
{"gameDay": "2023-01-16",	3:00 PM	Detroit Red Wings	3	Colorado Avalanche	6		18,117	2:26	
{"gameDay": "2023-01-16",	8:00 PM	Calgary Flames	1	Nashville Predators	2		17,159	2:29	
{"gameDay": "2023-01-16",	7:30 PM	Washington Capitals	4	New York Islanders	3	OT	16,344	2:32	
{"gameDay": "2023-01-16",	7:00 PM	Anaheim Ducks	3	Pittsburgh Penguins	4	OT	17,784	2:27	
{"gameDay": "2023-01-16",	4:00 PM	Tampa Bay Lightning	4	Seattle Kraken	1		17,151	2:18	
{"gameDay": "2023-01-16",	4:00 PM	New Jersey Devils	4	San Jose Sharks	3	SO	13,293	2:38	
{"gameDay": "2023-01-16",	8:00 PM	Ottawa Senators	1	St. Louis Blues	2		18,096	2:25	
{"gameDay": "2023-01-16",	6:00 PM	Dallas Stars	4	Vegas Golden Knights	0		17,895	2:25	
{"gameDay": "2023-01-17",	9:00 PM	Detroit Red Wings	3	Arizona Coyotes	4	SO	4,600	2:36	
{"gameDay": "2023-01-17",	8:30 PM	Buffalo Sabres	3	Chicago Blackhawks	4	OT	16,363	2:24	
{"gameDay": "2023-01-17",	9:00 PM	Seattle Kraken	2	Edmonton Oilers	5		18,183	2:26	
{"gameDay": "2023-01-17",	7:00 PM	Winnipeg Jets	1	Montreal Canadiens	4		21,105	2:24	
{"gameDay": "2023-01-17",	8:00 PM	Columbus Blue Jackets	1	Nashville Predators	2		17,159	2:19	
{"gameDay": "2023-01-17",	7:00 PM	Anaheim Ducks	2	Philadelphia Flyers	5		16,312	2:25	
{"gameDay": "2023-01-17",	7:00 PM	Florida Panthers	4	Toronto Maple Leafs	5	OT	18,573	2:39	
{"gameDay": "2023-01-17",	7:00 PM	Minnesota Wild	4	Washington Capitals	2		18,573	2:24	
{"gameDay": "2023-01-18",	9:30 PM	Colorado Avalanche	4	Calgary Flames	1		17,768	2:23	
{"gameDay": "2023-01-18",	7:30 PM	Boston Bruins	4	New York Islanders	1		17,255	2:22	
{"gameDay": "2023-01-18",	7:00 PM	Pittsburgh Penguins	4	Ottawa Senators	5	OT	17,106	2:29	
{"gameDay": "2023-01-18",	10:00 PM	Dallas Stars	3	San Jose Sharks	5		12,315	2:25	
{"gameDay": "2023-01-18",	10:00 PM	Tampa Bay Lightning	5	Vancouver Canucks	2		18,792	2:25	
{"gameDay": "2023-01-19",	9:00 PM	Washington Capitals	4	Arizona Coyotes	0		4,600	2:26	
{"gameDay": "2023-01-19",	7:30 PM	New York Islanders	2	Buffalo Sabres	3	OT	19,070	2:26	
{"gameDay": "2023-01-19",	7:00 PM	Minnesota Wild	2	Carolina Hurricanes	5		18,013	2:33	
{"gameDay": "2023-01-19",	7:00 PM	Anaheim Ducks	5	Columbus Blue Jackets	3		16,017	2:25	
{"gameDay": "2023-01-19",	9:00 PM	Tampa Bay Lightning	3	Edmonton Oilers	5		17,742	2:36	
{"gameDay": "2023-01-19",	10:30 PM	Dallas Stars	4	Los Angeles Kings	0		18,230	2:25	
{"gameDay": "2023-01-19",	7:00 PM	Florida Panthers	6	Montreal Canadiens	2		21,105	2:36	
{"gameDay": "2023-01-19",	7:00 PM	Boston Bruins	3	New York Rangers	1		18,006	2:25	
{"gameDay": "2023-01-19",	7:00 PM	Chicago Blackhawks	4	Philadelphia Flyers	1		16,460	2:28	
{"gameDay": "2023-01-19",	10:00 PM	New Jersey Devils	3	Seattle Kraken	4	OT	17,151	2:34	
{"gameDay": "2023-01-19",	8:00 PM	Nashville Predators	2	St. Louis Blues	5		18,096	2:20	
{"gameDay": "2023-01-19",	7:00 PM	Winnipeg Jets	1	Toronto Maple Leafs	4		18,644	2:23	
{"gameDay": "2023-01-19",	10:00 PM	Detroit Red Wings	3	Vegas Golden Knights	2		17,911	2:27	
{"gameDay": "2023-01-20",	7:00 PM	Ottawa Senators	1	Pittsburgh Penguins	4		18,237	2:29	
{"gameDay": "2023-01-20",	10:00 PM	Colorado Avalanche	4	Vancouver Canucks	1		18,813	2:24	
{"gameDay": "2023-01-21",	12:30 PM	Anaheim Ducks	3	Buffalo Sabres	6		19,070	2:22	
{"gameDay": "2023-01-21",	7:00 PM	San Jose Sharks	3	Columbus Blue Jackets	5		18,807	2:22	
{"gameDay": "2023-01-21",	3:00 PM	Tampa Bay Lightning	3	Calgary Flames	6		18,831	2:33	
{"gameDay": "2023-01-21",	8:00 PM	Arizona Coyotes	0	Dallas Stars	4		18,532	2:18	
{"gameDay": "2023-01-21",	7:00 PM	Philadelphia Flyers	2	Detroit Red Wings	1		19,515	2:31	
{"gameDay": "2023-01-21",	6:00 PM	Minnesota Wild	3	Florida Panthers	5		16,759	2:31	
{"gameDay": "2023-01-21",	7:00 PM	Toronto Maple Leafs	2	Montreal Canadiens	3	OT	21,105	2:27	
{"gameDay": "2023-01-21",	8:00 PM	Los Angeles Kings	3	Nashville Predators	5		17,654	2:28	
{"gameDay": "2023-01-21",	7:30 PM	Carolina Hurricanes	5	New York Islanders	2		17,255	2:28	
{"gameDay": "2023-01-21",	7:00 PM	Winnipeg Jets	5	Ottawa Senators	1		19,042	2:24	
{"gameDay": "2023-01-21",	10:00 PM	Colorado Avalanche	2	Seattle Kraken	1	SO	17,151	2:32	
{"gameDay": "2023-01-21",	8:00 PM	Chicago Blackhawks	5	St. Louis Blues	3		18,096	2:24	
{"gameDay": "2023-01-21",	10:00 PM	Edmonton Oilers	4	Vancouver Canucks	2		18,977	2:27	
{"gameDay": "2023-01-21",	10:00 PM	Washington Capitals	2	Vegas Golden Knights	6		18,251	2:23	
{"gameDay": "2023-01-22",	8:00 PM	Vegas Golden Knights	1	Arizona Coyotes	4		4,600	2:29	
{"gameDay": "2023-01-22",	7:00 PM	San Jose Sharks	0	Boston Bruins	4		17,850	2:31	
{"gameDay": "2023-01-22",	7:00 PM	Los Angeles Kings	2	Chicago Blackhawks	1		19,236	2:16	
{"gameDay": "2023-01-22",	2:00 PM	Pittsburgh Penguins	1	New Jersey Devils	2	OT	16,514	2:25	
{"gameDay": "2023-01-22",	7:00 PM	Winnipeg Jets	5	Philadelphia Flyers	3		15,441	2:25	
{"gameDay": "2023-01-23",	9:30 PM	Columbus Blue Jackets	3	Calgary Flames	4	OT	17,697	2:39	
{"gameDay": "2023-01-23",	8:30 PM	Buffalo Sabres	3	Dallas Stars	2	OT	18,134	2:24	
{"gameDay": "2023-01-23",	7:00 PM	Florida Panthers	2	New York Rangers	6		17,121	2:34	
{"gameDay": "2023-01-23",	7:00 PM	New York Islanders	2	Toronto Maple Leafs	5		18,514	2:23	
{"gameDay": "2023-01-24",	9:00 PM	Anaheim Ducks	5	Arizona Coyotes	2		4,600	2:30	
{"gameDay": "2023-01-24",	9:00 PM	Washington Capitals	2	Colorado Avalanche	3		18,132	2:26	
{"gameDay": "2023-01-24",	7:00 PM	San Jose Sharks	2	Detroit Red Wings	3	OT	19,515	2:30	
{"gameDay": "2023-01-24",	7:00 PM	Boston Bruins	4	Montreal Canadiens	2		21,105	2:34	
{"gameDay": "2023-01-24",	7:30 PM	Vegas Golden Knights	2	New Jersey Devils	3	OT	16,086	2:35	
{"gameDay": "2023-01-24",	8:00 PM	Winnipeg Jets	1	Nashville Predators	2		17,159	2:23	
{"gameDay": "2023-01-24",	7:00 PM	Los Angeles Kings	4	Philadelphia Flyers	3	OT	15,602	2:33	
{"gameDay": "2023-01-24",	7:00 PM	Florida Panthers	6	Pittsburgh Penguins	7	OT	17,159	2:33	
{"gameDay": "2023-01-24",	8:00 PM	Buffalo Sabres	5	St. Louis Blues	3		18,096	2:23	
{"gameDay": "2023-01-24",	7:00 PM	Minnesota Wild	2	Tampa Bay Lightning	4		19,092	2:31	
{"gameDay": "2023-01-24",	10:00 PM	Chicago Blackhawks	2	Vancouver Canucks	5		18,988	2:21	
{"gameDay": "2023-01-25",	8:30 PM	Carolina Hurricanes	3	Dallas Stars	2	OT	18,237	2:29	
{"gameDay": "2023-01-25",	9:30 PM	Columbus Blue Jackets	3	Edmonton Oilers	2	OT	16,986	2:24	
{"gameDay": "2023-01-25",	7:00 PM	New York Islanders	1	Ottawa Senators	2		13,980	2:24	
{"gameDay": "2023-01-25",	10:00 PM	Vancouver Canucks	1	Seattle Kraken	6		17,151	2:25	
{"gameDay": "2023-01-25",	7:00 PM	New York Rangers	2	Toronto Maple Leafs	3	OT	18,114	2:24	
{"gameDay": "2023-01-26",	9:00 PM	St. Louis Blues	0	Arizona Coyotes	5		4,600	2:24	
{"gameDay": "2023-01-26",	9:00 PM	Chicago Blackhawks	5	Calgary Flames	1		17,659	2:21	
{"gameDay": "2023-01-26",	9:00 PM	Anaheim Ducks	5	Colorado Avalanche	3		18,124	2:30	
{"gameDay": "2023-01-26",	8:00 PM	Philadelphia Flyers	2	Minnesota Wild	3	OT	19,177	2:40	
{"gameDay": "2023-01-26",	7:00 PM	Detroit Red Wings	4	Montreal Canadiens	3	OT	21,105	2:35	
{"gameDay": "2023-01-26",	8:00 PM	New Jersey Devils	4	Nashville Predators	6		17,164	2:31	
{"gameDay": "2023-01-26",	7:00 PM	Boston Bruins	2	Tampa Bay Lightning	3		19,092	2:40	
{"gameDay": "2023-01-26",	8:00 PM	Buffalo Sabres	3	Winnipeg Jets	2		13,589	2:23	
{"gameDay": "2023-01-26",	7:00 PM	Pittsburgh Penguins	2	Washington Capitals	3	SO	18,573	2:42	
{"gameDay": "2023-01-27",	7:00 PM	San Jose Sharks	4	Carolina Hurricanes	5	OT	18,780	2:30	
{"gameDay": "2023-01-27",	8:30 PM	New Jersey Devils	3	Dallas Stars	2	OT	18,532	2:29	
{"gameDay": "2023-01-27",	7:00 PM	Los Angeles Kings	4	Florida Panthers	3		15,322	2:30	
{"gameDay": "2023-01-27",	7:00 PM	Detroit Red Wings	0	New York Islanders	2		17,255	2:23	
{"gameDay": "2023-01-27",	7:00 PM	Vegas Golden Knights	1	New York Rangers	4		18,006	2:25	
{"gameDay": "2023-01-27",	10:00 PM	Calgary Flames	5	Seattle Kraken	2		17,151	2:32	
{"gameDay": "2023-01-27",	7:00 PM	Ottawa Senators	6	Toronto Maple Leafs	2		18,727	2:27	
{"gameDay": "2023-01-27",	10:00 PM	Columbus Blue Jackets	2	Vancouver Canucks	5		18,700	2:24	
{"gameDay": "2023-01-28",	10:30 PM	Arizona Coyotes	1	Anaheim Ducks	2	OT	16,126	2:39	
{"gameDay": "2023-01-28",	3:00 PM	St. Louis Blues	2	Colorado Avalanche	4		18,137	2:28	
{"gameDay": "2023-01-28",	10:00 PM	Chicago Blackhawks	3	Edmonton Oilers	7		18,347	2:33	
{"gameDay": "2023-01-28",	6:00 PM	Boston Bruins	3	Florida Panthers	4	OT	18,058	2:41	
{"gameDay": "2023-01-28",	9:00 PM	Buffalo Sabres	2	Minnesota Wild	3	SO	19,212	2:36	
{"gameDay": "2023-01-28",	7:30 PM	Vegas Golden Knights	1	New York Islanders	2	OT	17,255	2:32	
{"gameDay": "2023-01-28",	7:00 PM	Montreal Canadiens	0	Ottawa Senators	5		20,034	2:20	
{"gameDay": "2023-01-28",	7:00 PM	San Jose Sharks	6	Pittsburgh Penguins	4		18,417	2:28	
{"gameDay": "2023-01-28",	10:00 PM	Columbus Blue Jackets	1	Seattle Kraken	3		17,151	2:30	
{"gameDay": "2023-01-28",	7:00 PM	Los Angeles Kings	2	Tampa Bay Lightning	5		19,092	2:29	
{"gameDay": "2023-01-28",	7:00 PM	Philadelphia Flyers	4	Winnipeg Jets	0		14,476	2:28	
{"gameDay": "2023-01-29",	5:00 PM	Boston Bruins	1	Carolina Hurricanes	4		18,959	2:31	
{"gameDay": "2023-01-29",	5:00 PM	Washington Capitals	1	Toronto Maple Leafs	5		18,593	2:19	
{"gameDay": "2023-01-30",	8:00 PM	St. Louis Blues	2	Winnipeg Jets	4		13,756	2:30	
{"gameDay": "2023-01-31",	7:00 PM	Los Angeles Kings	4	Carolina Hurricanes	5	OT	18,443	2:35	
{"gameDay": "2023-01-31",	7:00 PM	Washington Capitals	4	Columbus Blue Jackets	3	OT	17,879	2:36	
{"gameDay": "2023-01-31",	7:00 PM	Ottawa Senators	5	Montreal Canadiens	4		21,105	2:30	
{"gameDay": "2023-02-01",	7:30 PM	Carolina Hurricanes	5	Buffalo Sabres	1		14,166	2:20	
{"gameDay": "2023-02-01",	7:30 PM	Boston Bruins	5	Toronto Maple Leafs	2		18,973	2:29	
{"gameDay": "2023-02-06",	9:00 PM	Minnesota Wild	2	Arizona Coyotes	3		4,600	2:26	
{"gameDay": "2023-02-06",	8:30 PM	Anaheim Ducks	2	Dallas Stars	3	SO	18,145	2:41	
{"gameDay": "2023-02-06",	7:00 PM	Tampa Bay Lightning	1	Florida Panthers	7		15,882	2:31	
{"gameDay": "2023-02-06",	7:30 PM	Vancouver Canucks	4	New Jersey Devils	5	OT	14,630	2:32	
{"gameDay": "2023-02-06",	7:30 PM	Calgary Flames	4	New York Rangers	5	OT	17,173	2:42	
{"gameDay": "2023-02-06",	7:00 PM	New York Islanders	2	Philadelphia Flyers	1		18,695	2:18	
{"gameDay": "2023-02-07",	8:30 PM	Anaheim Ducks	3	Chicago Blackhawks	2	OT	18,292	2:21	
{"gameDay": "2023-02-07",	7:30 PM	Edmonton Oilers	5	Detroit Red Wings	2		19,515	2:35	
{"gameDay": "2023-02-07",	8:00 PM	Vegas Golden Knights	5	Nashville Predators	1		17,159	2:22	
{"gameDay": "2023-02-07",	7:30 PM	Seattle Kraken	0	New York Islanders	4		17,255	2:21	
{"gameDay": "2023-02-07",	7:00 PM	Colorado Avalanche	1	Pittsburgh Penguins	2	OT	18,096	2:35	
{"gameDay": "2023-02-07",	7:00 PM	San Jose Sharks	4	Tampa Bay Lightning	3	OT	19,092	2:39	
{"gameDay": "2023-02-08",	8:30 PM	Minnesota Wild	1	Dallas Stars	4		18,274	2:25	
{"gameDay": "2023-02-08",	8:00 PM	Vancouver Canucks	3	New York Rangers	4		18,006	2:24	
{"gameDay": "2023-02-09",	7:00 PM	Calgary Flames	1	Detroit Red Wings	2		19,515	2:20	
{"gameDay": "2023-02-09",	7:00 PM	San Jose Sharks	1	Florida Panthers	4		15,183	2:32	
{"gameDay": "2023-02-09",	8:00 PM	Vegas Golden Knights	5	Minnesota Wild	1		18,797	2:34	
{"gameDay": "2023-02-09",	7:00 PM	Seattle Kraken	1	New Jersey Devils	3		15,697	2:25	
{"gameDay": "2023-02-09",	7:30 PM	Vancouver Canucks	6	New York Islanders	5		17,255	2:25	
{"gameDay": "2023-02-09",	7:00 PM	Edmonton Oilers	1	Philadelphia Flyers	2	SO	18,851	2:33	
{"gameDay": "2023-02-09",	7:00 PM	Colorado Avalanche	0	Tampa Bay Lightning	5		19,092	2:38	
{"gameDay": "2023-02-10",	10:00 PM	Pittsburgh Penguins	6	Anaheim Ducks	3		15,026	2:30	
{"gameDay": "2023-02-10",	7:00 PM	Toronto Maple Leafs	3	Columbus Blue Jackets	0		18,860	2:21	
{"gameDay": "2023-02-10",	8:30 PM	Arizona Coyotes	3	Chicago Blackhawks	4	OT	19,007	2:25	
{"gameDay": "2023-02-10",	7:00 PM	Seattle Kraken	3	New York Rangers	6		18,006	2:32	
{"gameDay": "2023-02-11",	3:30 PM	Washington Capitals	2	Boston Bruins	1		17,850	2:35	
{"gameDay": "2023-02-11",	12:30 PM	Calgary Flames	7	Buffalo Sabres	2		18,356	2:25	
{"gameDay": "2023-02-11",	7:00 PM	New York Rangers	6	Carolina Hurricanes	2		18,808	2:25	
{"gameDay": "2023-02-11",	1:00 PM	Tampa Bay Lightning	3	Dallas Stars	1		18,532	2:21	
{"gameDay": "2023-02-11",	12:00 PM	Vancouver Canucks	2	Detroit Red Wings	5		19,515	2:24	
{"gameDay": "2023-02-11",	6:00 PM	Colorado Avalanche	5	Florida Panthers	3		17,472	2:36	
{"gameDay": "2023-02-11",	10:30 PM	Pittsburgh Penguins	0	Los Angeles Kings	6		18,230	2:22	
{"gameDay": "2023-02-11",	8:00 PM	New Jersey Devils	2	Minnesota Wild	3	SO	19,065	2:40	
{"gameDay": "2023-02-11",	12:30 PM	New York Islanders	3	Montreal Canadiens	4	OT	21,105	2:27	
{"gameDay": "2023-02-11",	12:30 PM	Edmonton Oilers	6	Ottawa Senators	3		20,041	2:36	
{"gameDay": "2023-02-11",	12:30 PM	Nashville Predators	2	Philadelphia Flyers	1	OT	19,412	2:28	
{"gameDay": "2023-02-11",	8:00 PM	Arizona Coyotes	5	St. Louis Blues	6	OT	18,096	2:34	
{"gameDay": "2023-02-11",	7:00 PM	Columbus Blue Jackets	4	Toronto Maple Leafs	3		18,893	2:28	
{"gameDay": "2023-02-11",	10:00 PM	Chicago Blackhawks	1	Winnipeg Jets	4		14,440	2:26	
{"gameDay": "2023-02-12",	12:30 PM	Edmonton Oilers	2	Montreal Canadiens	6		21,105	2:27	
{"gameDay": "2023-02-12",	1:00 PM	Seattle Kraken	4	Philadelphia Flyers	3		18,129	2:19	
{"gameDay": "2023-02-12",	3:00 PM	Anaheim Ducks	2	Vegas Golden Knights	7		17,504	2:21	
{"gameDay": "2023-02-12",	1:30 PM	San Jose Sharks	4	Washington Capitals	1		18,573	2:21	
{"gameDay": "2023-02-13",	10:30 PM	Buffalo Sabres	2	Los Angeles Kings	5		17,025	2:26	
{"gameDay": "2023-02-13",	8:00 PM	Florida Panthers	2	Minnesota Wild	1	SO	17,453	2:44	
{"gameDay": "2023-02-13",	8:00 PM	Arizona Coyotes	4	Nashville Predators	2		17,159	2:22	
{"gameDay": "2023-02-13",	7:30 PM	Calgary Flames	3	Ottawa Senators	4	OT	15,024	2:29	
{"gameDay": "2023-02-13",	10:00 PM	Detroit Red Wings	6	Vancouver Canucks	1		18,465	2:21	
{"gameDay": "2023-02-14",	7:30 PM	New Jersey Devils	3	Columbus Blue Jackets	2		15,840	2:20	
{"gameDay": "2023-02-14",	9:00 PM	Tampa Bay Lightning	4	Colorado Avalanche	3	SO	18,072	2:37	
{"gameDay": "2023-02-14",	8:30 PM	Boston Bruins	3	Dallas Stars	2	OT	18,532	2:38	
{"gameDay": "2023-02-14",	7:00 PM	Chicago Blackhawks	0	Montreal Canadiens	4		21,105	2:23	
{"gameDay": "2023-02-14",	7:30 PM	Ottawa Senators	3	New York Islanders	2	SO	15,134	2:37	
{"gameDay": "2023-02-14",	10:30 PM	Pittsburgh Penguins	3	San Jose Sharks	1		13,534	2:12	
{"gameDay": "2023-02-14",	8:00 PM	Florida Panthers	2	St. Louis Blues	6		18,096	2:23	
{"gameDay": "2023-02-14",	8:00 PM	Seattle Kraken	2	Winnipeg Jets	3	SO	14,237	2:36	
{"gameDay": "2023-02-14",	7:00 PM	Carolina Hurricanes	3	Washington Capitals	2		18,573	2:36	
{"gameDay": "2023-02-15",	10:00 PM	Buffalo Sabres	7	Anaheim Ducks	3		15,165	2:27	
{"gameDay": "2023-02-15",	9:00 PM	Tampa Bay Lightning	0	Arizona Coyotes	1	SO	4,600	2:34	
{"gameDay": "2023-02-15",	9:30 PM	Detroit Red Wings	5	Edmonton Oilers	4	SO	17,627	2:44	
{"gameDay": "2023-02-15",	9:30 PM	Colorado Avalanche	3	Minnesota Wild	2		17,965	2:26	
{"gameDay": "2023-02-15",	7:00 PM	Chicago Blackhawks	2	Toronto Maple Leafs	5		18,882	2:21	
{"gameDay": "2023-02-15",	10:00 PM	New York Rangers	6	Vancouver Canucks	4		18,404	2:25	
{"gameDay": "2023-02-16",	7:00 PM	Montreal Canadiens	2	Carolina Hurricanes	6		18,680	2:29	
{"gameDay": "2023-02-16",	7:00 PM	Winnipeg Jets	1	Columbus Blue Jackets	3		16,032	2:26	
{"gameDay": "2023-02-16",	9:00 PM	Detroit Red Wings	5	Calgary Flames	2		17,713	2:25	
{"gameDay": "2023-02-16",	8:00 PM	Boston Bruins	5	Nashville Predators	0		17,159	2:27	
{"gameDay": "2023-02-16",	10:00 PM	Philadelphia Flyers	2	Seattle Kraken	6		17,151	2:26	
{"gameDay": "2023-02-16",	9:00 PM	New Jersey Devils	2	St. Louis Blues	4		18,096	2:24	
{"gameDay": "2023-02-16",	10:00 PM	San Jose Sharks	1	Vegas Golden Knights	2		17,544	2:29	
{"gameDay": "2023-02-16",	7:00 PM	Florida Panthers	6	Washington Capitals	3		18,573	2:27	
{"gameDay": "2023-02-17",	9:00 PM	Los Angeles Kings	6	Anaheim Ducks	3		17,272	2:33	
{"gameDay": "2023-02-17",	9:00 PM	New York Rangers	5	Edmonton Oilers	4	SO	18,347	2:43	
{"gameDay": "2023-02-17",	8:00 PM	Dallas Stars	1	Minnesota Wild	2	SO	19,239	2:40	
{"gameDay": "2023-02-17",	7:00 PM	Pittsburgh Penguins	4	New York Islanders	5		17,255	2:30	
{"gameDay": "2023-02-17",	7:00 PM	Chicago Blackhawks	4	Ottawa Senators	3	OT	19,125	2:30	
{"gameDay": "2023-02-18",	5:00 PM	New York Islanders	2	Boston Bruins	6		17,850	2:18	
{"gameDay": "2023-02-18",	8:00 PM	Washington Capitals	1	Carolina Hurricanes	4		56,961	2:49	at Carter-Finley Stadium (Raleigh, NC)
{"gameDay": "2023-02-18",	10:00 PM	New York Rangers	2	Calgary Flames	3	OT	19,206	2:24	
{"gameDay": "2023-02-18",	6:00 PM	Columbus Blue Jackets	4	Dallas Stars	1		18,532	2:25	
{"gameDay": "2023-02-18",	10:30 PM	Arizona Coyotes	5	Los Angeles Kings	6	SO	18,230	2:39	
{"gameDay": "2023-02-18",	2:00 PM	Florida Panthers	3	Nashville Predators	7		17,823	2:34	
{"gameDay": "2023-02-18",	5:30 PM	New Jersey Devils	5	Pittsburgh Penguins	2		18,427	2:26	
{"gameDay": "2023-02-18",	10:30 PM	Detroit Red Wings	2	Seattle Kraken	4		17,151	2:30	
{"gameDay": "2023-02-18",	10:30 PM	Buffalo Sabres	4	San Jose Sharks	2		17,562	2:31	
{"gameDay": "2023-02-18",	2:00 PM	Colorado Avalanche	4	St. Louis Blues	1		18,096	2:23	
{"gameDay": "2023-02-18",	7:00 PM	Montreal Canadiens	1	Toronto Maple Leafs	5		19,535	2:24	
{"gameDay": "2023-02-18",	10:00 PM	Philadelphia Flyers	2	Vancouver Canucks	6		18,799	2:32	
{"gameDay": "2023-02-18",	10:30 PM	Tampa Bay Lightning	4	Vegas Golden Knights	5		18,317	2:32	
{"gameDay": "2023-02-19",	8:30 PM	Columbus Blue Jackets	2	Arizona Coyotes	3	OT	4,600	2:32	
{"gameDay": "2023-02-19",	6:00 PM	Toronto Maple Leafs	3	Chicago Blackhawks	5		20,979	2:25	
{"gameDay": "2023-02-19",	3:00 PM	Edmonton Oilers	5	Colorado Avalanche	6	OT	18,134	2:44	
{"gameDay": "2023-02-19",	2:00 PM	Nashville Predators	3	Minnesota Wild	4		19,255	2:24	
{"gameDay": "2023-02-19",	7:00 PM	Winnipeg Jets	2	New Jersey Devils	4		16,514	2:25	
{"gameDay": "2023-02-19",	2:00 PM	St. Louis Blues	2	Ottawa Senators	7		18,871	2:34	
{"gameDay": "2023-02-20",	1:00 PM	Ottawa Senators	1	Boston Bruins	3		17,850	2:33	
{"gameDay": "2023-02-20",	4:00 PM	Philadelphia Flyers	4	Calgary Flames	3		19,036	2:39	
{"gameDay": "2023-02-20",	1:00 PM	Anaheim Ducks	3	Florida Panthers	4	OT	16,525	2:36	
{"gameDay": "2023-02-20",	7:00 PM	Winnipeg Jets	4	New York Rangers	1		18,006	2:29	
{"gameDay": "2023-02-20",	7:00 PM	New York Islanders	4	Pittsburgh Penguins	2		18,094	2:28	
{"gameDay": "2023-02-20",	4:00 PM	Seattle Kraken	0	San Jose Sharks	4		13,445	2:19	
{"gameDay": "2023-02-21",	7:30 PM	Toronto Maple Leafs	6	Buffalo Sabres	3		18,641	2:24	
{"gameDay": "2023-02-21",	7:00 PM	St. Louis Blues	1	Carolina Hurricanes	4		18,142	2:25	
{"gameDay": "2023-02-21",	8:30 PM	Vegas Golden Knights	2	Chicago Blackhawks	3	SO	18,083	2:38	
{"gameDay": "2023-02-21",	9:00 PM	Philadelphia Flyers	2	Edmonton Oilers	4		18,347	2:24	
{"gameDay": "2023-02-21",	8:00 PM	Los Angeles Kings	1	Minnesota Wild	2		18,012	2:18	
{"gameDay": "2023-02-21",	7:00 PM	Montreal Canadiens	5	New Jersey Devils	2		14,854	2:22	
{"gameDay": "2023-02-21",	8:00 PM	Vancouver Canucks	4	Nashville Predators	5	SO	17,161	2:44	
{"gameDay": "2023-02-21",	7:00 PM	Anaheim Ducks	1	Tampa Bay Lightning	6		19,092	2:29	
{"gameDay": "2023-02-21",	7:00 PM	Detroit Red Wings	3	Washington Capitals	1		18,573	2:20	
{"gameDay": "2023-02-22",	9:30 PM	Calgary Flames	6	Arizona Coyotes	3		4,600	2:27	
{"gameDay": "2023-02-22",	9:30 PM	Chicago Blackhawks	4	Dallas Stars	3		18,326	2:25	
{"gameDay": "2023-02-22",	7:00 PM	Winnipeg Jets	1	New York Islanders	2		17,255	2:20	
{"gameDay": "2023-02-23",	7:00 PM	Minnesota Wild	2	Columbus Blue Jackets	0		17,997	2:24	
{"gameDay": "2023-02-23",	7:00 PM	New York Rangers	1	Detroit Red Wings	4		19,116	2:42	
{"gameDay": "2023-02-23",	7:00 PM	Los Angeles Kings	3	New Jersey Devils	4	OT	15,397	2:28	
{"gameDay": "2023-02-23",	7:00 PM	Edmonton Oilers	7	Pittsburgh Penguins	2		18,400	2:29	
{"gameDay": "2023-02-23",	10:00 PM	Boston Bruins	6	Seattle Kraken	5		17,151	2:38	
{"gameDay": "2023-02-23",	10:30 PM	Nashville Predators	6	San Jose Sharks	2		11,320	2:29	
{"gameDay": "2023-02-23",	8:00 PM	Vancouver Canucks	3	St. Louis Blues	2	OT	18,096	2:39	
{"gameDay": "2023-02-23",	7:00 PM	Buffalo Sabres	6	Tampa Bay Lightning	5	OT	19,092	2:30	
{"gameDay": "2023-02-23",	9:00 PM	Calgary Flames	3	Vegas Golden Knights	4	OT	17,609	2:29	
{"gameDay": "2023-02-23",	7:00 PM	Anaheim Ducks	4	Washington Capitals	2		18,573	2:39	
{"gameDay": "2023-02-24",	7:00 PM	Ottawa Senators	0	Carolina Hurricanes	4		18,788	2:28	
{"gameDay": "2023-02-24",	7:00 PM	Buffalo Sabres	3	Florida Panthers	1		18,075	2:32	
{"gameDay": "2023-02-24",	7:30 PM	Los Angeles Kings	3	New York Islanders	2		17,255	2:13	
{"gameDay": "2023-02-24",	7:00 PM	Montreal Canadiens	5	Philadelphia Flyers	2		19,661	2:24	
{"gameDay": "2023-02-24",	7:00 PM	Minnesota Wild	1	Toronto Maple Leafs	2	OT	18,575	2:28	
{"gameDay": "2023-02-24",	8:00 PM	Colorado Avalanche	5	Winnipeg Jets	1		14,157	2:26	
{"gameDay": "2023-02-25",	7:00 PM	Anaheim Ducks	3	Carolina Hurricanes	2		18,818	2:30	
{"gameDay": "2023-02-25",	12:30 PM	Edmonton Oilers	5	Columbus Blue Jackets	6		19,004	2:29	
{"gameDay": "2023-02-25",	10:00 PM	Calgary Flames	1	Colorado Avalanche	4		18,131	2:32	
{"gameDay": "2023-02-25",	8:00 PM	Tampa Bay Lightning	3	Detroit Red Wings	0		19,515	2:25	
{"gameDay": "2023-02-25",	7:00 PM	Ottawa Senators	5	Montreal Canadiens	2		21,105	2:30	
{"gameDay": "2023-02-25",	7:00 PM	Philadelphia Flyers	0	New Jersey Devils	7		16,514	2:23	
{"gameDay": "2023-02-25",	10:00 PM	Chicago Blackhawks	4	San Jose Sharks	3	SO	17,562	2:42	
{"gameDay": "2023-02-25",	3:30 PM	Pittsburgh Penguins	3	St. Louis Blues	2	OT	18,096	2:33	
{"gameDay": "2023-02-25",	7:00 PM	Boston Bruins	3	Vancouver Canucks	1		18,722	2:26	
{"gameDay": "2023-02-25",	10:00 PM	Dallas Stars	3	Vegas Golden Knights	2	SO	17,906	2:39	
{"gameDay": "2023-02-25",	1:00 PM	New York Rangers	3	Washington Capitals	6		18,573	2:27	
{"gameDay": "2023-02-26",	7:00 PM	Nashville Predators	6	Arizona Coyotes	2		4,600	2:25	
{"gameDay": "2023-02-26",	1:00 PM	Washington Capitals	4	Buffalo Sabres	7		19,070	2:30	
{"gameDay": "2023-02-26",	2:00 PM	Columbus Blue Jackets	2	Minnesota Wild	3	OT	19,063	2:30	
{"gameDay": "2023-02-26",	5:00 PM	Los Angeles Kings	2	New York Rangers	5		18,006	2:27	
{"gameDay": "2023-02-26",	6:00 PM	Tampa Bay Lightning	3	Pittsburgh Penguins	7		17,691	2:25	
{"gameDay": "2023-02-26",	7:00 PM	Toronto Maple Leafs	5	Seattle Kraken	1		17,151	2:16	
{"gameDay": "2023-02-26",	3:00 PM	New York Islanders	4	Winnipeg Jets	0		13,797	2:19	
{"gameDay": "2023-02-27",	10:00 PM	Chicago Blackhawks	2	Anaheim Ducks	4		14,462	2:21	
{"gameDay": "2023-02-27",	9:00 PM	Vegas Golden Knights	0	Colorado Avalanche	3		18,117	2:25	
{"gameDay": "2023-02-27",	8:30 PM	Vancouver Canucks	5	Dallas Stars	4	OT	17,876	2:33	
{"gameDay": "2023-02-27",	8:30 PM	Boston Bruins	3	Edmonton Oilers	2		18,347	2:29	
{"gameDay": "2023-02-27",	7:00 PM	Detroit Red Wings	2	Ottawa Senators	6		16,214	2:33	
{"gameDay": "2023-02-28",	9:00 PM	Chicago Blackhawks	1	Arizona Coyotes	4		4,600	2:22	
{"gameDay": "2023-02-28",	7:30 PM	Columbus Blue Jackets	5	Buffalo Sabres	3		13,661	2:24	
{"gameDay": "2023-02-28",	9:00 PM	Boston Bruins	4	Calgary Flames	3	OT	18,420	2:43	
{"gameDay": "2023-02-28",	8:00 PM	New York Islanders	1	Minnesota Wild	2	SO	18,431	2:28	
{"gameDay": "2023-02-28",	8:00 PM	Pittsburgh Penguins	3	Nashville Predators	1		17,435	2:19	
{"gameDay": "2023-02-28",	7:00 PM	Detroit Red Wings	1	Ottawa Senators	6		14,071	2:34	
{"gameDay": "2023-02-28",	10:30 PM	Montreal Canadiens	3	San Jose Sharks	1		11,470	2:24	
{"gameDay": "2023-02-28",	8:00 PM	Seattle Kraken	5	St. Louis Blues	3		18,096	2:23	
{"gameDay": "2023-02-28",	7:00 PM	Florida Panthers	4	Tampa Bay Lightning	1		19,092	2:31	
{"gameDay": "2023-02-28",	8:00 PM	Los Angeles Kings	6	Winnipeg Jets	5	SO	13,203	2:39	
{"gameDay": "2023-03-01",	10:00 PM	Washington Capitals	3	Anaheim Ducks	2	OT	14,279	2:33	
{"gameDay": "2023-03-01",	9:00 PM	New Jersey Devils	7	Colorado Avalanche	5		18,131	2:37	
{"gameDay": "2023-03-01",	8:30 PM	Arizona Coyotes	2	Dallas Stars	4		18,045	2:25	
{"gameDay": "2023-03-01",	8:00 PM	Toronto Maple Leafs	2	Edmonton Oilers	5		18,347	2:28	
{"gameDay": "2023-03-01",	7:30 PM	New York Rangers	3	Philadelphia Flyers	2	OT	19,534	2:24	
{"gameDay": "2023-03-01",	10:00 PM	Carolina Hurricanes	2	Vegas Golden Knights	3		17,669	2:27	
{"gameDay": "2023-03-02",	7:00 PM	Buffalo Sabres	1	Boston Bruins	7		17,850	2:31	
{"gameDay": "2023-03-02",	9:00 PM	Toronto Maple Leafs	2	Calgary Flames	1		19,289	2:30	
{"gameDay": "2023-03-02",	8:30 PM	Dallas Stars	5	Chicago Blackhawks	2		17,612	2:20	
{"gameDay": "2023-03-02",	7:00 PM	Seattle Kraken	5	Detroit Red Wings	4	OT	19,289	2:36	
{"gameDay": "2023-03-02",	7:00 PM	Nashville Predators	2	Florida Panthers	1		16,660	2:23	
{"gameDay": "2023-03-02",	10:30 PM	Montreal Canadiens	2	Los Angeles Kings	3		16,974	2:29	
{"gameDay": "2023-03-02",	7:00 PM	Ottawa Senators	5	New York Rangers	3		18,006	2:31	
{"gameDay": "2023-03-02",	10:30 PM	St. Louis Blues	6	San Jose Sharks	3		12,290	2:21	
{"gameDay": "2023-03-02",	7:00 PM	Pittsburgh Penguins	5	Tampa Bay Lightning	4	OT	19,092	2:41	
{"gameDay": "2023-03-02",	10:00 PM	Minnesota Wild	2	Vancouver Canucks	1		18,903	2:29	
{"gameDay": "2023-03-03",	10:00 PM	Montreal Canadiens	2	Anaheim Ducks	3		14,391	2:24	
{"gameDay": "2023-03-03",	9:30 PM	Carolina Hurricanes	6	Arizona Coyotes	1		4,600	2:22	
{"gameDay": "2023-03-03",	7:00 PM	Seattle Kraken	4	Columbus Blue Jackets	2		18,712	2:27	
{"gameDay": "2023-03-03",	9:00 PM	Winnipeg Jets	3	Edmonton Oilers	6		18,347	2:32	
{"gameDay": "2023-03-03",	10:00 PM	New Jersey Devils	3	Vegas Golden Knights	4	SO	18,033	2:37	
{"gameDay": "2023-03-04",	1:00 PM	New York Rangers	2	Boston Bruins	4		17,850	2:38	
{"gameDay": "2023-03-04",	12:30 PM	Tampa Bay Lightning	3	Buffalo Sabres	5		19,070	2:28	
{"gameDay": "2023-03-04",	10:00 PM	Minnesota Wild	3	Calgary Flames	0		18,605	2:30	
{"gameDay": "2023-03-04",	8:00 PM	Nashville Predators	3	Chicago Blackhawks	1		18,942	2:19	
{"gameDay": "2023-03-04",	3:30 PM	Colorado Avalanche	3	Dallas Stars	7		18,532	2:25	
{"gameDay": "2023-03-04",	6:00 PM	Pittsburgh Penguins	1	Florida Panthers	4		16,581	2:28	
{"gameDay": "2023-03-04",	10:30 PM	St. Louis Blues	2	Los Angeles Kings	4		18,230	2:20	
{"gameDay": "2023-03-04",	12:30 PM	Detroit Red Wings	1	New York Islanders	4		17,255	2:15	
{"gameDay": "2023-03-04",	7:00 PM	Columbus Blue Jackets	2	Ottawa Senators	5		18,073	2:21	
{"gameDay": "2023-03-04",	6:00 PM	Washington Capitals	8	San Jose Sharks	3		17,562	2:32	
{"gameDay": "2023-03-04",	7:00 PM	Toronto Maple Leafs	1	Vancouver Canucks	4		18,905	2:26	
{"gameDay": "2023-03-04",	7:00 PM	Edmonton Oilers	5	Winnipeg Jets	7		15,324	2:33	
{"gameDay": "2023-03-05",	7:00 PM	New Jersey Devils	5	Arizona Coyotes	4	OT	4,600	2:24	
{"gameDay": "2023-03-05",	3:00 PM	Tampa Bay Lightning	0	Carolina Hurricanes	6		18,965	2:34	
{"gameDay": "2023-03-05",	9:00 PM	Seattle Kraken	3	Colorado Avalanche	2	OT	18,107	2:28	
{"gameDay": "2023-03-05",	6:00 PM	Detroit Red Wings	1	Philadelphia Flyers	3		17,630	2:26	
{"gameDay": "2023-03-05",	6:00 PM	Montreal Canadiens	3	Vegas Golden Knights	4		18,049	2:16	
{"gameDay": "2023-03-06",	7:30 PM	Edmonton Oilers	3	Buffalo Sabres	2		17,634	2:26	
{"gameDay": "2023-03-06",	9:00 PM	Ottawa Senators	0	Chicago Blackhawks	5		15,049	2:27	
{"gameDay": "2023-03-06",	8:30 PM	Calgary Flames	5	Dallas Stars	4		18,164	2:32	
{"gameDay": "2023-03-06",	10:30 PM	Washington Capitals	2	Los Angeles Kings	4		17,577	2:29	
{"gameDay": "2023-03-06",	10:30 PM	Nashville Predators	3	Vancouver Canucks	4	SO	18,525	2:33	
{"gameDay": "2023-03-06",	7:30 PM	San Jose Sharks	3	Winnipeg Jets	2	OT	13,026	2:30	
{"gameDay": "2023-03-07",	9:00 PM	St. Louis Blues	2	Arizona Coyotes	6		4,600	2:30	
{"gameDay": "2023-03-07",	9:00 PM	San Jose Sharks	0	Colorado Avalanche	6		18,092	2:26	
{"gameDay": "2023-03-07",	7:00 PM	Vegas Golden Knights	1	Florida Panthers	2		15,100	2:22	
{"gameDay": "2023-03-07",	8:00 PM	Calgary Flames	1	Minnesota Wild	0	SO	18,998	2:43	
{"gameDay": "2023-03-07",	7:00 PM	Carolina Hurricanes	4	Montreal Canadiens	3	SO	21,105	2:48	
{"gameDay": "2023-03-07",	7:00 PM	Toronto Maple Leafs	4	New Jersey Devils	3		16,514	2:21	
{"gameDay": "2023-03-07",	7:30 PM	Buffalo Sabres	2	New York Islanders	3		17,255	2:24	
{"gameDay": "2023-03-07",	7:00 PM	Columbus Blue Jackets	4	Pittsburgh Penguins	5	OT	17,400	2:32	
{"gameDay": "2023-03-07",	10:00 PM	Anaheim Ducks	2	Seattle Kraken	5		17,151	2:26	
{"gameDay": "2023-03-07",	7:00 PM	Philadelphia Flyers	2	Tampa Bay Lightning	5		19,092	2:36	
{"gameDay": "2023-03-08",	7:30 PM	Chicago Blackhawks	3	Detroit Red Wings	4		19,181	2:30	
{"gameDay": "2023-03-08",	10:00 PM	Anaheim Ducks	2	Vancouver Canucks	3	OT	18,617	2:21	
{"gameDay": "2023-03-08",	7:30 PM	Minnesota Wild	4	Winnipeg Jets	2		13,148	2:18	
{"gameDay": "2023-03-09",	9:00 PM	Nashville Predators	1	Arizona Coyotes	4		4,600	2:27	
{"gameDay": "2023-03-09",	7:30 PM	Edmonton Oilers	3	Boston Bruins	2		17,850	2:25	
{"gameDay": "2023-03-09",	7:00 PM	Dallas Stars	10	Buffalo Sabres	4		14,174	2:29	
{"gameDay": "2023-03-09",	7:00 PM	Philadelphia Flyers	0	Carolina Hurricanes	1		18,680	2:19	
{"gameDay": "2023-03-09",	9:00 PM	Los Angeles Kings	5	Colorado Avalanche	2		18,117	2:23	
{"gameDay": "2023-03-09",	7:00 PM	New York Rangers	4	Montreal Canadiens	3	SO	21,105	2:36	
{"gameDay": "2023-03-09",	7:00 PM	New York Islanders	4	Pittsburgh Penguins	3	OT	17,557	2:27	
{"gameDay": "2023-03-09",	10:00 PM	Ottawa Senators	5	Seattle Kraken	4		17,151	2:34	
{"gameDay": "2023-03-09",	8:00 PM	San Jose Sharks	2	St. Louis Blues	4		18,096	2:34	
{"gameDay": "2023-03-09",	7:00 PM	Vegas Golden Knights	4	Tampa Bay Lightning	3	OT	19,092	2:43	
{"gameDay": "2023-03-09",	7:00 PM	New Jersey Devils	3	Washington Capitals	2	SO	18,573	2:43	
{"gameDay": "2023-03-10",	9:00 PM	Anaheim Ducks	3	Calgary Flames	1		18,013	2:13	
{"gameDay": "2023-03-10",	7:00 PM	Chicago Blackhawks	3	Florida Panthers	4	OT	17,468	2:26	
{"gameDay": "2023-03-11",	1:00 PM	Detroit Red Wings	2	Boston Bruins	3		17,850	2:36	
{"gameDay": "2023-03-11",	5:00 PM	New York Rangers	2	Buffalo Sabres	1	OT	19,070	2:25	
{"gameDay": "2023-03-11",	7:00 PM	Vegas Golden Knights	4	Carolina Hurricanes	0		18,813	2:30	
{"gameDay": "2023-03-11",	7:00 PM	St. Louis Blues	5	Columbus Blue Jackets	2		18,222	2:30	
{"gameDay": "2023-03-11",	6:00 PM	Arizona Coyotes	2	Colorado Avalanche	3	OT	18,124	2:29	
{"gameDay": "2023-03-11",	7:00 PM	Winnipeg Jets	5	Florida Panthers	4	OT	16,340	2:43	
{"gameDay": "2023-03-11",	10:30 PM	Nashville Predators	2	Los Angeles Kings	1	SO	18,230	2:35	
{"gameDay": "2023-03-11",	7:00 PM	New Jersey Devils	3	Montreal Canadiens	1		21,105	2:23	
{"gameDay": "2023-03-11",	7:30 PM	Washington Capitals	5	New York Islanders	1		17,255	2:22	
{"gameDay": "2023-03-11",	3:30 PM	Philadelphia Flyers	1	Pittsburgh Penguins	5		18,254	2:21	
{"gameDay": "2023-03-11",	10:00 PM	Dallas Stars	4	Seattle Kraken	3	OT	17,151	2:28	
{"gameDay": "2023-03-11",	10:30 PM	Minnesota Wild	5	San Jose Sharks	2		17,562	2:35	
{"gameDay": "2023-03-11",	7:00 PM	Chicago Blackhawks	1	Tampa Bay Lightning	3		19,092	2:17	
{"gameDay": "2023-03-11",	7:00 PM	Edmonton Oilers	4	Toronto Maple Leafs	7		19,549	2:31	
{"gameDay": "2023-03-11",	10:00 PM	Ottawa Senators	2	Vancouver Canucks	5		18,813	2:38	
{"gameDay": "2023-03-12",	9:30 PM	Nashville Predators	5	Anaheim Ducks	4	OT	15,098	2:23	
{"gameDay": "2023-03-12",	9:30 PM	Minnesota Wild	4	Arizona Coyotes	5	OT	4,600	2:36	
{"gameDay": "2023-03-12",	9:00 PM	Ottawa Senators	1	Calgary Flames	5		17,031	2:31	
{"gameDay": "2023-03-12",	1:30 PM	Boston Bruins	3	Detroit Red Wings	5		19,515	2:36	
{"gameDay": "2023-03-12",	7:00 PM	Carolina Hurricanes	0	New Jersey Devils	3		16,514	2:21	
{"gameDay": "2023-03-12",	4:00 PM	New York Rangers	2	Pittsburgh Penguins	3	OT	18,364	2:37	
{"gameDay": "2023-03-12",	7:00 PM	Vegas Golden Knights	5	St. Louis Blues	3		18,096	2:25	
{"gameDay": "2023-03-12",	7:00 PM	Winnipeg Jets	3	Tampa Bay Lightning	2		19,092	2:26	
{"gameDay": "2023-03-13",	7:30 PM	Colorado Avalanche	8	Montreal Canadiens	4		21,105	2:30	
{"gameDay": "2023-03-13",	10:00 PM	Dallas Stars	5	Seattle Kraken	2		17,151	2:27	
{"gameDay": "2023-03-13",	7:30 PM	Buffalo Sabres	4	Toronto Maple Leafs	3		18,688	2:25	
{"gameDay": "2023-03-14",	10:00 PM	Calgary Flames	3	Arizona Coyotes	4	OT	4,600	2:35	
{"gameDay": "2023-03-14",	7:00 PM	Winnipeg Jets	3	Carolina Hurricanes	5		18,680	2:14	
{"gameDay": "2023-03-14",	8:30 PM	Boston Bruins	3	Chicago Blackhawks	6		20,188	2:42	
{"gameDay": "2023-03-14",	9:00 PM	Ottawa Senators	3	Edmonton Oilers	6		18,347	2:30	
{"gameDay": "2023-03-14",	10:30 PM	New York Islanders	2	Los Angeles Kings	5		15,989	2:26	
{"gameDay": "2023-03-14",	7:00 PM	Tampa Bay Lightning	4	New Jersey Devils	1		15,622	2:22	
{"gameDay": "2023-03-14",	8:00 PM	Detroit Red Wings	1	Nashville Predators	2		17,644	2:28	
{"gameDay": "2023-03-14",	7:00 PM	Washington Capitals	3	New York Rangers	5		17,476	2:34	
{"gameDay": "2023-03-14",	7:00 PM	Vegas Golden Knights	5	Philadelphia Flyers	3		17,192	2:22	
{"gameDay": "2023-03-14",	7:00 PM	Montreal Canadiens	6	Pittsburgh Penguins	4		17,185	2:27	
{"gameDay": "2023-03-14",	10:30 PM	Columbus Blue Jackets	6	San Jose Sharks	5	OT	10,127	2:35	
{"gameDay": "2023-03-14",	10:00 PM	Dallas Stars	2	Vancouver Canucks	5		18,794	2:20	
{"gameDay": "2023-03-15",	10:00 PM	New York Islanders	6	Anaheim Ducks	3		13,552	2:17	
{"gameDay": "2023-03-15",	9:30 PM	Minnesota Wild	8	St. Louis Blues	5		18,096	2:44	
{"gameDay": "2023-03-15",	7:00 PM	Colorado Avalanche	2	Toronto Maple Leafs	1	SO	19,102	2:35	
{"gameDay": "2023-03-15",	7:00 PM	Buffalo Sabres	4	Washington Capitals	5	SO	18,573	2:44	
{"gameDay": "2023-03-16",	10:00 PM	Vancouver Canucks	2	Arizona Coyotes	3		4,600	2:23	
{"gameDay": "2023-03-16",	9:00 PM	Dallas Stars	1	Edmonton Oilers	4		18,347	2:22	
{"gameDay": "2023-03-16",	7:00 PM	Montreal Canadiens	5	Florida Panthers	9		17,372	2:34	
{"gameDay": "2023-03-16",	10:30 PM	Columbus Blue Jackets	1	Los Angeles Kings	4		15,460	2:18	
{"gameDay": "2023-03-16",	7:00 PM	Tampa Bay Lightning	4	New Jersey Devils	3	SO	16,094	2:41	
{"gameDay": "2023-03-16",	8:00 PM	Chicago Blackhawks	2	Nashville Predators	1		17,538	2:26	
{"gameDay": "2023-03-16",	7:00 PM	Pittsburgh Penguins	2	New York Rangers	4		18,006	2:26	
{"gameDay": "2023-03-16",	7:00 PM	Colorado Avalanche	5	Ottawa Senators	4		19,158	2:39	
{"gameDay": "2023-03-16",	10:30 PM	Seattle Kraken	2	San Jose Sharks	1	OT	11,720	2:21	
{"gameDay": "2023-03-16",	10:00 PM	Calgary Flames	7	Vegas Golden Knights	2		18,207	2:20	
{"gameDay": "2023-03-16",	8:00 PM	Boston Bruins	3	Winnipeg Jets	0		14,555	2:21	
{"gameDay": "2023-03-17",	10:00 PM	Columbus Blue Jackets	4	Anaheim Ducks	7		13,475	2:26	
{"gameDay": "2023-03-17",	7:00 PM	Buffalo Sabres	2	Philadelphia Flyers	5		18,051	2:23	
{"gameDay": "2023-03-17",	7:00 PM	Carolina Hurricanes	2	Toronto Maple Leafs	5		18,607	2:25	
{"gameDay": "2023-03-17",	7:00 PM	St. Louis Blues	5	Washington Capitals	2		18,573	2:21	
{"gameDay": "2023-03-18",	10:30 PM	Chicago Blackhawks	2	Arizona Coyotes	4		4,600	2:19	
{"gameDay": "2023-03-18",	10:00 PM	Dallas Stars	6	Calgary Flames	5	OT	17,909	2:34	
{"gameDay": "2023-03-18",	1:00 PM	Colorado Avalanche	5	Detroit Red Wings	1		19,515	2:35	
{"gameDay": "2023-03-18",	6:00 PM	New Jersey Devils	2	Florida Panthers	4		17,321	2:27	
{"gameDay": "2023-03-18",	10:00 PM	Vancouver Canucks	3	Los Angeles Kings	2	SO	18,230	2:25	
{"gameDay": "2023-03-18",	2:00 PM	Boston Bruins	5	Minnesota Wild	2		19,329	2:35	
{"gameDay": "2023-03-18",	2:00 PM	Winnipeg Jets	3	Nashville Predators	2	OT	17,402	2:25	
{"gameDay": "2023-03-18",	8:00 PM	Pittsburgh Penguins	0	New York Rangers	6		18,006	2:24	
{"gameDay": "2023-03-18",	7:00 PM	Toronto Maple Leafs	5	Ottawa Senators	4	SO	20,092	2:48	
{"gameDay": "2023-03-18",	5:00 PM	Carolina Hurricanes	5	Philadelphia Flyers	4	OT	18,975	2:30	
{"gameDay": "2023-03-18",	4:00 PM	Edmonton Oilers	6	Seattle Kraken	4		17,171	2:33	
{"gameDay": "2023-03-18",	10:30 PM	New York Islanders	4	San Jose Sharks	1		16,880	2:20	
{"gameDay": "2023-03-18",	7:00 PM	Montreal Canadiens	3	Tampa Bay Lightning	5		19,092	2:35	
{"gameDay": "2023-03-19",	8:00 PM	Vancouver Canucks	2	Anaheim Ducks	1		14,842	2:20	
{"gameDay": "2023-03-19",	1:00 PM	Boston Bruins	7	Buffalo Sabres	0		19,070	2:23	
{"gameDay": "2023-03-19",	2:00 PM	Washington Capitals	3	Minnesota Wild	5		19,231	2:39	
{"gameDay": "2023-03-19",	7:00 PM	Nashville Predators	0	New York Rangers	7		18,006	2:10	
{"gameDay": "2023-03-19",	7:00 PM	Winnipeg Jets	0	St. Louis Blues	3		18,096	2:24	
{"gameDay": "2023-03-19",	7:00 PM	New Jersey Devils	5	Tampa Bay Lightning	2		19,092	2:29	
{"gameDay": "2023-03-19",	4:00 PM	Columbus Blue Jackets	2	Vegas Golden Knights	7		18,004	2:29	
{"gameDay": "2023-03-20",	9:00 PM	Chicago Blackhawks	0	Colorado Avalanche	5		18,121	2:22	
{"gameDay": "2023-03-20",	7:00 PM	Florida Panthers	5	Detroit Red Wings	2		15,198	2:22	
{"gameDay": "2023-03-20",	9:30 PM	San Jose Sharks	4	Edmonton Oilers	5	OT	18,347	2:51	
{"gameDay": "2023-03-20",	10:30 PM	Calgary Flames	2	Los Angeles Kings	8		16,404	2:28	
{"gameDay": "2023-03-20",	7:00 PM	Ottawa Senators	2	Pittsburgh Penguins	1		17,080	2:25	
{"gameDay": "2023-03-21",	10:00 PM	Calgary Flames	5	Anaheim Ducks	1		12,974	2:30	
{"gameDay": "2023-03-21",	7:00 PM	Ottawa Senators	1	Boston Bruins	2		17,850	2:29	
{"gameDay": "2023-03-21",	7:00 PM	Nashville Predators	7	Buffalo Sabres	3		13,043	2:18	
{"gameDay": "2023-03-21",	8:30 PM	Seattle Kraken	5	Dallas Stars	4	OT	18,532	2:30	
{"gameDay": "2023-03-21",	7:00 PM	Tampa Bay Lightning	2	Montreal Canadiens	3		21,105	2:24	
{"gameDay": "2023-03-21",	7:00 PM	Minnesota Wild	2	New Jersey Devils	1	OT	16,124	2:30	
{"gameDay": "2023-03-21",	7:30 PM	Toronto Maple Leafs	2	New York Islanders	7		17,255	2:26	
{"gameDay": "2023-03-21",	7:00 PM	Carolina Hurricanes	3	New York Rangers	2		18,006	2:28	
{"gameDay": "2023-03-21",	7:00 PM	Florida Panthers	3	Philadelphia Flyers	6		16,479	2:29	
{"gameDay": "2023-03-21",	8:00 PM	Detroit Red Wings	3	St. Louis Blues	2	SO	18,096	2:33	
{"gameDay": "2023-03-21",	10:00 PM	Vegas Golden Knights	4	Vancouver Canucks	3		18,757	2:27	
{"gameDay": "2023-03-21",	8:00 PM	Arizona Coyotes	1	Winnipeg Jets	2		13,216	2:22	
{"gameDay": "2023-03-21",	7:00 PM	Columbus Blue Jackets	7	Washington Capitals	6	OT	18,573	2:25	
{"gameDay": "2023-03-22",	8:00 PM	Pittsburgh Penguins	5	Colorado Avalanche	2		18,130	2:31	
{"gameDay": "2023-03-22",	10:30 PM	Arizona Coyotes	3	Edmonton Oilers	4	OT	18,225	2:27	
{"gameDay": "2023-03-23",	10:00 PM	Winnipeg Jets	3	Anaheim Ducks	2		12,331	2:28	
{"gameDay": "2023-03-23",	7:00 PM	Montreal Canadiens	2	Boston Bruins	4		17,850	2:35	
{"gameDay": "2023-03-23",	7:00 PM	New York Rangers	2	Carolina Hurricanes	1		18,792	2:26	
{"gameDay": "2023-03-23",	9:00 PM	Vegas Golden Knights	3	Calgary Flames	2		18,157	2:40	
{"gameDay": "2023-03-23",	9:00 PM	Pittsburgh Penguins	2	Dallas Stars	3		18,532	2:35	
{"gameDay": "2023-03-23",	7:00 PM	St. Louis Blues	4	Detroit Red Wings	3		17,036	2:26	
{"gameDay": "2023-03-23",	7:00 PM	Toronto Maple Leafs	6	Florida Panthers	2		16,704	2:30	
{"gameDay": "2023-03-23",	8:00 PM	Seattle Kraken	1	Nashville Predators	2	SO	17,436	2:25	
{"gameDay": "2023-03-23",	7:00 PM	Tampa Bay Lightning	2	Ottawa Senators	7		16,133	2:32	
{"gameDay": "2023-03-23",	6:30 PM	Minnesota Wild	4	Philadelphia Flyers	5	SO	18,495	2:34	
{"gameDay": "2023-03-23",	10:00 PM	San Jose Sharks	2	Vancouver Canucks	7		18,919	2:22	
{"gameDay": "2023-03-23",	7:00 PM	Chicago Blackhawks	1	Washington Capitals	6		18,573	2:19	
{"gameDay": "2023-03-24",	7:00 PM	New Jersey Devils	4	Buffalo Sabres	5		17,101	2:29	
{"gameDay": "2023-03-24",	7:00 PM	New York Islanders	4	Columbus Blue Jackets	5	OT	18,940	2:29	
{"gameDay": "2023-03-24",	9:00 PM	Arizona Coyotes	1	Colorado Avalanche	3		18,136	2:24	
{"gameDay": "2023-03-25",	10:30 PM	St. Louis Blues	6	Anaheim Ducks	3		15,237	2:28	
{"gameDay": "2023-03-25",	1:00 PM	Tampa Bay Lightning	1	Boston Bruins	2		17,850	2:29	
{"gameDay": "2023-03-25",	7:00 PM	Toronto Maple Leafs	3	Carolina Hurricanes	5		18,895	2:27	
{"gameDay": "2023-03-25",	4:00 PM	San Jose Sharks	3	Calgary Flames	5		18,153	2:27	
{"gameDay": "2023-03-25",	7:00 PM	Vancouver Canucks	3	Dallas Stars	1		18,532	2:26	
{"gameDay": "2023-03-25",	10:00 PM	Vegas Golden Knights	4	Edmonton Oilers	3	OT	18,347	2:37	
{"gameDay": "2023-03-25",	5:00 PM	New York Rangers	4	Florida Panthers	3		18,635	2:37	
{"gameDay": "2023-03-25",	4:00 PM	Winnipeg Jets	1	Los Angeles Kings	4		18,230	2:22	
{"gameDay": "2023-03-25",	5:00 PM	Chicago Blackhawks	1	Minnesota Wild	3		19,312	2:21	
{"gameDay": "2023-03-25",	7:00 PM	Columbus Blue Jackets	2	Montreal Canadiens	8		21,105	2:25	
{"gameDay": "2023-03-25",	7:00 PM	Ottawa Senators	3	New Jersey Devils	5		16,514	2:35	
{"gameDay": "2023-03-25",	2:00 PM	Seattle Kraken	7	Nashville Predators	2		17,335	2:24	
{"gameDay": "2023-03-25",	5:00 PM	Buffalo Sabres	2	New York Islanders	0		17,255	2:20	
{"gameDay": "2023-03-25",	1:00 PM	Detroit Red Wings	0	Philadelphia Flyers	3		18,216	2:23	
{"gameDay": "2023-03-25",	8:00 PM	Washington Capitals	3	Pittsburgh Penguins	4		18,456	2:35	
{"gameDay": "2023-03-26",	3:00 PM	Colorado Avalanche	4	Arizona Coyotes	3	SO	4,600	2:41	
{"gameDay": "2023-03-26",	5:00 PM	Boston Bruins	4	Carolina Hurricanes	3	SO	18,958	2:48	
{"gameDay": "2023-03-26",	6:00 PM	Vancouver Canucks	4	Chicago Blackhawks	2		18,276	2:21	
{"gameDay": "2023-03-26",	10:30 PM	St. Louis Blues	6	Los Angeles Kings	7		18,230	2:27	
{"gameDay": "2023-03-26",	6:00 PM	Toronto Maple Leafs	3	Nashville Predators	2		17,411	2:20	
{"gameDay": "2023-03-27",	10:00 PM	Colorado Avalanche	5	Anaheim Ducks	1		13,158	2:25	
{"gameDay": "2023-03-27",	10:00 PM	Edmonton Oilers	5	Arizona Coyotes	4		4,600	2:32	
{"gameDay": "2023-03-27",	7:00 PM	Montreal Canadiens	4	Buffalo Sabres	3	SO	16,435	2:46	
{"gameDay": "2023-03-27",	8:00 PM	Seattle Kraken	1	Minnesota Wild	5		19,291	2:28	
{"gameDay": "2023-03-27",	7:30 PM	New Jersey Devils	1	New York Islanders	5		17,255	2:26	
{"gameDay": "2023-03-27",	7:00 PM	Florida Panthers	2	Ottawa Senators	5		16,047	2:33	
{"gameDay": "2023-03-28",	7:00 PM	Nashville Predators	2	Boston Bruins	1		17,850	2:34	
{"gameDay": "2023-03-28",	7:00 PM	Tampa Bay Lightning	4	Carolina Hurricanes	0		18,680	2:26	
{"gameDay": "2023-03-28",	9:00 PM	Los Angeles Kings	1	Calgary Flames	2		17,106	2:30	
{"gameDay": "2023-03-28",	8:30 PM	Dallas Stars	4	Chicago Blackhawks	1		14,060	2:22	
{"gameDay": "2023-03-28",	7:00 PM	Pittsburgh Penguins	4	Detroit Red Wings	7		19,353	2:40	
{"gameDay": "2023-03-28",	7:00 PM	Columbus Blue Jackets	2	New York Rangers	6		18,006	2:25	
{"gameDay": "2023-03-28",	7:00 PM	Montreal Canadiens	2	Philadelphia Flyers	3		18,916	2:23	
{"gameDay": "2023-03-28",	10:30 PM	Winnipeg Jets	0	San Jose Sharks	3		10,387	2:18	
{"gameDay": "2023-03-28",	8:00 PM	Vancouver Canucks	5	St. Louis Blues	6	OT	18,096	2:35	
{"gameDay": "2023-03-28",	10:00 PM	Edmonton Oilers	7	Vegas Golden Knights	4		18,391	2:30	
{"gameDay": "2023-03-29",	10:00 PM	Minnesota Wild	4	Colorado Avalanche	2		18,140	2:27	
{"gameDay": "2023-03-29",	7:30 PM	Florida Panthers	3	Toronto Maple Leafs	2	OT	18,894	2:34	
{"gameDay": "2023-03-29",	7:30 PM	New York Islanders	2	Washington Capitals	1	SO	18,573	2:38	
{"gameDay": "2023-03-30",	7:00 PM	Columbus Blue Jackets	1	Boston Bruins	2	OT	17,850	2:31	
{"gameDay": "2023-03-30",	8:30 PM	St. Louis Blues	5	Chicago Blackhawks	3		16,465	2:18	
{"gameDay": "2023-03-30",	7:30 PM	Carolina Hurricanes	2	Detroit Red Wings	3		19,183	2:27	
{"gameDay": "2023-03-30",	9:00 PM	Los Angeles Kings	0	Edmonton Oilers	2		18,347	2:36	
{"gameDay": "2023-03-30",	7:00 PM	Florida Panthers	5	Montreal Canadiens	2		21,105	2:18	
{"gameDay": "2023-03-30",	7:00 PM	New York Rangers	1	New Jersey Devils	2		16,669	2:25	
{"gameDay": "2023-03-30",	7:00 PM	Philadelphia Flyers	4	Ottawa Senators	5	OT	17,518	2:39	
{"gameDay": "2023-03-30",	7:00 PM	Nashville Predators	0	Pittsburgh Penguins	2		17,482	2:23	
{"gameDay": "2023-03-30",	10:00 PM	Anaheim Ducks	1	Seattle Kraken	4		17,151	2:18	
{"gameDay": "2023-03-30",	10:30 PM	Vegas Golden Knights	3	San Jose Sharks	4	OT	15,232	2:21	
{"gameDay": "2023-03-30",	7:00 PM	Washington Capitals	1	Tampa Bay Lightning	5		19,092	2:26	
{"gameDay": "2023-03-31",	10:30 PM	Dallas Stars	5	Arizona Coyotes	2		4,600	2:21	
{"gameDay": "2023-03-31",	7:00 PM	New York Rangers	2	Buffalo Sabres	3	OT	18,009	2:27	
{"gameDay": "2023-03-31",	10:00 PM	Calgary Flames	5	Vancouver Canucks	4	OT	18,811	2:38	
{"gameDay": "2023-03-31",	8:00 PM	Detroit Red Wings	2	Winnipeg Jets	6		14,389	2:18	
{"gameDay": "2023-04-01",	10:00 PM	San Jose Sharks	7	Arizona Coyotes	2		4,600	2:30	
{"gameDay": "2023-04-01",	7:00 PM	Florida Panthers	7	Columbus Blue Jackets	0		17,860	2:21	
{"gameDay": "2023-04-01",	8:00 PM	New Jersey Devils	6	Chicago Blackhawks	3		18,778	2:20	
{"gameDay": "2023-04-01",	9:00 PM	Dallas Stars	2	Colorado Avalanche	5		18,139	2:27	
{"gameDay": "2023-04-01",	10:00 PM	Anaheim Ducks	0	Edmonton Oilers	6		18,347	2:35	
{"gameDay": "2023-04-01",	7:00 PM	Carolina Hurricanes	3	Montreal Canadiens	0		21,105	2:21	
{"gameDay": "2023-04-01",	1:00 PM	St. Louis Blues	1	Nashville Predators	6		17,348	2:25	
{"gameDay": "2023-04-01",	7:00 PM	Toronto Maple Leafs	3	Ottawa Senators	0		20,097	2:20	
{"gameDay": "2023-04-01",	7:00 PM	Buffalo Sabres	6	Philadelphia Flyers	3		19,404	2:24	
{"gameDay": "2023-04-01",	3:00 PM	Boston Bruins	4	Pittsburgh Penguins	3		18,322	2:36	
{"gameDay": "2023-04-01",	10:00 PM	Los Angeles Kings	3	Seattle Kraken	1		17,151	2:28	
{"gameDay": "2023-04-01",	7:00 PM	New York Islanders	0	Tampa Bay Lightning	5		19,092	2:26	
{"gameDay": "2023-04-01",	10:00 PM	Minnesota Wild	1	Vegas Golden Knights	4		18,398	2:23	
{"gameDay": "2023-04-02",	6:00 PM	New York Islanders	1	Carolina Hurricanes	2		18,725	2:27	
{"gameDay": "2023-04-02",	6:00 PM	Ottawa Senators	3	Columbus Blue Jackets	4	OT	18,872	2:28	
{"gameDay": "2023-04-02",	8:00 PM	Anaheim Ducks	4	Calgary Flames	5		17,439	2:32	
{"gameDay": "2023-04-02",	6:00 PM	Philadelphia Flyers	2	Pittsburgh Penguins	4		18,310	2:29	
{"gameDay": "2023-04-02",	3:30 PM	Boston Bruins	4	St. Louis Blues	3	SO	18,096	2:48	
{"gameDay": "2023-04-02",	7:00 PM	Detroit Red Wings	5	Toronto Maple Leafs	2		18,675	2:30	
{"gameDay": "2023-04-02",	8:00 PM	Los Angeles Kings	4	Vancouver Canucks	1		18,725	2:21	
{"gameDay": "2023-04-02",	7:00 PM	New Jersey Devils	1	Winnipeg Jets	6		14,107	2:22	
{"gameDay": "2023-04-02",	1:00 PM	New York Rangers	5	Washington Capitals	2		18,573	2:27	
{"gameDay": "2023-04-03",	8:30 PM	Nashville Predators	1	Dallas Stars	5		18,056	2:31	
{"gameDay": "2023-04-03",	8:00 PM	Vegas Golden Knights	4	Minnesota Wild	3	SO	19,176	2:42	
{"gameDay": "2023-04-03",	10:00 PM	Arizona Coyotes	1	Seattle Kraken	8		17,151	2:33	
{"gameDay": "2023-04-04",	7:00 PM	Ottawa Senators	2	Carolina Hurricanes	3	OT	18,680	2:37	
{"gameDay": "2023-04-04",	9:00 PM	Chicago Blackhawks	4	Calgary Flames	3		17,137	2:24	
{"gameDay": "2023-04-04",	7:00 PM	Buffalo Sabres	1	Florida Panthers	2		17,255	2:33	
{"gameDay": "2023-04-04",	10:30 PM	Edmonton Oilers	3	Los Angeles Kings	1		18,230	2:32	
{"gameDay": "2023-04-04",	7:00 PM	Detroit Red Wings	5	Montreal Canadiens	0		21,105	2:16	
{"gameDay": "2023-04-04",	7:00 PM	Pittsburgh Penguins	1	New Jersey Devils	5		16,514	2:25	
{"gameDay": "2023-04-04",	8:00 PM	Vegas Golden Knights	2	Nashville Predators	3	OT	17,420	2:31	
{"gameDay": "2023-04-04",	10:30 PM	Colorado Avalanche	4	San Jose Sharks	3	OT	11,067	2:31	
{"gameDay": "2023-04-04",	8:00 PM	Philadelphia Flyers	2	St. Louis Blues	4		18,096	2:28	
{"gameDay": "2023-04-04",	7:00 PM	Columbus Blue Jackets	2	Toronto Maple Leafs	4		18,597	2:23	
{"gameDay": "2023-04-04",	10:00 PM	Seattle Kraken	5	Vancouver Canucks	2		18,722	2:21	
{"gameDay": "2023-04-05",	10:00 PM	Edmonton Oilers	3	Anaheim Ducks	1		16,018	2:22	
{"gameDay": "2023-04-05",	7:30 PM	Tampa Bay Lightning	3	New York Rangers	6		18,006	2:36	
{"gameDay": "2023-04-05",	7:30 PM	Calgary Flames	3	Winnipeg Jets	1		14,077	2:43	
{"gameDay": "2023-04-06",	7:00 PM	Toronto Maple Leafs	1	Boston Bruins	2	OT	17,850	2:29	
{"gameDay": "2023-04-06",	8:30 PM	Philadelphia Flyers	1	Dallas Stars	4		18,532	2:22	
{"gameDay": "2023-04-06",	7:00 PM	Buffalo Sabres	7	Detroit Red Wings	6	SO	19,367	2:48	
{"gameDay": "2023-04-06",	7:00 PM	Ottawa Senators	2	Florida Panthers	7		16,675	2:59	
{"gameDay": "2023-04-06",	7:00 PM	Washington Capitals	2	Montreal Canadiens	6		21,105	2:36	
{"gameDay": "2023-04-06",	7:00 PM	Columbus Blue Jackets	1	New Jersey Devils	8		16,514	2:26	
{"gameDay": "2023-04-06",	8:00 PM	Carolina Hurricanes	0	Nashville Predators	3		17,762	2:26	
{"gameDay": "2023-04-06",	7:30 PM	Tampa Bay Lightning	1	New York Islanders	6		17,255	2:30	
{"gameDay": "2023-04-06",	7:00 PM	Minnesota Wild	1	Pittsburgh Penguins	4		18,417	2:28	
{"gameDay": "2023-04-06",	10:30 PM	Arizona Coyotes	2	Seattle Kraken	4		17,151	2:37	
{"gameDay": "2023-04-06",	10:30 PM	Colorado Avalanche	6	San Jose Sharks	2		12,772	2:22	
{"gameDay": "2023-04-06",	8:00 PM	New York Rangers	2	St. Louis Blues	3	OT	18,096	2:24	
{"gameDay": "2023-04-06",	10:00 PM	Chicago Blackhawks	0	Vancouver Canucks	3		18,945	2:19	
{"gameDay": "2023-04-06",	10:00 PM	Los Angeles Kings	2	Vegas Golden Knights	5		18,404	2:38	
{"gameDay": "2023-04-08",	5:30 PM	Anaheim Ducks	4	Arizona Coyotes	5	OT	4,600	2:36	
{"gameDay": "2023-04-08",	8:00 PM	New Jersey Devils	1	Boston Bruins	2		17,850	2:35	
{"gameDay": "2023-04-08",	12:30 PM	Carolina Hurricanes	3	Buffalo Sabres	4		18,199	2:24	
{"gameDay": "2023-04-08",	7:00 PM	New York Rangers	4	Columbus Blue Jackets	0		18,824	2:23	
{"gameDay": "2023-04-08",	3:30 PM	Vegas Golden Knights	1	Dallas Stars	2	SO	18,532	2:38	
{"gameDay": "2023-04-08",	1:00 PM	Pittsburgh Penguins	5	Detroit Red Wings	1		19,515	2:20	
{"gameDay": "2023-04-08",	10:30 PM	Colorado Avalanche	4	Los Angeles Kings	3		18,230	2:28	
{"gameDay": "2023-04-08",	8:00 PM	St. Louis Blues	3	Minnesota Wild	5		19,191	2:22	
{"gameDay": "2023-04-08",	7:30 PM	Philadelphia Flyers	0	New York Islanders	4		17,255	2:21	
{"gameDay": "2023-04-08",	7:00 PM	Tampa Bay Lightning	4	Ottawa Senators	7		19,044	2:29	
{"gameDay": "2023-04-08",	10:00 PM	Chicago Blackhawks	3	Seattle Kraken	7		17,151	2:29	
{"gameDay": "2023-04-08",	4:00 PM	Edmonton Oilers	6	San Jose Sharks	1		17,562	2:19	
{"gameDay": "2023-04-08",	7:00 PM	Montreal Canadiens	1	Toronto Maple Leafs	7		19,033	2:29	
{"gameDay": "2023-04-08",	10:00 PM	Calgary Flames	2	Vancouver Canucks	3	SO	18,852	2:38	
{"gameDay": "2023-04-08",	7:00 PM	Nashville Predators	0	Winnipeg Jets	2		14,075	2:22	
{"gameDay": "2023-04-08",	7:00 PM	Florida Panthers	4	Washington Capitals	2		18,573	2:44	
{"gameDay": "2023-04-09",	8:30 PM	Colorado Avalanche	5	Anaheim Ducks	4	OT	13,992	2:42	
{"gameDay": "2023-04-09",	6:00 PM	Boston Bruins	5	Philadelphia Flyers	3		18,776	2:35	
{"gameDay": "2023-04-10",	10:00 PM	Seattle Kraken	4	Arizona Coyotes	1		4,600	2:20	
{"gameDay": "2023-04-10",	9:30 PM	Nashville Predators	3	Calgary Flames	2	SO	17,359	2:36	
{"gameDay": "2023-04-10",	9:00 PM	Minnesota Wild	4	Chicago Blackhawks	2		15,268	2:26	
{"gameDay": "2023-04-10",	7:00 PM	Dallas Stars	6	Detroit Red Wings	1		17,861	2:20	
{"gameDay": "2023-04-10",	7:00 PM	Toronto Maple Leafs	2	Florida Panthers	1	OT	18,521	2:24	
{"gameDay": "2023-04-10",	10:30 PM	Vancouver Canucks	0	Los Angeles Kings	3		18,230	2:20	
{"gameDay": "2023-04-10",	7:00 PM	Buffalo Sabres	3	New York Rangers	2	SO	18,006	2:36	
{"gameDay": "2023-04-10",	7:00 PM	Carolina Hurricanes	2	Ottawa Senators	3		18,688	2:37	
{"gameDay": "2023-04-10",	7:00 PM	San Jose Sharks	2	Winnipeg Jets	6		13,428	2:22	
{"gameDay": "2023-04-10",	7:00 PM	New York Islanders	2	Washington Capitals	5		18,573	2:30	
{"gameDay": "2023-04-11",	10:00 PM	Vancouver Canucks	3	Anaheim Ducks	2		14,803	2:27	
{"gameDay": "2023-04-11",	7:00 PM	Washington Capitals	2	Boston Bruins	5		17,850	2:36	
{"gameDay": "2023-04-11",	7:00 PM	Detroit Red Wings	1	Carolina Hurricanes	4		18,680	2:20	
{"gameDay": "2023-04-11",	9:30 PM	Edmonton Oilers	2	Colorado Avalanche	1	OT	18,135	2:28	
{"gameDay": "2023-04-11",	8:00 PM	Winnipeg Jets	3	Minnesota Wild	1		19,199	2:37	
{"gameDay": "2023-04-11",	7:00 PM	Buffalo Sabres	2	New Jersey Devils	6		16,514	2:25	
{"gameDay": "2023-04-11",	7:00 PM	Columbus Blue Jackets	3	Philadelphia Flyers	4	OT	19,719	2:32	
{"gameDay": "2023-04-11",	7:30 PM	Chicago Blackhawks	5	Pittsburgh Penguins	2		18,435	2:26	
{"gameDay": "2023-04-11",	7:00 PM	Toronto Maple Leafs	4	Tampa Bay Lightning	3		19,092	2:38	
{"gameDay": "2023-04-11",	10:00 PM	Seattle Kraken	1	Vegas Golden Knights	4		18,377	2:25	
{"gameDay": "2023-04-12",	10:00 PM	San Jose Sharks	1	Calgary Flames	3		17,211	2:32	
{"gameDay": "2023-04-12",	7:00 PM	Montreal Canadiens	2	New York Islanders	4		17,255	2:22	
{"gameDay": "2023-04-12",	7:30 PM	Dallas Stars	5	St. Louis Blues	2		18,096	2:29	
{"gameDay": "2023-04-13",	10:00 PM	Los Angeles Kings	5	Anaheim Ducks	3		17,174	2:34	
{"gameDay": "2023-04-13",	10:00 PM	Vancouver Canucks	5	Arizona Coyotes	4	OT	4,600	2:22	
{"gameDay": "2023-04-13",	7:00 PM	Ottawa Senators	3	Buffalo Sabres	4	OT	16,739	2:26	
{"gameDay": "2023-04-13",	7:00 PM	Pittsburgh Penguins	2	Columbus Blue Jackets	3	OT	18,369	2:20	
{"gameDay": "2023-04-13",	8:30 PM	Philadelphia Flyers	5	Chicago Blackhawks	4	OT	20,219	2:31	
{"gameDay": "2023-04-13",	8:00 PM	Winnipeg Jets	2	Colorado Avalanche	4		18,137	2:28	
{"gameDay": "2023-04-13",	8:00 PM	St. Louis Blues	0	Dallas Stars	1		18,532	2:20	
{"gameDay": "2023-04-13",	9:00 PM	San Jose Sharks	2	Edmonton Oilers	5		18,347	2:23	
{"gameDay": "2023-04-13",	7:00 PM	Carolina Hurricanes	6	Florida Panthers	4		19,160	2:29	
{"gameDay": "2023-04-13",	7:00 PM	Boston Bruins	5	Montreal Canadiens	4		21,105	2:31	
{"gameDay": "2023-04-13",	8:00 PM	Minnesota Wild	3	Nashville Predators	4	OT	17,519	2:17	
{"gameDay": "2023-04-13",	7:00 PM	Toronto Maple Leafs	3	New York Rangers	2		17,623	2:22	
{"gameDay": "2023-04-13",	10:30 PM	Vegas Golden Knights	3	Seattle Kraken	1		17,151	2:32	
{"gameDay": "2023-04-13",	7:00 PM	Detroit Red Wings	0	Tampa Bay Lightning	5		19,092	2:22	
{"gameDay": "2023-04-13",	7:00 PM	New Jersey Devils	5	Washington Capitals	4	OT	18,573	2:33	
{"gameDay": "2023-04-14",	7:30 PM	Buffalo Sabres	5	Columbus Blue Jackets	2		18,786	2:15	
{"gameDay": "2023-04-14",	8:00 PM	Colorado Avalanche	4	Nashville Predators	3		17,159	2:23	
{"gameDay": "2023-04-17",	7:00 PM	New York Islanders	1	Carolina Hurricanes	2		18,680	2:36	
{"gameDay": "2023-04-17",	9:30 PM	Minnesota Wild	3	Dallas Stars	2	2OT	18,532	4:10	
{"gameDay": "2023-04-17",	10:00 PM	Los Angeles Kings	4	Edmonton Oilers	3	OT	18,347	3:09	
{"gameDay": "2023-04-17",	7:30 PM	Florida Panthers	1	Boston Bruins	3		17,850	2:41	
{"gameDay": "2023-04-18",	10:00 PM	Seattle Kraken	3	Colorado Avalanche	1		18,138	2:22	
{"gameDay": "2023-04-18",	7:00 PM	New York Rangers	5	New Jersey Devils	1		16,514	2:39	
{"gameDay": "2023-04-18",	7:30 PM	Tampa Bay Lightning	7	Toronto Maple Leafs	3		19,013	2:39	
{"gameDay": "2023-04-18",	9:30 PM	Winnipeg Jets	5	Vegas Golden Knights	1		18,006	2:29	
{"gameDay": "2023-04-19",	10:00 PM	Los Angeles Kings	2	Edmonton Oilers	4		18,347	2:29	
{"gameDay": "2023-04-19",	9:30 PM	Minnesota Wild	3	Dallas Stars	7		18,532	2:40	
{"gameDay": "2023-04-19",	7:00 PM	New York Islanders	3	Carolina Hurricanes	4	OT	18,680	2:52	
{"gameDay": "2023-04-19",	7:30 PM	Florida Panthers	6	Boston Bruins	3		17,850	2:53	
{"gameDay": "2023-04-20",	9:30 PM	Seattle Kraken	2	Colorado Avalanche	3		18,141	2:31	
{"gameDay": "2023-04-20",	7:30 PM	New York Rangers	5	New Jersey Devils	1		16,760	2:38	
{"gameDay": "2023-04-20",	7:00 PM	Tampa Bay Lightning	2	Toronto Maple Leafs	7		19,128	2:48	
{"gameDay": "2023-04-20",	10:00 PM	Winnipeg Jets	2	Vegas Golden Knights	5		18,333	2:38	
{"gameDay": "2023-04-21",	7:30 PM	Boston Bruins	4	Florida Panthers	2		19,910	2:30	
{"gameDay": "2023-04-21",	10:00 PM	Edmonton Oilers	2	Los Angeles Kings	3	OT	18,230	2:58	
{"gameDay": "2023-04-21",	9:30 PM	Dallas Stars	1	Minnesota Wild	5		19,309	2:35	
{"gameDay": "2023-04-21",	7:00 PM	Carolina Hurricanes	1	New York Islanders	5		17,255	2:37	
{"gameDay": "2023-04-22",	4:00 PM	Vegas Golden Knights	5	Winnipeg Jets	4	2OT	15,324	3:39	
{"gameDay": "2023-04-22",	7:00 PM	Toronto Maple Leafs	4	Tampa Bay Lightning	3	OT	19,092	3:19	
{"gameDay": "2023-04-22",	10:00 PM	Colorado Avalanche	6	Seattle Kraken	4		17,151	2:33	
{"gameDay": "2023-04-22",	8:00 PM	New Jersey Devils	2	New York Rangers	1	OT	18,006	2:59	
{"gameDay": "2023-04-23",	9:00 PM	Edmonton Oilers	5	Los Angeles Kings	4	OT	18,367	3:03	
{"gameDay": "2023-04-23",	6:30 PM	Dallas Stars	3	Minnesota Wild	2		19,331	2:28	
{"gameDay": "2023-04-23",	1:00 PM	Carolina Hurricanes	5	New York Islanders	2		17,255	2:36	
{"gameDay": "2023-04-23",	3:30 PM	Boston Bruins	6	Florida Panthers	2		19,771	2:47	
{"gameDay": "2023-04-24",	7:00 PM	New Jersey Devils	3	New York Rangers	1		18,006	2:29	
{"gameDay": "2023-04-24",	10:00 PM	Colorado Avalanche	2	Seattle Kraken	3	OT	17,151	2:59	
{"gameDay": "2023-04-24",	7:30 PM	Toronto Maple Leafs	5	Tampa Bay Lightning	4	OT	19,092	2:56	
{"gameDay": "2023-04-24",	9:30 PM	Vegas Golden Knights	4	Winnipeg Jets	2		15,324	2:31	
{"gameDay": "2023-04-25",	9:30 PM	Los Angeles Kings	3	Edmonton Oilers	6		18,347	2:28	
{"gameDay": "2023-04-25",	8:00 PM	Minnesota Wild	0	Dallas Stars	4		18,532	2:29	
{"gameDay": "2023-04-25",	7:00 PM	New York Islanders	3	Carolina Hurricanes	2		18,680	2:40	
{"gameDay": "2023-04-26",	7:00 PM	Florida Panthers	4	Boston Bruins	3	OT	17,850	3:02	
{"gameDay": "2023-04-26",	9:30 PM	Seattle Kraken	3	Colorado Avalanche	2		18,143	2:29	
{"gameDay": "2023-04-27",	7:30 PM	New York Rangers	0	New Jersey Devils	4		17,114	2:25	
{"gameDay": "2023-04-27",	7:00 PM	Tampa Bay Lightning	4	Toronto Maple Leafs	2		19,663	2:35	
{"gameDay": "2023-04-27",	10:00 PM	Winnipeg Jets	1	Vegas Golden Knights	4		18,476	2:36	
{"gameDay": "2023-04-28",	7:30 PM	Boston Bruins	5	Florida Panthers	7		18,911	2:38	
{"gameDay": "2023-04-28",	9:30 PM	Dallas Stars	4	Minnesota Wild	1		19,389	2:23	
{"gameDay": "2023-04-28",	7:00 PM	Carolina Hurricanes	2	New York Islanders	1	OT	17,255	2:52	
{"gameDay": "2023-04-28",	10:00 PM	Colorado Avalanche	4	Seattle Kraken	1		17,151	2:31	
{"gameDay": "2023-04-29",	7:00 PM	Toronto Maple Leafs	2	Tampa Bay Lightning	1	OT	19,092	2:46	
{"gameDay": "2023-04-29",	10:00 PM	Edmonton Oilers	5	Los Angeles Kings	4		18,230	2:31	
{"gameDay": "2023-04-29",	8:00 PM	New Jersey Devils	2	New York Rangers	5		18,006	2:27	
{"gameDay": "2023-04-30",	6:30 PM	Florida Panthers	4	Boston Bruins	3	OT	17,850	3:10	
{"gameDay": "2023-04-30",	9:30 PM	Seattle Kraken	2	Colorado Avalanche	1		18,143	2:33	
{"gameDay": "2023-05-01",	8:00 PM	New York Rangers	0	New Jersey Devils	4		17,241	2:26	
{"gameDay": "2023-05-02",	9:30 PM	Seattle Kraken	5	Dallas Stars	4	OT	18,532	3:07	
{"gameDay": "2023-05-02",	7:00 PM	Florida Panthers	4	Toronto Maple Leafs	2		19,244	2:35	
{"gameDay": "2023-05-03",	7:00 PM	New Jersey Devils	1	Carolina Hurricanes	5		18,735	2:26	
{"gameDay": "2023-05-03",	9:30 PM	Edmonton Oilers	4	Vegas Golden Knights	6		18,243	2:36	
{"gameDay": "2023-05-04",	9:30 PM	Seattle Kraken	2	Dallas Stars	4		18,532	2:32	
{"gameDay": "2023-05-04",	7:00 PM	Florida Panthers	3	Toronto Maple Leafs	2		19,387	2:32	
{"gameDay": "2023-05-05",	8:00 PM	New Jersey Devils	1	Carolina Hurricanes	6		18,982	2:31	
{"gameDay": "2023-05-06",	7:00 PM	Edmonton Oilers	5	Vegas Golden Knights	1		18,504	2:50	
{"gameDay": "2023-05-07",	6:30 PM	Toronto Maple Leafs	2	Florida Panthers	3	OT	19,911	2:48	
{"gameDay": "2023-05-07",	3:30 PM	Carolina Hurricanes	4	New Jersey Devils	8		16,514	2:27	
{"gameDay": "2023-05-07",	9:30 PM	Dallas Stars	2	Seattle Kraken	7		17,151	2:34	
{"gameDay": "2023-05-08",	8:30 PM	Vegas Golden Knights	5	Edmonton Oilers	1		18,347	2:39	
{"gameDay": "2023-05-09",	7:00 PM	Carolina Hurricanes	6	New Jersey Devils	1		17,016	2:25	
{"gameDay": "2023-05-09",	9:30 PM	Dallas Stars	6	Seattle Kraken	3		17,151	2:36	
{"gameDay": "2023-05-10",	10:00 PM	Vegas Golden Knights	1	Edmonton Oilers	4		18,347	2:38	
{"gameDay": "2023-05-10",	7:00 PM	Toronto Maple Leafs	2	Florida Panthers	1		19,868	2:21	
{"gameDay": "2023-05-11",	9:30 PM	Seattle Kraken	2	Dallas Stars	5		18,532	2:28	
{"gameDay": "2023-05-11",	7:00 PM	New Jersey Devils	2	Carolina Hurricanes	3	OT	18,841	3:00	
{"gameDay": "2023-05-12",	7:00 PM	Florida Panthers	3	Toronto Maple Leafs	2	OT	19,513	3:22	
{"gameDay": "2023-05-12",	10:00 PM	Edmonton Oilers	3	Vegas Golden Knights	4		18,519	2:40	
{"gameDay": "2023-05-13",	7:00 PM	Dallas Stars	3	Seattle Kraken	6		17,151	2:37	
{"gameDay": "2023-05-14",	10:00 PM	Vegas Golden Knights	5	Edmonton Oilers	2		18,347	2:27	
{"gameDay": "2023-05-15",	8:00 PM	Seattle Kraken	1	Dallas Stars	2		18,756	2:21	
{"gameDay": "2023-05-18",	8:00 PM	Florida Panthers	3	Carolina Hurricanes	2	4OT	18,680	5:44	
{"gameDay": "2023-05-19",	8:30 PM	Dallas Stars	3	Vegas Golden Knights	4	OT	18,271	2:51	
{"gameDay": "2023-05-20",	8:00 PM	Florida Panthers	2	Carolina Hurricanes	1	OT	18,854	2:54	
{"gameDay": "2023-05-21",	3:00 PM	Dallas Stars	2	Vegas Golden Knights	3	OT	18,358	2:47	
{"gameDay": "2023-05-22",	8:00 PM	Carolina Hurricanes	0	Florida Panthers	1		19,873	2:34	
{"gameDay": "2023-05-23",	8:00 PM	Vegas Golden Knights	4	Dallas Stars	0		18,532	2:29	
{"gameDay": "2023-05-24",	8:00 PM	Carolina Hurricanes	3	Florida Panthers	4		20,065	2:37	
{"gameDay": "2023-05-25",	8:00 PM	Vegas Golden Knights	2	Dallas Stars	3	OT	18,532	2:41	
{"gameDay": "2023-05-27",	8:00 PM	Dallas Stars	4	Vegas Golden Knights	2		18,546	2:26	
{"gameDay": "2023-05-29",	8:00 PM	Vegas Golden Knights	6	Dallas Stars	0		18,532	2:20	
{"gameDay": "2023-06-03",	8:00 PM	Florida Panthers	2	Vegas Golden Knights	5		18,432	2:46	
{"gameDay": "2023-06-05",	8:00 PM	Florida Panthers	2	Vegas Golden Knights	7		18,561	2:42	
{"gameDay": "2023-06-08",	8:00 PM	Vegas Golden Knights	2	Florida Panthers	3	OT	19,735	2:59	
{"gameDay": "2023-06-10",	8:00 PM	Vegas Golden Knights	3	Florida Panthers	2		19,986	2:38	
{"gameDay": "2023-06-13",	8:00 PM	Florida Panthers	3	Vegas Golden Knights	9		19,058	2:35	