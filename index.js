let a = 10;
        var b = 20;
        const c = 30;

        function showResult(value) {
            document.getElementById("Output").innerText = value;
        }

        function Addnum(){
            showResult(a + b + c);
        }

        function Subnum(){
            showResult(a - b - c);
        }

        function Mulnum(){
            showResult(a * b * c);
        }

        function Divnum(){
            showResult(a / b / c);
        }

        function ChangeValuea(){
            let newValue = prompt("Enter new value for a:");
            if(newValue !== null){
                a = Number(newValue);
                document.getElementById("a").innerText = "Value of a: " + a;
            }
        }

        function Changevalueb(){
            let newValue = prompt("Enter new value for b:");
            if(newValue !== null){
                b = Number(newValue);
                document.getElementById("b").innerText = "Value of b: " + b;
            }
        }

        function Changevaluec(){
            let newValue = prompt("Enter new value for c:");
            if(newValue !== null){
                c = Number(newValue);
                document.getElementById("c").innerText = "Value of c: " + c;
            }
        }

        function Check(){
            alert(a===b && b===c);
        }

        function Checknum(){
            alert(a===b && b===c);
        }

        function Compare(){
            alert(a > b && b > c);
        }