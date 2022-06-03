import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [{
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Australia election: PM Anthony Albanese secures majority government",
                "description": "The results in many seats had been unclear after a record vote for independents and minor parties.",
                "url": "http://www.bbc.co.uk/news/world-australia-61641853",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0AED/production/_124979720_gettyimages-1398734727.jpg",
                "publishedAt": "2022-05-31T01:37:17.4068683Z",
                "content": "By Tiffanie TurnbullBBC News, Sydney\r\nImage source, Getty Images\r\nImage caption, Prime Minister Anthony Albanese will govern with a majority in the House of Representatives\r\nAustralia's new Labor gov… [+1992 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Handguns: Canada proposes complete freeze on ownership",
                "description": "Prime Minister Justin Trudeau says there is no reason anyone needs a gun other than for sports or hunting.",
                "url": "http://www.bbc.co.uk/news/world-us-canada-61641543",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/06A1/production/_124979610_tv076407180.jpg",
                "publishedAt": "2022-05-30T22:37:21.6733349Z",
                "content": "Image caption, Canada already has far stricter gun ownership laws than the United States\r\nCanada should introduce a total ban on the buying and selling of all handguns, Prime Minister Justin Trudeau … [+2091 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Timed Teaser: What happened to the Eurovision trophy?",
                "description": "Test your knowledge of the news these last few days - 10 questions, 10 seconds each. Go!",
                "url": "http://www.bbc.co.uk/news/world-us-canada-61628168",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E840/production/_124965495_ev4.jpg",
                "publishedAt": "2022-05-30T22:22:20.454592Z",
                "content": "Test your news knowledge against the clock. Can you outscore your friends?\r\nIf you cannot see the quiz, follow this link.\r\nWant more of the same? Try last week's teaser. Or take Friday's quiz of the … [+75 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "EU struggles to resolve Russian oil ban proposal differences",
                "description": "The latest round of sanctions need approval from all 27 EU members but Hungary opposes the move.",
                "url": "http://www.bbc.co.uk/news/world-europe-61638860",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/133C3/production/_124978787_gettyimages-1241004828-1.jpg",
                "publishedAt": "2022-05-30T21:52:19.704279Z",
                "content": "Image source, Photonews via Getty Images\r\nImage caption, Ursula von der Leyen said expectations were low\r\nEU members are struggling to resolve their differences over a proposed ban on Russian oil imp… [+4600 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Samuel Kanu: Kidnapped Nigerian Methodist Church leader freed",
                "description": "Samuel Kanu was kidnapped in the south-east where separatists have been agitating for a breakaway state.",
                "url": "http://www.bbc.co.uk/news/world-africa-61632802",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4A84/production/_124967091_samuelkanuuche2-methodistchurchnigeria.jpg",
                "publishedAt": "2022-05-30T21:07:23.0182873Z",
                "content": "By Chris EwokorBBC News\r\nImage caption, Colleagues say Samuel Kanu had been planning to retire later this year\r\nThe head of the Methodist Church in Nigeria, Samuel Kanu, has been freed after being ab… [+2204 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Sick killer whale 'found dead in France'",
                "description": "Experts had tried to guide the four-metre orca back to the sea after it swam up the River Seine.",
                "url": "http://www.bbc.co.uk/news/world-europe-61634598",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6EA7/production/_124972382_mediaitem124968457.jpg",
                "publishedAt": "2022-05-30T19:52:18.3765332Z",
                "content": "Image caption, Authorities had been planning to euthanise the animal\r\nAn ailing killer whale has been found dead after swimming up the River Seine in Normandy, France, activists say.\r\nThe four-metre … [+2195 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "News",
                "title": "The incredible change the Queen has seen",
                "description": "The social, political, scientific and technological shifts during the Queen's 70 years on the throne.",
                "url": "https://www.bbc.co.uk/news/resources/idt-34dc99f5-4d4c-4de6-b066-19c7ba846320",
                "urlToImage": "https://c.files.bbci.co.uk/6CE5/production/_124977872_queen_jubilee_index_promo_976.png",
                "publishedAt": "2022-05-30T17:10:12.16Z",
                "content": "The UK has undergone huge social, scientific and technological change over the last 70 years - but Queen Elizabeth II has remained a constant, stabilising presence.\r\nTake a visual journey through thi… [+4968 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "'I watched from afar Russia's latest merciless assault on Severodonetsk'",
                "description": "Quentin Sommerville describes relentless artillery bombardment in Donbas ahead of Russian forces entering Severodonetsk.",
                "url": "http://www.bbc.co.uk/news/world-europe-61634050",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/042B/production/_124976010_1200-dd.jpg",
                "publishedAt": "2022-05-30T16:22:20.8600945Z",
                "content": "By Quentin SommervilleBBC News, Lysychansk, Ukraine\r\nImage source, Quentin Sommerville / BBC\r\nImage caption, From Lysychansk, smoke could be seen rising above Severodonetsk\r\nRussian forces have enter… [+7449 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Mona Lisa: Man dressed as old woman throws cake at da Vinci painting",
                "description": "The perpetrator urged people to \"think of the earth\" while being led away from the scene.",
                "url": "http://www.bbc.co.uk/news/entertainment-arts-61635822",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1344F/production/_124972987_hi076394674.jpg",
                "publishedAt": "2022-05-30T15:52:20.9697445Z",
                "content": "Image source, Twitter/@klevisl007/Reuters\r\nImage caption, The Mona Lisa is the world's most famous artwork, created by Leonardo da Vinci from 1503\r\nA man disguised as an elderly woman in a wheelchair… [+2148 chars]"
            },
        ],
            loading: true
        }
    }
    async componentDidMount(){
        let url = 'https://newsapi.org/v2/everything?q=apple&from=2022-05-31&to=2022-05-31&sortBy=popularity&apiKey=94dae98fc8d74ed6a8473da2e8bfc459';
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles:parsedata.articles
        })
    }
    render() {
        let mode = this.props.mode;
        return (
            <div className='container my-3'>
                <h2 className={`text-center text-${mode === 'Dark Mode'?"dark":"white"}`}>NewsHub- Top Headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={(element.title && element.title.length>75) ?element.title.slice(0,75)+"...":element.title} description={(element.description && element.description.length>100) ?element.description.slice(0,100)+"...":element.description} imageUrl={element.urlToImage} newsUrl={element.url} mode = {mode} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg> Previous</button>
                <button type="button" className="btn btn-primary">Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button>
                </div>
            </div>
        )
    }
}

