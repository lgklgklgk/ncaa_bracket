class Bracket < ActiveRecord::Base

  def self.all_by_score
    all.sort{ |x,y| y.score <=> x.score }
  end

  def score
    points = 0
    if game1winner == "Kentucky"
      points += 1
      
    end
    if game2winner == "Cincinnati"
      points += 1
      
    end
    if game3winner == "West Virgina"
      points += 1
      
    end
    if game4winner == "Maryland"
      points += 1
      
    end
    if game5winner == "Butler"
      points += 1
      
    end
    if game6winner == "Notre Dame"
      points += 1
      
    end
    if game7winner == "Wichita State"
      points += 1
      
    end
    if game8winner == "Kansas"
      points += 1
      
    end
    if game9winner == "Wisconsin"
      points += 1
      
    end
    if game10winner == "Oregon"
      points += 1
      
    end
    if game11winner == "Arkansas"
      points += 1
      
    end
    if game12winner == "North Carolina"
      points += 1
      
    end
    if game13winner == "Xavier"
      points += 1
      
    end
    if game14winner == "Georgia State"
      points += 1
      
    end
    if game15winner == "Ohio State"
      points += 1
      
    end
    if game16winner == "Arizona"
      points += 1
      
    end
    if game17winner == "Villanova"
      points += 1
      
    end
    if game18winner == "NC State"
      points += 1
      
    end
    if game19winner == "UNI"
      points += 1
      
    end
    if game20winner == "Louisville"
      points += 1
      
    end
    if game21winner == "Dayton"
      points += 1
      
    end
    if game22winner == "Oklahoma"
      points += 1
      
    end
    if game23winner == "Michigan State"
      points += 1
      
    end
    if game24winner == "Virginia"
      points += 1
      
    end
    if game25winner == "Duke"
      points += 1
      
    end
    if game26winner == "San Diego St."
      points += 1
      
    end
    if game27winner == "Utah"
      points += 1
      
    end
    if game28winner == "Georgetown"
      points += 1
      
    end
    if game29winner == "UCLA"
      points += 1
      
    end
    if game30winner == "UAB"
      points += 1
      
    end
    if game31winner == "Iowa"
      points += 1
      
    end
    if game32winner == "Gonzaga"
      points += 1
      
    end
    if game33winner == "Kentucky"
      points += 2
      
    end
    if game34winner == "West Virgina"
      points += 2
      
    end
    if game35winner == "Notre Dame"
      points += 2
      
    end
    if game36winner == "Wichita State"
      points += 2
      
    end
    if game37winner == "Wisconsin"
      points += 2
      
    end
    if game38winner == "North Carolina"
      points += 2
      
    end
    if game39winner == "Xavier"
      points += 2
      
    end
    if game40winner == "Arizona"
      points += 2
      
    end
    if game41winner == "NC State"
      points += 2
      
    end
    if game42winner == "Louisville"
      points += 2
      
    end
    if game43winner == "Oklahoma"
      points += 2
      
    end
    if game44winner == "Michigan State"
      points += 2
      
    end
    if game45winner == "Duke"
      points += 2
      
    end
    if game46winner == "Utah"
      points += 2
      
    end
    if game47winner == "UCLA"
      points += 2
      
    end
    if game48winner == "Gonzaga"
      points += 2
      
    end
    if game49winner == "Kentucky"
      points += 4
      
    end
    if game50winner == "Notre Dame"
      points += 4
      
    end
    if game51winner == "Wisconsin"
      points += 4
      
    end
    if game52winner == "Arizona"
      points += 4
      
    end
    if game53winner == "Louisville"
      points += 4
      
    end
    if game54winner == "Michigan State"
      points += 4
      
    end
    if game55winner == "Duke"
      points += 4
      
    end
    if game56winner == "Gonzaga"
      points += 4
      
    end
    if game57winner == "Kentucky"
      points += 8
      
    end
    if game58winner == "Wisconsin"
      points += 8
      
    end
    if game59winner == "Michigan State"
      points += 8
      
    end
    if game60winner == "Duke"
      points += 8
      
    end
    if game61winner == "Wisconsin"
      points += 16
      
    end
    if game62winner == "Duke"
      points += 16
      
    end
    if game63winner == "Duke"
      points += 32
    
    end
  
 
    return points
  end
end


