// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const divHeader = document.querySelector('.header-container')

function Header() {

    //create elements
    const header = document.createElement('div')
    const span = document.createElement('span')
    const h1 = document.createElement('h1')
    const span2 = document.createElement('span')

    //add classes
    header.classList.add('header')
    span.classList.add('date')
    span2.classList.add('temp')

    //add content
    span.textContent = "MARCH 28, 2020"
    h1.textContent = "Lambda Times"
    span2.textContent = ('98°')

    //append
    header.appendChild(span)
    header.appendChild(h1)
    header.appendChild(span2)

    

    return header
}

//append
divHeader.appendChild(Header())
