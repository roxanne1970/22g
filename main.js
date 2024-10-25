
const express = require('express');
const app = express();

app.use((req, res, next) => {
    // Allow access from the specific domain
    res.header("Access-Control-Allow-Origin", "https://onsentoyoga.life"); // Specify your domain
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Your other existing routes and middleware in main.js
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Continue with other routes or listen method if applicable
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
