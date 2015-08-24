$(document).ready(function() {
  generateQuote();
  
  $("#getQuote").on('click', function() {
    generateQuote();
  });
  
  function generateQuote() {
    $.ajax({
      method: "GET",
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: "jsonp",
      dataType: 'jsonp',
      data: {
        method: "getQuote",
        format: "jsonp",
        lang: "en"
      },
      success: function(response) {
        console.log(response.quoteText);
        $(".quote").html("&ldquo;"+response.quoteText+'&rdquo;');
        $(".quote-author").html(response.quoteAuthor);
      }
    });
  }
});

