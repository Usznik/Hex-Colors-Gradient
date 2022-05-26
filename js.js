function changeColor()
{ 
    // first way
    var hex_numbers=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode='';
    for(i=0;i<6;i++)
    {
        var hexindex = Math.floor(Math.random()*hex_numbers.length);
        hexcode += hex_numbers[hexindex];
    }
    // second  way
        let color = Math.floor(Math.random()*16777215).toString(16); // 16777215 is FFFFFF in decimal
    document.getElementById("color").innerHTML = hexcode;
    document.getElementById("color2").innerHTML = color;
    document.body.style.background = `linear-gradient(to right, #${hexcode}, #${color})` // ${}  - argument with value not string , 
    // ``  - 
}