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
      console.log("error");
    }

    if (questionTwo == 1) {
      cpp += 1;
    } else if (questionTwo == 2) {
      c += 1;
    } else if (questionTwo == 3) {
      cSharp += 1;
    } else {
      console.log("error");
    }

    if (questionThree == 1) {
      cpp += 1;
    } else if (questionThree == 2) {
      c += 1;
    } else if (questionThree == 3) {
      cSharp += 1;
    } else {
      console.log("error");
    }

    if (questionFour == 1) {
      cpp += 1;
    } else if (questionFour == 2) {
      c += 1;
    } else if (questionFour == 3) {
      cSharp += 1;
    } else {
      console.log("error");
    }

    if (questionFive == 1) {
      cpp += 1;
    } else if (questionFive == 2) {
      c += 1;
    } else if (questionFive == 3) {
      cSharp += 1;
    } else {
      console.log("error");
    }

    console.log("cpp score = " + cpp);
    console.log("c score = " + c);
    console.log("C# score = " + cSharp);




    //score
    /*var cpp = ;
    var c =  ;
    var cSharp = ;
    console.log(parseInt(cpp));
    console.log(c);
    console.log(cSharp);
    //computations */
    /*if (cpp > c && cpp > cSharp) {
      $("#cpp").show();
      $("#c").hide();
      $("#cSharp").hide();
    } else if (c > cpp && c > cSharp) {
      $("#cpp").hide();
      $("#c").show();
      $("#cSharp").hide();
    } else (cSharp > cpp && cSharp > c) {
      $("#cpp").hide();
      $("#c").hide();
      $("#cSharp").show();
    } */
  });
});