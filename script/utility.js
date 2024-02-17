const hideElement = (elementId,classList) => {
    const element = document.getElementById(elementId)
    element.classList.add(classList)
}

const showElement = (elementId,classList) => {
    const element = document.getElementById(elementId)
    element.classList.remove(classList)
}

const getARandomAlphabet = () => {
    // get or create random alphabet array 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    console.log(alphabet)

    // get a random index 0-25
    
}