const btnArray = [
    document.getElementsByClassName('btn-one'),
    document.getElementsByClassName('btn-two'),
    document.getElementsByClassName('btn-three'),
    document.getElementsByClassName('btn-four'),
]
const dropDownArray = [
    document.getElementsByClassName('dropdown-one'),
    document.getElementsByClassName('dropdown-two'),
    document.getElementsByClassName('dropdown-three'),
    document.getElementsByClassName('dropdown-four'),
]
// works

function hideDropdown() {
    const dropDowns = document.querySelectorAll('.dropdown')
    dropDowns.forEach(element=> {
        element.style.display = 'none'
    })
    console.log(dropDowns)
}
hideDropdown()

function showADropDown() {
    // console.log(btnArray[0])
    // btnArray[0].addEventListener('click', function() {
            btnArray[0].style.display = 'flex'
    // })
}
showADropDown()
// console.log('stress plenty')