function voltarParaPaginaDeOrigem() {
    const params = new URLSearchParams(window.location.search);
    const origem = params.get('camefrom');

    if (origem === 'gamedev') {
        window.location.href = 'gamedev.html';
    } else if (origem === 'softwareeng') {
        window.location.href = 'softwareeng.html';
    } else {
        window.location.href = 'index.html';
    }
}