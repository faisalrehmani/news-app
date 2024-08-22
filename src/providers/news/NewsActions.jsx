export const fetchNews = async(topic) => {

const todaysDate = new Date().toLocaleDateString("en-IN").split("/")



const day = todaysDate[2]
const month = todaysDate[1] - 1
const year = todaysDate[0]

const formatedDate = `${day}-${month}-${year}`

 

   const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${formatedDate}&sortBy=publishedAt&apiKey=530cfc858e1e47d89eec2f164f309670`)
      

   const data = await response.json()
   return data.articles;

}