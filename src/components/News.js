import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NBC Southern California"
    //         },
    //         "author": "Jonathan Lloyd",
    //         "title": "Magnitude-4.6 Malibu earthquake shakes Southern California from coast to inland areas - NBC Southern California",
    //         "description": "A preliminary magnitude-4.6 earthquake located northwest of Malibu caused shaking in parts of Southern California.",
    //         "url": "http://www.nbclosangeles.com/news/earthquakes/earthquake-shaking-los-angeles-malibu/3335663/",
    //         "urlToImage": "https://media.nbclosangeles.com/2024/02/earthquake-usgs-shake-map-february-9-2024.jpg?quality=85&strip=all&resize=1200%2C675",
    //         "publishedAt": "2024-02-10T04:10:01Z",
    //         "content": "A magnitude-4.6 earthquake northwest of Malibu caused widespread shaking that was felt early Friday afternoon from the coast to inland areas of Southern California.\r\nThe quake was reported just befor… [+2375 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "As Imran Khan Backed Candidates Lead In Pak, Nawaz Sharif's Backup Plan - NDTV",
    //         "description": "Nawaz Sharif said his party will seek talks with rival Bilawal Bhutto Zardari's group on forming a coalition in Pakistan, potentially breaking the deadlock as a contentious election in the South Asian country headed for a hung parliament.",
    //         "url": "https://www.ndtv.com/world-news/pakistan-elections-nawaz-sharif-bilawal-bhutto-zardari-imran-khan-nawaz-sharif-party-to-hold-talks-with-rival-as-pak-heads-for-hung-house-5029389",
    //         "urlToImage": "https://c.ndtvimg.com/2024-02/cj34ct1g_nawaz-sharif_625x300_10_February_24.jpeg?ver-20240117.06",
    //         "publishedAt": "2024-02-10T03:00:01Z",
    //         "content": "Nawaz Sharif is a three-time former premier of Pakistan\r\nNawaz Sharif said his party will seek talks with rival Bilawal Bhutto Zardari's group on forming a coalition in Pakistan, potentially breaking… [+5762 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KXAN.com"
    //         },
    //         "author": "Erica Pauda",
    //         "title": "Dairy products, salad kits and more linked to deadly Listeria outbreak - KXAN.com",
    //         "description": "As you prepare your snacks and dinner for Super Bowl weekend, there are certain food items containing dairy products that are linked to a deadly listeria outbreak, according to Texas Health and Human Services.",
    //         "url": "https://www.kxan.com/news/dairy-products-salad-kits-and-more-linked-to-deadly-listeria-outbreak/",
    //         "urlToImage": "https://www.kxan.com/wp-content/uploads/sites/40/2022/11/1093c3b0124945339d198410adab3bb0.jpg?w=1280",
    //         "publishedAt": "2024-02-10T02:42:40Z",
    //         "content": "AUSTIN (KXAN) — As you prepare your snacks and dinner for Super Bowl weekend, there are certain food items containing certain products that are linked to a deadly listeria outbreak, according to Texa… [+696 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "LISA MASCARO, KEVIN FREKING",
    //         "title": "The Senate is pushing past far-right objections to aiding Ukraine. But next steps are uncertain - The Associated Press",
    //         "description": "The U.S. Senate is slogging past far-right Republican opposition to helping Ukraine fight Russia. Senators are working through the weekend on a $95 billion military aid package for Kyiv, Israel and other allies. It could be President Joe Biden’s last chance f…",
    //         "url": "https://apnews.com/article/senate-ukraine-israel-aid-biden-trump-fa472c17b2061a29a279c45b71e00cb6",
    //         "urlToImage": "https://dims.apnews.com/dims4/default/2b263ec/2147483647/strip/true/crop/5555x3125+0+289/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F04%2F08%2Fa18c7bd2fc2990254c072e0cb245%2Fcb6a047c5a1d4ad8b1f41d27e06bce9f",
    //         "publishedAt": "2024-02-10T02:36:00Z",
    //         "content": "WASHINGTON (AP) The U.S. Senate is plodding past far-right Republican opposition to helping Ukraine fight Russia, working through the weekend on a $95.3 billion military aid package for Kyiv, Israel … [+6219 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": "",
    //         "title": "Super Bowl 2024 bold predictions: Patrick Mahomes cooks NFL's top zone defense, Brock Purdy fails vs. blitz - CBS Sports",
    //         "description": "Here are five bold predictions for the 2023 NFL season finale",
    //         "url": "https://www.cbssports.com/nfl/news/super-bowl-2024-bold-predictions-patrick-mahomes-cooks-nfls-top-zone-defense-brock-purdy-fails-vs-blitz/",
    //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/02/05/f9cac787-04df-4520-b32b-822e8342f993/thumbnail/1200x675/cf353fa0f098b03f8bfc75f0adedf8d6/getty-patrick-mahomes-chiefs-week-19.jpg",
    //         "publishedAt": "2024-02-10T02:01:00Z",
    //         "content": "Super Bowl LVIII features the defending Super Bowl champion Kansas City Chiefs, and the San Francisco 49ers, the NFC's top seed. No matter which team wins, it won't be surprising, and the spread of 4… [+13685 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": null,
    //         "title": "Is Iceland entering a new volcanic era? - BBC.com",
    //         "description": "Scientists think eruptions on the Reykjanes Peninsula could continue for decades or even centuries.",
    //         "url": "https://www.bbc.com/news/science-environment-68255375",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A26C/production/_132608514_8d552d9e1758a87258dc0d861ee6d6e4542305e1.jpg",
    //         "publishedAt": "2024-02-10T02:00:48Z",
    //         "content": "By Rebecca Morelle and Alison Francis BBC News Science\r\nWatch: Dramatic aerials show fast lava spread after Iceland eruption\r\nThis week, Iceland woke up to yet another day of fire, as towering founta… [+6402 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Fci Academy"
    //         },
    //         "author": "Joey Kaufman, Bill Rabinowitz",
    //         "title": "Ohio State set to hire Chip Kelly as offensive coordinator - The Columbus Dispatch",
    //         "description": "UCLA coach Chip Kelly is poised to replace Bill O'Brien as Ohio State's next offensive coordinator.",
    //         "url": "https://www.dispatch.com/story/sports/college/football/2024/02/09/ohio-state-reportedly-targeting-chip-kelly-for-offensive-coordinator/72540617007/",
    //         "urlToImage": "https://www.dispatch.com/gcdn/authoring/images/smg/2024/02/02/USAT/72446463007-USATSI_21435721.jpeg?crop=4282,2410,x0,y222&width=3200&height=1802&format=pjpg&auto=webp",
    //         "publishedAt": "2024-02-10T01:52:30Z",
    //         "content": "UCLA coach Chip Kelly has been hired to replace Bill OBrien as Ohio States offensive coordinator and quarterbacks coach.\r\nThe school announced the hiring of Kelly on Friday with a three-year agreemen… [+4120 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-wall-street-journal",
    //             "name": "The Wall Street Journal"
    //         },
    //         "author": "David Uberti, Ryan Dezember, Heard Editors, Hannah Miao, Charley Grant, Patricia Kowsmann, Jon Sindreu, Angel Au-Yeung, Vicky Ge Huang, Dan Gallagher, Will Feuer, Sara Ashley O'Brien, Telis Demos, Dave Michaels, Jennifer Maloney",
    //         "title": "Stock Market News, Feb. 9, 2024: S&P 500 Closes Above 5000 for First Time - The Wall Street Journal",
    //         "description": "Pinterest and PepsiCo shares fell after their earnings results",
    //         "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-earnings-02-09-2024",
    //         "urlToImage": "https://images.wsj.net/im-785590/social",
    //         "publishedAt": "2024-02-10T01:08:00Z",
    //         "content": "The stock market rallied into new territory Friday.\r\nThe benchmark index closed above 5000 for the first time, after briefly popping above that milestone in the final minute of trading Thursday.\r\nSto… [+1638 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cbs-news",
    //             "name": "CBS News"
    //         },
    //         "author": "Cristina Corujo",
    //         "title": "DNC accuses RFK Jr. campaign and super PAC of colluding on ballot access effort - CBS News",
    //         "description": "The super PAC supporting Robert F. Kennedy Jr.'s independent presidential run is investing up to $15 million on ballot access for him.",
    //         "url": "https://www.cbsnews.com/news/rfk-jr-super-pac-american-values-collusion-accusations-ballot-access-effort-dnc/",
    //         "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/02/10/2e1c0f2f-57d1-4089-b348-9e4db0c40983/thumbnail/1200x630/720a4bcfddfe1ff53ffc5bd9ac1d8141/gettyimages-1988735215.jpg?v=39487f160c45192867463e7cb2b51dad",
    //         "publishedAt": "2024-02-10T00:53:10Z",
    //         "content": "The Democratic National Committee announced Friday that it is filing a Federal Election Commission complaint against Robert F. Kennedy Jr. 's independent presidential campaign and the super PAC suppo… [+3736 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Afouda Bamidele",
    //         "title": "'Rocky' Star Carl Weathers Official Cause Of Death Revealed - Yahoo Entertainment",
    //         "description": "‘Rocky’ star Carl Weathers’ official cause of death has been revealed. According to his death certificate exclusively obtained by The Blast, Weathers passed ...",
    //         "url": "https://www.yahoo.com/entertainment/rocky-star-carl-weathers-official-003437057.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/dX0r4M5nfOISc1Y3P1xpbQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD01NTY-/https://media.zenfs.com/en/theblast_73/6156a8a2a93e3362046fc86514fa06ad",
    //         "publishedAt": "2024-02-10T00:34:00Z",
    //         "content": "'Rocky' star Carl Weathers'official cause of death has been revealed.\r\nAccording to his death certificate exclusively obtained by The Blast, Weathers passed away inside of his home in Venice, Califor… [+3679 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "usa-today",
    //             "name": "USA Today"
    //         },
    //         "author": "Doc Louallen",
    //         "title": "Maryland lottery awards $5 million to 50 Years scratch-off game winner - USA TODAY",
    //         "description": "A Maryland man finally won the top prize in the state's 50 Years game after trying for almost a year.",
    //         "url": "https://www.usatoday.com/story/money/lottery/2024/02/09/maryland-lottery-50-years-scratch-off-5-million-winner/72544126007/",
    //         "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/09/USAT/72544218007-microsoft-teamsimage-202.png?crop=970,547,x0,y33&width=970&height=547&format=pjpg&auto=webp",
    //         "publishedAt": "2024-02-10T00:25:33Z",
    //         "content": "Maryland man wins $5 million from scratch-off game celebrating Maryland Lottery's 50th anniversary, according to the Maryland Lottery.\r\nTroy Deneau from Eastern Shore became the second winner of the … [+3107 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Mick Krever, Hamdi Alkhshali",
    //         "title": "Netanyahu directs Israeli military to draw up plan to evacuate more than one million people from Rafah as offensive looms - CNN",
    //         "description": "Israeli Prime Minister Benjamin Netanyahu has directed the military to plan for the “evacuation of the population” from Rafah alongside the defeat of Hamas in that southern Gaza city, his office said in a statement on Friday.",
    //         "url": "https://www.cnn.com/2024/02/09/middleeast/israel-rafah-evacuation-gaza-intl/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1969688477.jpeg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2024-02-09T23:30:00Z",
    //         "content": "Israeli Prime Minister Benjamin Netanyahu has directed the countrys military to plan for the evacuation of the population from Rafah, his office said in a statement on Friday, ahead of an anticipated… [+4710 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Variety"
    //         },
    //         "author": "Joe Otterson",
    //         "title": "FX Boss John Landgraf on Lack of Long-Running TV Series: ‘Attention Spans Have Declined Radically’ - Variety",
    //         "description": "FX's John Landgraf is not sure the media ecosystem supports television shows that run beyond just a few seasons.",
    //         "url": "https://variety.com/2024/tv/news/fx-john-landgraf-lack-long-running-tv-series-attention-spans-have-declined-radically-1235906052/",
    //         "urlToImage": "https://variety.com/wp-content/uploads/2019/06/john-landgraf-showman-of-the-year-16x9.jpg?w=1000&h=562&crop=1",
    //         "publishedAt": "2024-02-09T23:30:00Z",
    //         "content": "FX‘s John Landgraf is not sure the media ecosystem supports television shows that run beyond just a few seasons. \r\n“I think our attention spans have declined radically and I think our patience with t… [+2112 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WBAL TV Baltimore"
    //         },
    //         "author": "Greg Ng",
    //         "title": "Larry Hogan to run for Senate, 11 News confirms - WBAL TV Baltimore",
    //         "description": "Former Maryland Gov. Larry Hogan will run for U.S. Senate, 11 News has confirmed.",
    //         "url": "https://www.wbaltv.com/article/larry-hogan-running-for-senate-maryland/46697369",
    //         "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/larry-hogan-video-65c65d5a27437.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    //         "publishedAt": "2024-02-09T23:11:00Z",
    //         "content": "ANNAPOLIS, Md. (WBAL &amp; AP) —Former Maryland Gov. Larry Hogan will run for U.S. Senate, 11 News has confirmed.\r\nHogan made his Senate bid known just hours before Maryland's filing 9 p.m. deadline … [+10316 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-hill",
    //             "name": "The Hill"
    //         },
    //         "author": "Lauren Irwin",
    //         "title": "Boris Johnson calls Tucker Carlson a traitor for Putin interview - The Hill",
    //         "description": "Boris Johnson, the former prime minister of the United Kingdom, called out conservative commentator Tucker Carlson for interviewing Russian President Vladimir Putin. “Around the world, people are watching that ludicrous interview with Vladimir Putin conducted…",
    //         "url": "https://thehill.com/policy/international/4459283-boris-johnson-calls-tucker-carlson-a-traitor-for-putin-interview/",
    //         "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/07/JohnsonBoris-ZelenskyVolodymyr-04092022.jpg?w=1280",
    //         "publishedAt": "2024-02-09T22:24:00Z",
    //         "content": "Skip to content\r\nBoris Johnson, the former prime minister of the United Kingdom, called out conservative commentator Tucker Carlson for interviewing Russian President Vladimir Putin.\r\n“Around the wor… [+2157 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Space.com"
    //         },
    //         "author": "Elizabeth Howell",
    //         "title": "Mars helicopter Ingenuity's final resting place named after 'Undying Lands' in 'Lord of the Rings' - Space.com",
    //         "description": "There are Tolkien fans at the Jet Propulsion Lab.",
    //         "url": "https://www.space.com/ingenuity-mars-helicopter-final-resting-place-lord-of-the-rings-tolkein",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/Z87PP9qxVG7vFLJa2r9JQP-1200-80.jpg",
    //         "publishedAt": "2024-02-09T22:15:15Z",
    //         "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "STAT"
    //         },
    //         "author": "Annalisa Merelli",
    //         "title": "Biden report: The neurospychology of memory and aging - STAT",
    //         "description": "What is the relationship between aging, memory loss, and overall cognition? That’s a matter of hot debate in the wake of special counsel Rober Hur’s report.",
    //         "url": "https://www.statnews.com/2024/02/09/neuropsychologist-on-biden-criticism-aging-science/",
    //         "urlToImage": "https://www.statnews.com/wp-content/uploads/2024/02/AP24040041304225-1024x576.jpg",
    //         "publishedAt": "2024-02-09T22:00:23Z",
    //         "content": "What is the relationship between aging, memory loss, and overall cognition? Thats a matter of hot debate in the wake of special counsel Robert Hurs report on President Bidens alleged mishandling of c… [+4602 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "JEFF AMY",
    //         "title": "Georgia Republicans say Fani Willis inquiry isn't a 'witch hunt,' but Democrats doubt good faith - The Associated Press",
    //         "description": "The Republican leading a Georgia state Senate committee to investigate Fulton County District Attorney Fani Willis says he seeks just the facts. But the lead Democrat begrudgingly serving on the panel said after its first meeting Friday that she doubts the co…",
    //         "url": "https://apnews.com/article/georgia-fani-willis-donald-trump-cb56a735969b6069e8b4553839792328",
    //         "urlToImage": "https://dims.apnews.com/dims4/default/7d4d9ee/2147483647/strip/true/crop/3074x1729+0+160/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F53%2F23%2Fa4e08ea6464833d24485267fc51b%2F81d72210dcfe405e814c46bb9d9f8831",
    //         "publishedAt": "2024-02-09T21:25:00Z",
    //         "content": "ATLANTA (AP) The Republican leading a specially-appointed Georgia state Senate committee thats supposed to investigate whether Fulton County District Attorney Fani Willis committed misconduct proclai… [+4875 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Sports Illustrated"
    //         },
    //         "author": "Rohan Nadkarni",
    //         "title": "NBA Trade Deadline Winners and Losers: Knicks Make Best Moves, but No Help on the Way for LeBron James and Stephen Curry - Sports Illustrated",
    //         "description": "The new CBA took away some excitement from the usual flurry of midseason movement.",
    //         "url": "https://www.si.com/nba/2024/02/09/nba-trade-deadline-winners-and-losers-knicks-lebron-james-stephen-curry",
    //         "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjA0MjMyNzc4Mzk5NjIyNzk2/new-york-knicks-guard-jalen-brunson.jpg",
    //         "publishedAt": "2024-02-09T21:10:22Z",
    //         "content": "We are now one NBA trade deadline closer to the apocalypse. Let’s not waste any more time getting to winners and losers.\r\nWinner: The new CBA\r\nThe new CBA between the team owners and players maybe di… [+4699 chars]"
    //     }
    // ]
    static defaultProps ={
        country:"in",
        pageSize:5,
        category:'general'
    }

    static propTypes ={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    constructor(props){
        super(props);
        console.log('This is constructor');
        
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title = `NewsTea - ${this.props.category}`
    }

    async updatePage(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69e58ca2fb8349528f087079c7145bff&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData =await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })
    }

    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69e58ca2fb8349528f087079c7145bff&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData =await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })
        
    }

    handlePrevPage =async ()=>{
        this.setState({page: this.state.page - 1})
        this.updatePage()
    }

    handleNextPage =async ()=>{
    this.setState({page: this.state.page + 1})
    this.updatePage()
    }

    render() {
        return (
            <>
        <div className='container my-3'>
            <h2 className='text-center' style={{fontWeight:"700",fontSize:"40px"}}>NewsTea Top News on {this.props.category}</h2>
            {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col md-3 my-3" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imgUrl={element.urlToImage?element.urlToImage:"https://sportshub.cbsistatic.com/i/r/2024/02/05/f9cac787-04df-4520-b32b-822e8342f993/thumbnail/1200x675/cf353fa0f098b03f8bfc75f0adedf8d6/getty-patrick-mahomes-chiefs-week-19.jpg"} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
        </div>
        <div className="container d-flex justify-content-between my-2">
        <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevPage} className="btn btn-dark">&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextPage} className="btn btn-dark">Next &rarr;</button>
        </div>
        <div className='text-center'>
            <h5>Page No. - {this.state.page}</h5>
        </div>
        </>
        )
    }
}

export default News