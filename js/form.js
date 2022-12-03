function validate ()

        {
            var username = document.getElementById("uName");
            var email = document.getElementById("email");
            var feedback = document.getElementById("comment");

            if(username.value.trim()==""||email.value.trim()==""||feedback.value.trim()=="")
            {
                alert ("No blank values allowed")
                return false;
            }
            else
            {
                true;
            }
        }