$(document).ready(function () {

  $(".typing").typeIt({
      strings: ["United States",
"Donald Trump",
"Barack Obama",
"India",
"World War II",
"Michael Jackson",
"Sex",
"Lady Gaga",
"United Kingdom",
"The Beatles",
"Eminem",
"Adolf Hitler",
"Justin Bieber",
"The Big Bang Theory",
"World War I",
"Steve Jobs",
"Canada",
"How I Met Your Mother",
"Academy Awards",
"Lil Wayne",
"Game of Thrones",
"Kim Kardashian",
"Australia",
"Cristiano Ronaldo",
"Miley Cyrus",
"Harry Potter",
"List of Presidents of the United States",
"Japan",
"Rihanna",
"Glee (TV series)",
"Selena Gomez",
"Germany",
"Taylor Swift",
"The Walking Dead (TV series)",
"Abraham Lincoln",
"Star Wars",
"Elizabeth II",
"China",
"Lionel Messi",
"Breaking Bad",
"New York City",
"Johnny Depp",
"France",
"Kanye West",
"Russia",
"Stephen Hawking",
"Albert Einstein",
"Angelina Jolie",
"Leonardo DiCaprio",
"William Shakespeare",
"Nicki Minaj",
"Mark Zuckerberg",
"Tupac Shakur",
"Dwayne Johnson",
"Illuminati",
"Michael Jordan",
"Earth",
"Mila Kunis",
"Katy Perry",
"Doctor Who",
"Vietnam War",
"John F. Kennedy",
"Adele",
"Sexual intercourse",
"Human penis size",
"One Direction",
"Global warming",
"London",
"List of The Big Bang Theory episodes",
"Muhammad Ali",
"John Cena",
"Vagina",
"Bill Gates",
"Jay-Z",
"Will Smith",
"Arnold Schwarzenegger",
"Halloween",
"September 11 attacks",
"Prince (musician)",
"David Bowie",
"England",
"Singapore",
"Marilyn Monroe",
"Britney Spears",
"Bruce Lee",
"Israel",
"Grey's Anatomy",
"Brazil",
"RMS Titanic",
"Pornography",
"Tom Cruise",
"Naruto",
"Masturbation",
"Dexter",
"Lost (TV series)",
"Fifty Shades of Grey",
"American Civil War",
"Nelson Mandela",
"Henry VIII of England",
"Scarlett Johansson"],
      speed: 90,
      breakLines: false,
      loop: true,
      deleteDelay: 2000,
      loopDelay: 2000
  });

  function submitQuery() {
    var searchString = document.getElementById("intext").value;
    $("#outputDiv").empty();
  
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchString+"&limit=max",
      dataType: "jsonp",
      success: function(data){    
          for (var i=1; i < data[1].length; i++){
              $('#outputDiv').append(
                "<br><a href='" + data[3][i] + "' target= '_blank'><div id='result' class='card'><div class='card-header'>" + data[1][i] + "</div><div class='card-block'><blockquote class='card-blockquote'><p>" + data[2][i] + "</p></blockquote></div></div>");
              }
            }
      })
    }
  $("#submitButton").on("click", function(event){
    event.preventDefault();
    submitQuery();
  });
  
  $("#intext").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#submitButton").click();
    }
  });
});