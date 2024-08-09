document.getElementById('algorithm').addEventListener('click', function() {
    const cesarOptions = document.getElementById('cesar-options');
    const cyclicOptions = document.getElementById('cyclic-options');
    const selectedAlgorithm = this.value;

    cesarOptions.style.display = selectedAlgorithm === 'cesar' ? 'block' : 'none';
    cyclicOptions.style.display = selectedAlgorithm === 'cyclic' ? 'block' : 'none';
});

document.getElementById('num-ciphers').addEventListener('change', function() {
    const cipher2Container = document.getElementById('cipher2-container');
    cipher2Container.style.display = this.value === '2' ? 'block' : 'none';
});

document.getElementById('encryptButton').addEventListener('click', function() {
    const plaintext = document.getElementById('plaintext').value;
    const selectedAlgorithm = document.getElementById('algorithm').value;
    let ciphertext = '';

    if (selectedAlgorithm === 'cesar') {
        const shift = parseInt(document.getElementById('shift').value);
        ciphertext = cesarCipher(plaintext, shift);
    } else if (selectedAlgorithm === 'cyclic') {
        const numCiphers = parseInt(document.getElementById('num-ciphers').value);
        const key1 = document.getElementById('key1').value;
        const key2 = numCiphers === 2 ? document.getElementById('key2').value : '';
        ciphertext = cyclicCipher(plaintext, key1, key2, numCiphers);
    }

    document.getElementById('ciphertext').value = ciphertext;
});

function cesarCipher(text, shift) {
    return text.split('').map(char => {
        const charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) { // Letras maiúsculas
            return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Letras minúsculas
            return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }

        return char; // Não alterar caracteres que não são letras
    }).join('');
}

function cyclicCipher(text, key1, key2, numCiphers) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    const normalizedKey1 = key1.toLowerCase();
    const normalizedKey2 = numCiphers === 2 ? key2.toLowerCase() : key1.toLowerCase(); // Usar a mesma chave se for 1 cifra

    return text.split('').map((char, index) => {
        const charIndex = alphabet.indexOf(char.toLowerCase());

        if (charIndex !== -1) {
            const substitutedChar = index % 2 === 0 ? normalizedKey1[charIndex] : normalizedKey2[charIndex];
            return char === char.toUpperCase() ? substitutedChar.toUpperCase() : substitutedChar;
        }

        return char;
    }).join('');
}
