// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector('.cards-container')
axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(response => {        
        const articleList = response.data.articles
        console.log(articleList)

        function articleCreator(anArticle){
            
            for(let i = 0; i < anArticle.javascript.length; i++){
            
            const articleCard = document.createElement('div')
            const articleHeadline = document.createElement('div')
            const articleAuthor = document.createElement('div')
            const articleImgContainer = document.createElement('div')
            const articleImg = document.createElement('img')
            const articleSpan = document.createElement('span')

            articleCard.classList.add('card')
            articleHeadline.classList.add('headline')
            articleAuthor.classList.add('author')
            articleImgContainer.classList.add('img-container')

            cardContainer.appendChild(articleCard)
            articleCard.appendChild(articleHeadline)
            articleCard.appendChild(articleAuthor)
            articleAuthor.appendChild(articleImgContainer)
            articleAuthor.appendChild(articleSpan)
            articleImgContainer.appendChild(articleImg)

            articleHeadline.textContent = (anArticle.javascript[i].headline)
            articleImg.src = (anArticle.javascript[i].authorPhoto)
            articleSpan.textContent = (`By ${anArticle.javascript[i].authorName}`)

            console.log(articleCard)

            //dont forget to add onclick
            } //for loop ending         
            

        }//function ending
        console.log(articleCreator(articleList))

        
    })//.then ending

    .catch(error =>{
        debugger    
    })