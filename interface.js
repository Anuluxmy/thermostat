$(document).ready(function() {

  var thermo = new Thermostat()


  $("#temperature").text(thermo._temp);
//
//   // document.getElementById(temperature-up).click(function(thermo.increase){
  $("#temperature-up").on('click', function() {
    thermo.increase(1)
  $("#temperature").text(thermo._temp);

});

  $("#temperature-down").on('click', function() {
    thermo.decrease(1)
    $("#temperature").text(thermo._temp);

  });

  $("#temperature-reset").on('click', function() {
     thermo.reset();
    $("#temperature").text(thermo._temp);
  });

  $("#powersaving-on").on('click', function() {
    thermo.modeOn();
    $("#power-saving-status").text("on");

  });
  $("#powersaving-off").on('click', function() {
    thermo.modeOff();
    $("#power-saving-status").text("off");
  });


});
