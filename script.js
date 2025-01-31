
        const passwordBox = document.getElementById("password");
        const lenght = 10;

        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefgghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "@&*_+~!";
        const currency = "#$"

        const allChars = upperCase + lowerCase + number + symbol + currency;

        function createPassword(){
            let password = "";
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password += number[Math.floor(Math.random() * number.length)];
            password += symbol[Math.floor(Math.random() * symbol.length)];
            password += currency[Math.floor(Math.random() * currency.length)]

            while(lenght > password.length){
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }
            passwordBox.value = password;
        }

        function copyPassword(){
            passwordBox.select();
            document.execCommand("copy");
        }