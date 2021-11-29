$(function() {
    var places = {}

    // hide start and restart button
    $('#reset').css('visibility','hidden');
    $('#carScoreContainer').css('visibility','hidden');

    // hide cars and cars score
    for( var car = 1; car < 10; car++ ) {
        $('#car'+car).css('visibility','hidden');
        $('#carScore'+car).css('visibility','hidden');
    }

    // when cars number is selected, show start button, cars and cars score
    $('#carsNumber').on('change', function (optionChosen) {
        $('#startRace').css('visibility','');
        $('#carScoreContainer').css('visibility','');
        var carsNumber = parseInt(optionChosen.currentTarget.value) + 1;
        for( var car = 1; car < carsNumber; car++ ) {
            $('#car'+car).css('visibility','');
            $('#carScore'+car).css('visibility','');
        }
    });

    // start the race
    $('#startRace').click(function() {
        $('#startRace').css('visibility','hidden');
        $('#reset').css('visibility','');
        const carWidth = $('#car1').width() + 10;
        const raceTrackWidth = $(window).width() - carWidth;
        var cars = parseInt($('#carsNumber :selected').val()) + 1;
        for( var car = 1; car < cars; car++ ) {
            $('#car'+car).css('visibility','');
            var raceTime = Math.floor(Math.random() * (10000 - 1000)) + 1000;
            places[car] = raceTime;
            $('#car'+car).animate({
                left: raceTrackWidth
            }, raceTime);
        }
        registerCarScores();
    });
    
    // reset the race
    $('#reset').click(function() {
        $('#reset').css('visibility','hidden');
        $('#startRace').css('visibility','');
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });

    // register car position in score table according to the object
    function registerCarScores(){
        var position = 1;
        scoresSorted = Object.keys(places).sort(function(a,b){return places[a]-places[b]})
        for(car in scoresSorted){
            $(`#carScore${scoresSorted[car]} span`).text( 'Finished in #' + position);
            position++;
        }
    }
});
    

















