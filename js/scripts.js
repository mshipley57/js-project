$(document).ready(function() {
  $("form#jsquiz").submit(function(event) {
    var company = $("select#company").val();
    var versatility = $("select#versatility").val();
    var rateys = parseInt($("input#rateys").val());
    var server = parseInt($("input#server").val());
    var froback = $("select#froback").val();

    if (company === 'bigcompany' && server < 10) {
      $('#csharp').show();
    } else if (company === 'smallcompany' && server <10) {
      $('#ruby').show();
    }

    event.preventDefault();
  });
});
