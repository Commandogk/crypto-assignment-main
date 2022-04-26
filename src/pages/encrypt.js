var Alphabet = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ π®ƒ©∆";
export const encrypt = (message, e, n) => {
        let encryptedMessage = "";

         console.log({encryptedMessage, e, n});

        [...message].forEach(element => {
            console.log({
                element,
                pos: Alphabet.indexOf(element)
            });
            encryptedMessage += modPow(Alphabet.indexOf(element), e, n) + " ";
        });
        return encryptedMessage;
    };

export const decrypt = function(ciphertext ,d , n) {
        const ciphertextArray = ciphertext.split(" ");
        var plaintext = "";
        console.log({plaintext, d, n});
        for(let i=0; i<ciphertextArray.length; i++){
            if(ciphertextArray[i].length<1){
                continue;
            }
            ciphertextArray[i] = parseInt(ciphertextArray[i]);
            let decrypted = modPow(ciphertextArray[i], d, n);
            plaintext += Alphabet[decrypted];
        }

        return plaintext;
    };

const modInv = (gen, mod) => {
        var v, d, u, t, c, q;
        v = 1;
        d = gen;
        t = 1;
        c = mod % gen;
        u = Math.floor(mod / gen);
        while (d > 1) {
            q = Math.floor(d / c);
            d = d % c;
            v = v + q * u;
            if (d) {
                q = Math.floor(c / d);
                c = c % d;
                u = u + q * v;
            }
        }
        return d ? v : mod - u;
    };
    const modPow = (base, exp, mod) => {
        var c, x;
        if (exp === 0) {
            return 1;
        } else if (exp < 0) {
            exp = -exp;
            base = modInv(base, mod);
        }
        c = 1;
        while (exp > 0) {
            if (exp % 2 === 0) {
                base = (base * base) % mod;
                exp /= 2;
            } else {
                c = (c * base) % mod;
                exp--;
            }
        }
        return c;
    };
