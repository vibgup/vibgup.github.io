$(document).ready(function() {
  $('#fullpage').fullpage({
    css3: true,
    // anchors:['intro', 'invite', 'sangeet-sagai', 'shaadi-reception', 'rsvp'],
    // sectionsColor: ['#8beaf7', '#fe87a1', '#ec4e7f', '#df4a4d', '#44b4c6'],
    // sectionsColor: ['#1d125e', '#8f58c0', '#a62156', '#91282f', '#451443'],
    // sectionsColor: ['#4ca7c3', '#c9ac67', '#f66496', '#f06867', '#e2533c'],
    // sectionsColor: ['#31a0c4', '#faa127', '#de4a93', '#d24b29', '#eaca5a'], // INFO: color left out #3244b6
    sectionsColor: ['#31a0c4', '#faa127', '#de4a93', '#d24b29', '#d24b29'], // INFO: color left out #3244b6
    scrollingSpeed: 700,
    // fadingEffect: true,
    animateAnchor: true,
    recordHistory: false,
    navigation: true,
    // navigationPosition: 'right',
    navigationTooltips: ['Welcome', 'Invite', 'Sangeet', 'Shaadi', 'RSVP'],
    responsiveWidth: 900,
    // verticalCentered: false,
    scrollOverflow: true,
  });

  document.getElementById("mG61Hd").reset();

  //Program a custom submit function for the form
  $("form#mG61Hd").submit(function(event){

    //disable the default form submission
    event.preventDefault();

    //grab all form data
    var formData = new FormData($(this)[0]);

    $.ajax({
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSdjJTUGUKeN-x-baU13DoBXaxSll04L28YNlRnivTGEHcmqnQ/formResponse',
      type: 'POST',
      data: formData,
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      success: function (returndata) {
        console.log(returndata);
        alert(returndata);
        document.getElementById("mG61Hd").reset();
        $('#success-response').show();
      },
      error: function (returndata) {
        console.log(returndata);
        document.getElementById("mG61Hd").reset();
        $('#success-response').show();
      }
    });

    return false;
  });

  $(".checkbox-check").on('change', function() {
    if ($(this).is(':checked')) {
      $(this).attr('value', 'true');
    } else {
      $(this).attr('value', 'false');
    }
  });

  var conditionalContent = $('#acco-input');
  var group = $('input[type=radio][name=entry\\.1074380710]');
  group.change(function() {
    var attendingCheck = group.filter(':checked').val() === 'Attending';
    conditionalContent.toggle(attendingCheck);
    if(!attendingCheck){
      $('#checkbox1').attr('checked', false);
      $('#checkbox2').attr('checked', false);
    }
  }).change();

});
