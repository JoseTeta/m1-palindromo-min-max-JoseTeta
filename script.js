function isPalindrome(str){
    
    
        let cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        
        
        let length = cleanedStr.length;
      
        
        for (let i = 0; i < Math.floor(length / 2); i++) {
          if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
            return false; 
          }
        }
      
        return true; 
      }
          

function arrayMaxMin(arr){
    let min = arr[0];
        let max = arr[0];
        
        
        let i = 1;
      
        
        while (i < arr.length) {
          if (arr[i] < min) {
            min = arr[i]; 
          }
          if (arr[i] > max) {
            max = arr[i]; 
          }
          i++; 
        }
        
        
        return [min, max];
      }
