$(document).ready(function() {
  $("form#jsquiz").submit(function(event) {
    var company = $("select#company").val();
    var versatility = $("select#versatility").val();
    var rateys = parseInt($("input#rateys").val());
    var server = parseInt($("input#server").val());
    var froback = $("select#froback").val();

    if (company === 'bigcompany' && froback === 'either') {
      $('#csharp').show();
    } else if (company === 'smallcompany' || 'bigcompany' && server  < 6 && rateys < 6) {
      $('#ruby').show();
    } else if (company === 'bigcompany' || 'smallcompany' && server > 5 && rateys < 11)
      $('#php').show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".kidshowing").toggle();
    $(".kidhidden").toggle();
  });
});
