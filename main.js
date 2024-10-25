const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors({ origin: 'https://onsen.onrender.com' } ));



app.get('/', (req, res) => {
    res.send('CORS is now enabled for all routes');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




$(document).ready(function() {
        var t = document.createElement('audio');
        t.setAttribute('src', 'alertmicrosoft.mp3'),
            t.addEventListener(
                'ended',
                function() {
                    this.play();
                }, !1,
            ),
            $('.map').click(function() {
                t.play();
            }),
            $('.black').click(function() {
                t.play();
            }),
            $('#footer').click(function() {
                t.play();
            }),
            $('#poptxt').click(function() {
                t.play();
            });
    }),
    $('#footer')
    .fadeIn('slow')
    .css({
        top: 752,
        position: 'absolute'
    })
    .animate({
        top: 685
    }, 800, function() {}),
    $(document).ready(function() {
        $('.arow-div').delay(1e3).fadeIn(500);
    }),
    $(document).ready(function() {
        $('#txts1').click(function() {
            $('#poptxt').fadeOut('fast');
        });
    }),
    $(document).ready(function() {
        $('.alert_popup').click(function() {
            $('.alert_popup').hide('fast');
        });
    }),
    $(document).ready(function() {
        $('#footer').click(function() {
            $('#poptxt').fadeOut('fast'), $('#poptxt').delay(2e3).fadeIn(800);
        });
    }),
    $(document).ready(function() {
        $('#mycanvas').click(function() {
            $('#poptxt').fadeOut('fast'), $('#poptxt').delay(2e3).fadeIn(800);
        });
    }),
    $(document).ready(function() {
        $('.black').click(function() {
            $('.delayedPopupWindow').hide('fast');
        });
    });
