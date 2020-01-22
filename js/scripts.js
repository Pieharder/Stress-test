$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    
    var signsTotal = []
    var symptomsTotal = []
    var reliefTotal = []

    $("input:checkbox[name=stress-signs]:checked").each(function() {
      var signs = parseInt($(this).val());
      signsTotal.push(signs);
    })

    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      var symptoms = parseInt($(this).val());
      symptomsTotal.push(symptoms);
      // console.log(symptoms)
      // console.log(symptomsTotal)
    })

    $("input:checkbox[name=stress-relief]:checked").each(function() {
      var relief = parseInt($(this).val());
      reliefTotal.push(relief);
      // console.log(relief)
      // console.log(reliefTotal)
    })

    if ((symptomsTotal.length + signsTotal.length) < reliefTotal.length) {
        alert("You're doing great.");
    } else if ((symptomsTotal.length + signsTotal.length) === reliefTotal.length) {
        alert("It's advised you keep an eye on things.");
    } else //((symptomsTotal.length + signsTotal.length) > reliefTotal.length)
        alert("Seek help.");
  });
});


// $("#work-responses").show();
// $("input:checkbox[name=work-transportation]:checked").each(function(){
//   var workTransportationMode = $(this).val();
//   $('#work-responses').append(workTransportationMode + "<br>");
// });
// $("#fun-responses").show();
// $("input:checkbox[name=fun-transportation]:checked").each(function(){
//   var funTransportationMode = $(this).val();
//   $('#fun-responses').append(funTransportationMode + "<br>");
// });
// $('#transportation_survey').hide();