function generateNumber() {

    const min = Math.ceil(document.querySelector('.primeiro-numero').value)
    const max = Math.floor(document.querySelector('.segundo-numero').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
}