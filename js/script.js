$(document).ready(function() {
    var holes = $('.hole');
    var score = 0;
    var activeHole = null;

    function getRandomHole() {
        var inactiveHoles = holes.not(activeHole);
        var randomIndex = Math.floor(Math.random() * inactiveHoles.length);
        return inactiveHoles.eq(randomIndex);
    }

    function showMole() {
        hideMole(); // Hide the previously active mole, if any
        activeHole = getRandomHole();
        activeHole.addClass('active');
        activeHole.find('.mole').fadeIn();

        // Set a timeout to hide the mole after a certain duration
        setTimeout(function() {
            hideMole();
            showMole();
        }, 1500);
    }

    function hideMole() {
        if (activeHole) {
            activeHole.removeClass('active');
            activeHole.find('.mole').fadeOut();
            activeHole = null;
        }
    }

    // Call showMole() to display the initial mole
    showMole();

    // Handle click event on mole
    $('.hole').on('click', '.mole', function() {
        if ($(this).parent().hasClass('active')) {
            $(this).fadeOut(function() {
                score++;
                $('#score').text(score);
            });
            activeHole = null; // Set activeHole to null after successful click
        }
    });
});

