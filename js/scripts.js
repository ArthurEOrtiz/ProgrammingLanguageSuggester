$(document).ready(function(){
  $("form#questionnaire").submit(function(event){
    //decalre the variables 
    //question 1 responses
    var expertMode = parseInt($("input:radio[name=expertMode]:checked").val());
    var hardMode = parseInt($("input:radio[name=hardMode]:checked").val());
    var mediumMode = parseInt($("input:radio[name=meduimMode]:checked").val());
    //question 2 responses
    var robots = parseInt($("input:radio[name=expertMode]:checked").val());
    var operatingSystems = parseInt($("input:radio[name=expertMode]:checked").val());
    var appsGames = parseInt($("input:radio[name=expertMode]:checked").val());
    //question 3 responses
    var doubleClutch = parseInt($("input:radio[name=expertMode]:checked").val());
    var threeOnTheTree = parseInt($("input:radio[name=expertMode]:checked").val());
    var manual = parseInt($("input:radio[name=expertMode]:checked").val());
    //question 4 responses
    var onehundredMiler = parseInt($("input:radio[name=expertMode]:checked").val());
    var marathon = parseInt($("input:radio[name=expertMode]:checked").val());
    var sprints = parseInt($("input:radio[name=expertMode]:checked").val());
    //question 5 responses
    var solo = parseInt($("input:radio[name=expertMode]:checked").val());
    var taxProfessional = parseInt($("input:radio[name=expertMode]:checked").val());
    var turbotax = parseInt($("input:radio[name=expertMode]:checked").val());

  });
});