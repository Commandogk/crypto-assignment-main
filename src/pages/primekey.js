const getPrimes = (min, max) => {
    const result = Array(max + 1)
      .fill(0)
      .map((_, i) => i);
    for (let i = 2; i <= Math.sqrt(max + 1); i++) {
      for (let j = i ** 2; j < max + 1; j += i) delete result[j];
    }
    return Object.values(result.slice(Math.max(min, 2)));
  };
  
  const getRandNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const getRandPrime = (min, max) => {
    const primes = getPrimes(min, max);
    return primes[getRandNum(0, primes.length - 1)];
  };

 

export const getValues = () => {
    let prime1 = getRandPrime(100,500);
    let prime2 = getRandPrime(100,500);

    let n = prime1*prime2;
    let phi = (prime1-1)*(prime2-1);
    let d = 1;
    let e = 5;
    for(let k = 0; k<phi; k++) {
        if((k*e) % phi === 1) {
            d = k;
            break;
        }
    }


    while (gcd(phi, e) != 1) {
        e++;
    }

    return [n, e , d];
}

function reduceB( a,  b)
{

    let mod = 0;
 
    for (let i=0; i<b.length-1; i++)
        mod = (mod*10 + b[i] - '0')%a;
 
    return mod; 
}
 

function gcdLarge( a, b)
{
    
    let num = reduceB(a, b);
 
    return gcd(a, num);
}
function gcd (a, b)
{
   var r;
   while (b>0)
   {
      r=a%b;
      a=b;
      b=r;
   }
   return a;
}