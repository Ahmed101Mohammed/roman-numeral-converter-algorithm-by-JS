function convertToRoman(num) {
    // Variable to collect the nomper:
    let romanNum = "";
    
    while (num > 0) {
      // I - IV
      if (num < 5) {
        
        let t = num / 1; // times 1 in num
        t = parseInt(t);
        
        if (num === 4) {
          romanNum += "IV";
          num -= 4;
        } else {
          for (let i = 0; i < t; i++) {
            romanNum += "I";
          }
          num -= t * 1;
        }
      }
      // V - IX
      else if (num < 10) {
        
        let t = num / 5; // times 5 in num
        t = parseInt(t);
        
        if (num === 9) {
          romanNum += "IX";
          num -= 9;
        } else {
          for (let i = 0; i < t; i++) {
            romanNum += "V";
          }
          num -= t * 5;
        }
      }
      // X - XLVIIII
      else if (num < 50) {
       
        let t = num / 10; // times 10 in num
        t = parseInt(t);
       
        if (num >= 40) {
          romanNum += "XL";
          num -= 40;
        } else {
          for (let i = 0; i < t; i++) {
            romanNum += "X";
          }
          num -= t * 10;
        }
      }
      // L - XCIX
      else if (num < 100) {
       
        let t = num / 50; // times 50 in num
        t = parseInt(t);
     
        if (num >= 90) {
          romanNum += "XC";
          num -= 90;
        } else {
          for (let i = 0; i < t; i++) {
            romanNum += "L";
          }
          num -= t * 50;
        }
      }
      // C - CDXCIX
      else if (num < 500) {
        
        let t = num / 100; // times 100 in num
        t = parseInt(t);
    
        if (num >= 400) {
          romanNum += "CD";
          num -= 400;
        } else {
          for (let i = 0; i < t; i++) {
            romanNum += "C";
          }
          num -= t * 100;
        }
      }
      // D - CMXCIX
      else if (num < 1000) {
        
        let t = num / 500; // times 500 in num
        t = parseInt(t);
        
        if (num >= 900) {
          romanNum += "CM";
          num -= 900;
        } else {
          for (let i = 0; i < t; i++) {
            romanNum += "D";
          }
          num -= t * 500;
        }
      }
      // > M
      else if (num >= 1000) {
        
        let t = num / 1000; // times 1000 in num
        t = parseInt(t);
        
          for (let i = 0; i < t; i++) {
            romanNum += "M";
          }
          num -= t * 1000;
        
      }
    }
    return romanNum;
  }
  
convertToRoman(1); //I

  