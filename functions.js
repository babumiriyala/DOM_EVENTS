



            function myFunction() {
                var x = document.getElementById("fname");
                x.value = x.value.toUpperCase();
            }

            function chageon() {
                var y = document.getElementById("fname1");
                y.value = y.value.toUpperCase();
            }

            function preferedBrowser() {
                prefer = document.forms[0].browsers.value;
                alert("You prefer browsing internet with " + prefer);
            }


            function color(x) {
                x.style.background = "yellow";
            }

            function inputxt() {
                document.getElementById("demo").innerHTML = "You selected some text";
            }

            function confirmInput() {
                fname = document.forms[0].fname.value;
                alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
            }

            function message() {
                alert("This alert box was triggered by the onreset event handler");
            }

            function keydown() {
                alert("You pressed a key inside the input field");
            }
            function keypress() {
                alert("You pressed a key inside the input field");
            }
            function keyup() {
                var x = document.getElementById("fname2");
                x.value = x.value.toUpperCase();
            }
            function writeMessage() {
                document.forms[0].mySecondInput.value = document.forms[0].myInput.value;
            }
