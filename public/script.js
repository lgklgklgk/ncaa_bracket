window.onload = function(){
  game1winner = document.getElementById("round2game1box1");
  round31 = document.getElementById("round3game1box1");
  game1winner.addEventListener('change', function() {
    game1win = document.createElement('option');
    game1win.value = game1winner.value;
    game1win.text = game1winner.value;
    round31.replaceChild(game1win, round31.children[1]);
});
  game2winner = document.getElementById("round2game1box2");
  game2winner.addEventListener('change', function() {
    game2win = document.createElement('option');
    game2win.value = game2winner.value;
    game2win.text = game2winner.value;
    round31.replaceChild(game2win, round31.children[2]);
});
  game3winner = document.getElementById("round2game2box1");
  round32 = document.getElementById("round3game1box2");
  game3winner.addEventListener('change', function() {
    game3win = document.createElement('option');
    game3win.value = game3winner.value;
    game3win.text = game3winner.value;
    round32.replaceChild(game3win, round32.children[1]);
});    
  game4winner = document.getElementById("round2game2box2");
  game4winner.addEventListener('change', function() {
    game4win = document.createElement('option');
    game4win.value = game4winner.value;
    game4win.text = game4winner.value;
    round32.replaceChild(game4win, round32.children[2]);
});    
  game5winner = document.getElementById("round2game3box1");
  round33 = document.getElementById("round3game2box1");
  game5winner.addEventListener('change', function() {
    game5win = document.createElement('option');
    game5win.value = game5winner.value;
    game5win.text = game5winner.value;
    round33.replaceChild(game5win, round33.children[1]);
});    
  game6winner = document.getElementById("round2game3box2");
  game6winner.addEventListener('change', function() {
    game6win = document.createElement('option');
    game6win.value = game6winner.value;
    game6win.text = game6winner.value;
    round33.replaceChild(game6win, round33.children[2]);
});    
  game7winner = document.getElementById("round2game4box1");
  round34 = document.getElementById("round3game2box2");
  game7winner.addEventListener('change', function() {
    game7win = document.createElement('option');
    game7win.value = game7winner.value;
    game7win.text = game7winner.value;
    round34.replaceChild(game7win, round34.children[1]);
});    
  game8winner = document.getElementById("round2game4box2");
  game8winner.addEventListener('change', function() {
    game8win = document.createElement('option');
    game8win.value = game8winner.value;
    game8win.text = game8winner.value;
    round34.replaceChild(game8win, round34.children[2]);
});    
  game9winner = document.getElementById("round2game5box1");
  round35 = document.getElementById("round3game3box1");
  game9winner.addEventListener('change', function() {
    game9win = document.createElement('option');
    game9win.value = game9winner.value;
    game9win.text = game9winner.value;
    round35.replaceChild(game9win, round35.children[1]);
});    
  game10winner = document.getElementById("round2game5box2");
  game10winner.addEventListener('change', function() {
    game10win = document.createElement('option');
    game10win.value = game10winner.value;
    game10win.text = game10winner.value;
    round35.replaceChild(game10win, round35.children[2]);
});    
  game11winner = document.getElementById("round2game6box1");
  round36 = document.getElementById("round3game3box2");
  game11winner.addEventListener('change', function() {
    game11win = document.createElement('option');
    game11win.value = game11winner.value;
    game11win.text = game11winner.value;
    round36.replaceChild(game11win, round36.children[1]);
});    
  game12winner = document.getElementById("round2game6box2");
  game12winner.addEventListener('change', function() {
    game12win = document.createElement('option');
    game12win.value = game12winner.value;
    game12win.text = game12winner.value;
    round36.replaceChild(game12win, round36.children[2]);
});    
  game13winner = document.getElementById("round2game7box1");
  round37 = document.getElementById("round3game4box1");
  game13winner.addEventListener('change', function() {
    game13win = document.createElement('option');
    game13win.value = game13winner.value;
    game13win.text = game13winner.value;
    round37.replaceChild(game13win, round37.children[1]);
});    
  game14winner = document.getElementById("round2game7box2");
  game14winner.addEventListener('change', function() {
    game14win = document.createElement('option');
    game14win.value = game14winner.value;
    game14win.text = game14winner.value;
    round37.replaceChild(game14win, round37.children[2]);
});    
  game15winner = document.getElementById("round2game8box1");
  round38 = document.getElementById("round3game4box2");
  game15winner.addEventListener('change', function() {
    game15win = document.createElement('option');
    game15win.value = game15winner.value;
    game15win.text = game15winner.value;
    round38.replaceChild(game15win, round38.children[1]);
});    
  game16winner = document.getElementById("round2game8box2");
  game16winner.addEventListener('change', function() {
    game16win = document.createElement('option');
    game16win.value = game16winner.value;
    game16win.text = game16winner.value;
    round38.replaceChild(game16win, round38.children[2]);
});    
  game17winner = document.getElementById("round2game9box1");
  round39 = document.getElementById("round3game5box1");
  game17winner.addEventListener('change', function() {
    game17win = document.createElement('option');
    game17win.value = game17winner.value;
    game17win.text = game17winner.value;
    round39.replaceChild(game17win, round39.children[1]);
});    
  game18winner = document.getElementById("round2game9box2");
  game18winner.addEventListener('change', function() {
    game18win = document.createElement('option');
    game18win.value = game18winner.value;
    game18win.text = game18winner.value;
    round39.replaceChild(game18win, round39.children[2]);
});    
  game19winner = document.getElementById("round2game10box1");
  round40 = document.getElementById("round3game5box2");
  game19winner.addEventListener('change', function() {
    game19win = document.createElement('option');
    game19win.value = game19winner.value;
    game19win.text = game19winner.value;
    round40.replaceChild(game19win, round40.children[1]);
});    
  game20winner = document.getElementById("round2game10box2");
  game20winner.addEventListener('change', function() {
    game20win = document.createElement('option');
    game20win.value = game20winner.value;
    game20win.text = game20winner.value;
    round40.replaceChild(game20win, round40.children[2]);
});    
  game21winner = document.getElementById("round2game11box1");
  round41 = document.getElementById("round3game6box1");
  game21winner.addEventListener('change', function() {
    game21win = document.createElement('option');
    game21win.value = game21winner.value;
    game21win.text = game21winner.value;
    round41.replaceChild(game21win, round41.children[1]);
});    
  game22winner = document.getElementById("round2game11box2");
  game22winner.addEventListener('change', function() {
    game22win = document.createElement('option');
    game22win.value = game22winner.value;
    game22win.text = game22winner.value;
    round41.replaceChild(game22win, round41.children[2]);
});    
  game23winner = document.getElementById("round2game12box1");
  round42 = document.getElementById("round3game6box2");
  game23winner.addEventListener('change', function() {
    game23win = document.createElement('option');
    game23win.value = game23winner.value;
    game23win.text = game23winner.value;
    round42.replaceChild(game23win, round42.children[1]);
});    
  game24winner = document.getElementById("round2game12box2");
  game24winner.addEventListener('change', function() {
    game24win = document.createElement('option');
    game24win.value = game24winner.value;
    game24win.text = game24winner.value;
    round42.replaceChild(game24win, round42.children[2]);
});    
  game25winner = document.getElementById("round2game13box1");
  round43 = document.getElementById("round3game7box1");
  game25winner.addEventListener('change', function() {
    game25win = document.createElement('option');
    game25win.value = game25winner.value;
    game25win.text = game25winner.value;
    round43.replaceChild(game25win, round43.children[1]);
});    
  game26winner = document.getElementById("round2game13box2");
  game26winner.addEventListener('change', function() {
    game26win = document.createElement('option');
    game26win.value = game26winner.value;
    game26win.text = game26winner.value;
    round43.replaceChild(game26win, round43.children[2]);
});    
  game27winner = document.getElementById("round2game14box1");
  round44 = document.getElementById("round3game7box2");
  game27winner.addEventListener('change', function() {
    game27win = document.createElement('option');
    game27win.value = game27winner.value;
    game27win.text = game27winner.value;
    round44.replaceChild(game27win, round44.children[1]);
});    
  game28winner = document.getElementById("round2game14box2");
  game28winner.addEventListener('change', function() {
    game28win = document.createElement('option');
    game28win.value = game28winner.value;
    game28win.text = game28winner.value;
    round44.replaceChild(game28win, round44.children[2]);
});    
  game29winner = document.getElementById("round2game15box1");
  round45 = document.getElementById("round3game8box1");
  game29winner.addEventListener('change', function() {
    game29win = document.createElement('option');
    game29win.value = game29winner.value;
    game29win.text = game29winner.value;
    round45.replaceChild(game29win, round45.children[1]);
});    
  game30winner = document.getElementById("round2game15box2");
  game30winner.addEventListener('change', function() {
    game30win = document.createElement('option');
    game30win.value = game30winner.value;
    game30win.text = game30winner.value;
    round45.replaceChild(game30win, round45.children[2]);
});    
  game31winner = document.getElementById("round2game16box1");
  round46 = document.getElementById("round3game8box2");
  game31winner.addEventListener('change', function() {
    game31win = document.createElement('option');
    game31win.value = game31winner.value;
    game31win.text = game31winner.value;
    round46.replaceChild(game31win, round46.children[1]);
});    
  game32winner = document.getElementById("round2game16box2");
  game32winner.addEventListener('change', function() {
    game32win = document.createElement('option');
    game32win.value = game32winner.value;
    game32win.text = game32winner.value;
    round46.replaceChild(game32win, round46.children[2]);
});    
  game33winner = document.getElementById("round3game1box1");
  round47 = document.getElementById("round4game1box1");
  game33winner.addEventListener('change', function() {
    game33win = document.createElement('option');
    game33win.value = game33winner.value;
    game33win.text = game33winner.value;
    round47.replaceChild(game33win, round47.children[1]);
  });
  game34winner = document.getElementById("round3game1box2");
  game34winner.addEventListener('change', function() {
    game34win = document.createElement('option');
    game34win.value = game34winner.value;
    game34win.text = game34winner.value;
    round47.replaceChild(game34win, round47.children[2]);
  });
  game35winner = document.getElementById("round3game2box1");
  round48 = document.getElementById("round4game1box2");
  game35winner.addEventListener('change', function() {
    game35win = document.createElement('option');
    game35win.value = game35winner.value;
    game35win.text = game35winner.value;
    round48.replaceChild(game35win, round48.children[1]);
  });
  game36winner = document.getElementById("round3game2box2");
  game36winner.addEventListener('change', function() {
    game36win = document.createElement('option');
    game36win.value = game36winner.value;
    game36win.text = game36winner.value;
    round48.replaceChild(game36win, round48.children[2]);
  });
  game37winner = document.getElementById("round3game3box1");
  round49 = document.getElementById("round4game2box1");
  game37winner.addEventListener('change', function() {
    game37win = document.createElement('option');
    game37win.value = game37winner.value;
    game37win.text = game37winner.value;
    round49.replaceChild(game37win, round49.children[1]);
  });
  game38winner = document.getElementById("round3game3box2");
  game38winner.addEventListener('change', function() {
    game38win = document.createElement('option');
    game38win.value = game38winner.value;
    game38win.text = game38winner.value;
    round49.replaceChild(game38win, round49.children[2]);
  });
  game39winner = document.getElementById("round3game4box1");
  round50 = document.getElementById("round4game2box2");
  game39winner.addEventListener('change', function() {
    game39win = document.createElement('option');
    game39win.value = game39winner.value;
    game39win.text = game39winner.value;
    round50.replaceChild(game39win, round50.children[1]);
  });
  game40winner = document.getElementById("round3game4box2");
  game40winner.addEventListener('change', function() {
    game40win = document.createElement('option');
    game40win.value = game40winner.value;
    game40win.text = game40winner.value;
    round50.replaceChild(game40win, round50.children[2]);
  });
  game41winner = document.getElementById("round3game5box1");
  round51 = document.getElementById("round4game3box1");
  game41winner.addEventListener('change', function() {
    game41win = document.createElement('option');
    game41win.value = game41winner.value;
    game41win.text = game41winner.value;
    round51.replaceChild(game41win, round51.children[1]);
  });
  game42winner = document.getElementById("round3game5box2");
  game42winner.addEventListener('change', function() {
    game42win = document.createElement('option');
    game42win.value = game42winner.value;
    game42win.text = game42winner.value;
    round51.replaceChild(game42win, round51.children[2]);
  });
  game43winner = document.getElementById("round3game6box1");
  round52 = document.getElementById("round4game3box2");
  game43winner.addEventListener('change', function() {
    game43win = document.createElement('option');
    game43win.value = game43winner.value;
    game43win.text = game43winner.value;
    round52.replaceChild(game43win, round52.children[1]);
  });
  game44winner = document.getElementById("round3game6box2");
  game44winner.addEventListener('change', function() {
    game44win = document.createElement('option');
    game44win.value = game44winner.value;
    game44win.text = game44winner.value;
    round52.replaceChild(game44win, round52.children[2]);
  });
  game45winner = document.getElementById("round3game7box1");
  round53 = document.getElementById("round4game4box1");
  game45winner.addEventListener('change', function() {
    game45win = document.createElement('option');
    game45win.value = game45winner.value;
    game45win.text = game45winner.value;
    round53.replaceChild(game45win, round53.children[1]);
  });
  game46winner = document.getElementById("round3game7box2");
  game46winner.addEventListener('change', function() {
    game46win = document.createElement('option');
    game46win.value = game46winner.value;
    game46win.text = game46winner.value;
    round53.replaceChild(game46win, round53.children[2]);
  });
  game47winner = document.getElementById("round3game8box1");
  round54 = document.getElementById("round4game4box2");
  game47winner.addEventListener('change', function() {
    game47win = document.createElement('option');
    game47win.value = game47winner.value;
    game47win.text = game47winner.value;
    round54.replaceChild(game47win, round54.children[1]);
  });
  game48winner = document.getElementById("round3game8box2");
  game48winner.addEventListener('change', function() {
    game48win = document.createElement('option');
    game48win.value = game48winner.value;
    game48win.text = game48winner.value;
    round54.replaceChild(game48win, round54.children[2]);
  });
  game49winner = document.getElementById("round4game1box1");
  round55 = document.getElementById("round5game1box1");
  game49winner.addEventListener('change', function() {
    game49win = document.createElement('option');
    game49win.value = game49winner.value;
    game49win.text = game49winner.value;
    round55.replaceChild(game49win, round55.children[1]);
  });
  game50winner = document.getElementById("round4game1box2");
  game50winner.addEventListener('change', function() {
    game50win = document.createElement('option');
    game50win.value = game50winner.value;
    game50win.text = game50winner.value;
    round55.replaceChild(game50win, round55.children[2]);
  });
  game51winner = document.getElementById("round4game2box1");
  round56 = document.getElementById("round5game1box2");
  game51winner.addEventListener('change', function() {
    game51win = document.createElement('option');
    game51win.value = game51winner.value;
    game51win.text = game51winner.value;
    round56.replaceChild(game51win, round56.children[1]);
  });
  game52winner = document.getElementById("round4game2box2");
  game52winner.addEventListener('change', function() {
    game52win = document.createElement('option');
    game52win.value = game52winner.value;
    game52win.text = game52winner.value;
    round56.replaceChild(game52win, round56.children[2]);
  });
  game53winner = document.getElementById("round4game3box1");
  round57 = document.getElementById("round5game2box1");
  game53winner.addEventListener('change', function() {
    game53win = document.createElement('option');
    game53win.value = game53winner.value;
    game53win.text = game53winner.value;
    round57.replaceChild(game53win, round57.children[1]);
  });
  game54winner = document.getElementById("round4game3box2");
  game54winner.addEventListener('change', function() {
    game54win = document.createElement('option');
    game54win.value = game54winner.value;
    game54win.text = game54winner.value;
    round57.replaceChild(game54win, round57.children[2]);
  });
  game55winner = document.getElementById("round4game4box1");
  round58 = document.getElementById("round5game2box2");
  game55winner.addEventListener('change', function() {
    game55win = document.createElement('option');
    game55win.value = game55winner.value;
    game55win.text = game55winner.value;
    round58.replaceChild(game55win, round58.children[1]);
  });
  game56winner = document.getElementById("round4game4box2");
  game56winner.addEventListener('change', function() {
    game56win = document.createElement('option');
    game56win.value = game56winner.value;
    game56win.text = game56winner.value;
    round58.replaceChild(game56win, round58.children[2]);
  });
  game57winner = document.getElementById("round5game1box1");
  round59 = document.getElementById("round6game1box1");
  game57winner.addEventListener('change', function() {
    game57win = document.createElement('option');
    game57win.value = game57winner.value;
    game57win.text = game57winner.value;
    round59.replaceChild(game57win, round59.children[1]);
  });
  game58winner = document.getElementById("round5game1box2");
  game58winner.addEventListener('change', function() {
    game58win = document.createElement('option');
    game58win.value = game58winner.value;
    game58win.text = game58winner.value;
    round59.replaceChild(game58win, round59.children[2]);
  });
  game59winner = document.getElementById("round5game2box1");
  round60 = document.getElementById("round6game2box1");
  game59winner.addEventListener('change', function() {
    game59win = document.createElement('option');
    game59win.value = game59winner.value;
    game59win.text = game59winner.value;
    round60.replaceChild(game59win, round60.children[1]);
  });
  game60winner = document.getElementById("round5game2box2");
  game60winner.addEventListener('change', function() {
    game60win = document.createElement('option');
    game60win.value = game60winner.value;
    game60win.text = game60winner.value;
    round60.replaceChild(game60win, round60.children[2]);
  });
  game61winner = document.getElementById("round6game1box1");
  round61 = document.getElementById("round7game1box1"); 
  game61winner.addEventListener('change', function() {
    game61win = document.createElement('option');
    game61win.value = game61winner.value;
    game61win.text = game61winner.value;
    round61.replaceChild(game61win, round61.children[1]);
  });
  game62winner = document.getElementById("round6game2box1");
  game62winner.addEventListener('change', function() {
    game62win = document.createElement('option');
    game62win.value = game62winner.value;
    game62win.text = game62winner.value;
    round61.replaceChild(game62win, round61.children[2]);
  });
  game63winner = document.getElementById("round7game1box1");
  game63winner.addEventListener('change', function() {
    game63win = document.createElement('option');
    game63win.value = game63winner.value;
    game63win.text = game63winner.value;
    results = prompt("You picked " + game63winner.value + " to win it all! Enter your name below and click OK to submit your results. Good Luck!", "anonymous");
    if (results != null) {
      sendPicks = new FormData();
      sendPicks.append("name", results);
      sendPicks.append("game1winner", game1winner.value);
      sendPicks.append("game2winner", game2winner.value);
      sendPicks.append("game3winner", game3winner.value);
      sendPicks.append("game4winner", game4winner.value);
      sendPicks.append("game5winner", game5winner.value);
      sendPicks.append("game6winner", game6winner.value);
      sendPicks.append("game7winner", game7winner.value);
      sendPicks.append("game8winner", game8winner.value);
      sendPicks.append("game9winner", game9winner.value);
      sendPicks.append("game10winner", game10winner.value);
      sendPicks.append("game11winner", game11winner.value);
      sendPicks.append("game12winner", game12winner.value);
      sendPicks.append("game13winner", game13winner.value);
      sendPicks.append("game14winner", game14winner.value);
      sendPicks.append("game15winner", game15winner.value);
      sendPicks.append("game16winner", game16winner.value);
      sendPicks.append("game17winner", game17winner.value);
      sendPicks.append("game18winner", game18winner.value);
      sendPicks.append("game19winner", game19winner.value);
      sendPicks.append("game20winner", game20winner.value);
      sendPicks.append("game21winner", game21winner.value);
      sendPicks.append("game22winner", game22winner.value);
      sendPicks.append("game23winner", game23winner.value);
      sendPicks.append("game24winner", game24winner.value);
      sendPicks.append("game25winner", game25winner.value);
      sendPicks.append("game26winner", game26winner.value);
      sendPicks.append("game27winner", game27winner.value);
      sendPicks.append("game28winner", game28winner.value);
      sendPicks.append("game29winner", game29winner.value);
      sendPicks.append("game30winner", game30winner.value);
      sendPicks.append("game31winner", game31winner.value);
      sendPicks.append("game32winner", game32winner.value);
      sendPicks.append("game33winner", game33winner.value);
      sendPicks.append("game34winner", game34winner.value);
      sendPicks.append("game35winner", game35winner.value);
      sendPicks.append("game36winner", game36winner.value);
      sendPicks.append("game37winner", game37winner.value);
      sendPicks.append("game38winner", game38winner.value);
      sendPicks.append("game39winner", game39winner.value);
      sendPicks.append("game40winner", game40winner.value);
      sendPicks.append("game41winner", game41winner.value);
      sendPicks.append("game42winner", game42winner.value);
      sendPicks.append("game43winner", game43winner.value);
      sendPicks.append("game44winner", game44winner.value);
      sendPicks.append("game45winner", game45winner.value);
      sendPicks.append("game46winner", game46winner.value);
      sendPicks.append("game47winner", game47winner.value);
      sendPicks.append("game48winner", game48winner.value);
      sendPicks.append("game49winner", game49winner.value);
      sendPicks.append("game50winner", game50winner.value);
      sendPicks.append("game51winner", game51winner.value);
      sendPicks.append("game52winner", game52winner.value);
      sendPicks.append("game53winner", game53winner.value);
      sendPicks.append("game54winner", game54winner.value);
      sendPicks.append("game55winner", game55winner.value);
      sendPicks.append("game56winner", game56winner.value);
      sendPicks.append("game57winner", game57winner.value);
      sendPicks.append("game58winner", game58winner.value);
      sendPicks.append("game59winner", game59winner.value);
      sendPicks.append("game60winner", game60winner.value);
      sendPicks.append("game61winner", game61winner.value);
      sendPicks.append("game62winner", game62winner.value);
      sendPicks.append("game63winner", game63winner.value);
      var request = new XMLHttpRequest();
      request.open("POST", "/");
      request.send(sendPicks);
    };
  });
}
