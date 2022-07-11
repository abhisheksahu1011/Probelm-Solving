// Find the Smaller Angle


var Minimal_Angle = (h, m) => 
{
  if(h===12){
        h = 0;
      }   
      if(m===60){
        m = 0;
        h+=1;
        if(h>12){
          h = h-12
        }
      }
      let hAngle = 0.5*(h*60+m);
      let mAngle = 6*m;
      let result = Math.abs(hAngle-mAngle)
      result = Math.min((360-result),result)
      return result;
}

// Check whether the year is Leap year or not.

var Check_Leap = (year) => 
{
  if(year%4===0){
            if(year%100===0){
              if(year%400===0){
                return "Leap Year";
              }else{
                return "Non Leap Year";
              }
            }else{
              return "Leap Year";
            }
             }else{
               return "Non Leap Year"
           }

};


// Perfect Number Check.

if(N===1){
    return "YES"
  }else{
    let sum = 0;
    for(let i = 1;i< N;i++){
      if(N%i === 0){
        sum += i
      }
    }
    if (sum === N){
      return "YES"
    }else{
      return "NO"
    }
  } 

//   Reverse a Number.

var Reverse_Number = (N) => 
{
  N = N.toString()
        let newNum = 0;
        let rem = 0;
        for (let i of N) {
          rem = N % 10;
          N = Math.floor(N / 10);
          newNum = newNum * 10 + rem;
        }
          return newNum;

};


// Substring Check.


var Substring_Check = (S1, S2) => 
{
      return S1.includes(S2)?"YES":"NO"
};