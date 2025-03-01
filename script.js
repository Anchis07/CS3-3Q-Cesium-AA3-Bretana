function verifyMessage() {
    let message = prompt('Ilagay ang mensahe para i-verify');

    if (message.includes('aI') || message.includes('Ai')) {
        document.getElementById('result').innerHTML = 'Ang mensaheng "'+ message +'" ay peke.';
    } else if (message.includes('FR') && message.includes('AI')) {
        document.getElementById('result').innerHTML = 'Ang mensaheng "'+ message +'" ay lehitimo.';
    } else if (message.includes('FR')) {
        document.getElementById('result').innerHTML = 'Ang mensaheng "'+ message +'" ay lehitimo.';
    } else if (message.includes('AI')) {
        document.getElementById('result').innerHTML = 'Ang mensaheng "'+ message +'" ay peke.';
    } else {
        document.getElementById('result').innerHTML = 'Ang mensaheng "'+ message +'" ay hindi pa naka-encode.';
    }
}