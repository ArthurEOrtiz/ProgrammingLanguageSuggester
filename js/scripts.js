$(document).ready(function(){

  $("form#questionnaire").submit(function(event){
    event.preventDefault();
    //decalare variables 
    let cpp = 0;
    let c = 0;
    let cSharp = 0;
    //collect response
    const questionOne = $("input:radio[name=questionOne]:checked").val();
    const questionTwo = $("input:radio[name=questionTwo]:checked").val();
    const questionThree = $("input:radio[name=questionThree]:checked").val();
    const questionFour = $("input:radio[name=questionFour]:checked").val();
    const questionFive = $("input:radio[name=questionFive]:checked").val();
    // computate score
    if (questionOne == 1) {
      cpp += 1;
    } else if (questionOne == 2) {
      c += 1;
    } else if (questionOne == 3) {
      cSharp += 1;
    } else {
      alert("Question 1 has no response!");
    }

    if (questionTwo == 1) {
      cpp += 1;
    } else if (questionTwo == 2) {
      c += 1;
    } else if (questionTwo == 3) {
      cSharp += 1;
    } else {
      alert("Question 2 has no response!");
    }

    if (questionThree == 1) {
      cpp += 1;
    } else if (questionThree == 2) {
      c += 1;
    } else if (questionThree == 3) {
      cSharp += 1;
    } else {
      alert("Question 3 has no response!");
    }

    if (questionFour == 1) {
      cpp += 1;
    } else if (questionFour == 2) {
      c += 1;
    } else if (questionFour == 3) {
      cSharp += 1;
    } else {
      alert("Question 4 has no response!");
    }

    if (questionFive == 1) {
      cpp += 1;
    } else if (questionFive == 2) {
      c += 1;
    } else if (questionFive == 3) {
      cSharp += 1;
    } else {
      alert("Question 5 has no response!");
    }

    if (cpp > c && cpp > cSharp) {
      $("#cpp").show(1000);
      $("#c").hide();
      $("#cSharp").hide();
    } else if (c > cpp && c > cSharp) {
      $("#cpp").hide();
      $("#c").show(1000);
      $("#cSharp").hide();
    } else if (cSharp > cpp && cSharp > c) {
      $("#cpp").hide();
      $("#c").hide();
      $("#cSharp").show(1000);
    } 
    
    $("html").animate({ scrollTop: $(document).height() }, "slow");


  });
});