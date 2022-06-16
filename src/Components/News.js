import React, { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default function News(props) {
    const [articles, setarticles] = useState([]);
    const [totalResults, settotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log(document.getElementById('bigcontainer').style.height)
        props.changepagetitle(props.category);
        async function fetchData() {
            props.changeprogress(30);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=1`;
            let data = await fetch(url);
            props.changeprogress(60);
            let parsedata = await data.json();
            props.changeprogress(90);
            setarticles(parsedata.articles);
            settotalResults(parsedata.totalResults);
            setLoading(false);
            props.changeprogress(100);
        }
        fetchData();
        // eslint-disable-next-line
    }, [])

    // const updatepage = async (val) => {
    // setLoading(true);
    //     
    //     let nop = page;
    //     nop += val;
    //     let url;
    //     if (nop === 6) {
    //         url = url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${9}&page=${nop}`;
    //     }
    //     else {
    //         url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${nop}`;
    //     }
    //     let data = await fetch(url);
    //     let parsedata = await data.json();
    //     setarticles(articles.concat(parsedata.articles));
    //     setPage(nop);
    //     setLoading(false);
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }
    const fetchMoreData = async () => {
        let nop = page;
        nop += 1;
        let url;
        if (nop === 6) {
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=9&page=${nop}`;
        }
        else {
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${nop}`;
        }
        let data = await fetch(url);

        let parsedata = await data.json();
        setarticles(articles.concat(parsedata.articles));
        setPage(nop);
    }
    let mode = props.mode;
    return (
        <div className='container mt-4 mb-3 overflow-hidden' id = "bigcontainer">
            <h2 className={`text-center text-${mode === 'Dark Mode' ? "dark" : "white"}`}>{`NewsHub- Top ${props.category[0].toUpperCase() + props.category.slice(1)} Headlines`}</h2>
            {loading && <Spinner />}
            <InfiniteScroll

                dataLength={articles ? articles.length : 0}
                next={fetchMoreData}
                hasMore={(articles ? articles.length !== totalResults : false) && page !== 5}////experimenting
                loader={<Spinner />}
                style={{ overflow: 'hidden' }}>
                <div className="row" style={{ marginTop: '0.45rem', overflow: 'hidden' }}>
                    {!loading && articles && articles.map((element) => {
                        return <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 }`} key={element.url}>
                            <NewsItem source={element.source.name} author={!element.author ? "Author" : element.author} date={element.publishedAt} title={(element.title && element.title.length > 75) ? element.title.slice(0, 75) + "..." : element.title} description={(element.description && element.description.length > 100) ? element.description.slice(0, 100) + "..." : element.description} imageUrl={element.urlToImage} newsUrl={element.url} mode={mode} />
                        </div>
                    })}

                </div>
            </InfiniteScroll>
            {/* {!loading && <div className="container d-flex justify-content-between">
                <button type="button" className="btn btn-primary" disabled = {page === 1} onClick={()=>{updatepage(-1)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg> Previous</button>
                <button type="button" className="btn btn-primary" disabled = {(Math.ceil(totalResults/pageSize) <= page) || (page === 6)} onClick={()=>{updatepage(1)}}>Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button>
                </div>} */}
        </div>
    )

}

News.defaultProps = {
    pageSize: 18,
    country: 'in',
    category: 'home',
    apikey: '94dae98fc8d74ed6a8473da2e8bfc459',
    mode: 'Dark Mode'
}
News.propsTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    apikey: PropTypes.string,
    mode: PropTypes.string
}