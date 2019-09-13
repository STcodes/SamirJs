  function calcG(){
                var x = document.getElementById("kg").value;
                var y = document.getElementById("gr");
                document.getElementById("gr").value = x * 1000;
            }

   function calcK(){
                var x = document.getElementById("kg").value;
                var y = document.getElementById("gr");
                document.getElementById("gr").value = y / 1000;
            }

   function calcD(){
                var x = document.getElementById("euro").value;
                var y = document.getElementById("dollar");
                document.getElementById("dollar").value = x * 1.1;
            }

   function calcE(){
                var x = document.getElementById("euro").value;
                var y = document.getElementById("dollar");
                document.getElementById("dollar").value = y / 1.1;
            }

