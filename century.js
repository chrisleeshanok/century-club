$(document).ready(function() {

    drinks = 0;
    timer = 60;

    var enabled = true;

    $('#start').click(function() {
        enabled = true;
    }.bind(this));

    $('#stop').click(function() {
        enabled = false;
    }.bind(this));

    var increment = function() {
        if (enabled) {
            if (timer <= 1) {
                drinks++;
                timer = 60;
            } else {
                timer--;
            }
            console.log(timer);
            console.log(drinks);
        }

        update();

        setTimeout(increment, 1000);
    }

    var update = function() {
        $('#timer').html(timer);
        $('#counter').html(drinks);
    }

    setTimeout(increment, 1000);



});
