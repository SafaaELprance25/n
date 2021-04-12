const request = require('request')
const news = (address,country,callback)=>{
   const newsUrl ='https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=243a9783590b47b8b0142b896764501f'
    
      request({url:newsUrl,json:true},(error,response)=>{

        if(error){
            callback('Unable to connect to news service',undefined)
        }
        else if(response.body.message){
            callback('Unauthorized user',undefined)
        }
        else if(response.body.articles.length == 0){
            callback('Unable to find location',undefined)
        }
        else{
                callback(undefined, response.body.articles)
           
        }
    })
}
module.exports = news
