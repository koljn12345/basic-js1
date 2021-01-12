class VigenereCipheringMachine {
    constructor(modification=true) {
        this.modification= modification;
        this.ABC= createAbc();
    }
    encrypt(message, key) {
        return this.decoder(message,key, 'enc');
    }

    decrypt(encryptedMessage, key) {
        return this.decoder(encryptedMessage,key, 'dec');        
    }

    decoder(message, key, method){
        if(!this.modification) {message= message.split('').reverse().join('');}
        message = message.toLocaleUpperCase();
        key = key.toLocaleUpperCase();
        let index_key = 0;
        let new_S = message.split('').map((el,i)=>{
        if (this.ABC.indexOf(el) < 0)
            return el;
            if(method=== 'enc')
                {res = this.ABC[(this.ABC.indexOf(el) + 
                    (this.ABC.indexOf(key[index_key]) > 0 ? this.ABC.indexOf(key[index_key]) : 0)) % 
                    this.ABC.length];}
            else 
                {res = this.ABC[(this.ABC.indexOf(el) - (this.ABC.indexOf(key[index_key]) > 0 ? this.ABC.indexOf(key[index_key]) : 0)+this.ABC.length) % this.ABC.length];}
        index_key++;
        if (index_key === key.length)
            index_key = 0;
        return res
    }
    );
    if(this.method=== false) return new_S.revers().join('');
    return new_S.join('');
    }
}

function createAbc() {
    ABC = [];
    for (i = 65; i < 91; i++) {
    ABC.push(String.fromCharCode(i))
}
    return ABC;
}
module.exports = VigenereCipheringMachine;
