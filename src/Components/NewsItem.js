import React from 'react'
import './NewsItem.css'
import breakingNews from './BreakingNews.jpg'
export default function NewsItem(props) {
    let {title, description, imageUrl, newsUrl,mode,author,date,source} = props;
    return (
      <div className="card my-3 m-auto" style={(mode === 'Light Mode')?{backgroundColor: '#1F1F1F',color: 'white',width: "20rem", height:"450px"}:{backgroundColor: 'white',color: 'black',width: "20rem", height:"450px"}}>
        <img src={imageUrl?imageUrl:breakingNews} className="card-img-top" alt="..."  style={{height:'178px'}}/>
        <span className="position-absolute badge bg-danger" style={{right:'0',borderTopRightRadius:'0',borderBottomRightRadius:'0',borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px',display:'flex',justifyContent:'center',alignItems:'center'}}>{source}</span>
        <div className="card-body">
          <h5 className="card-title overflow-hidden text-break" style={{maxHeight:"80px"}}>{title}</h5>
          <p className="card-text " style = {{wordBreak:"break-all"}}>{!description?title:description} </p>
          <p className="card-text"><small className={`text-muted ${mode==='Dark Mode'?"":'changecolor'}`} style={{position:'absolute',bottom:'50px',paddingRight:'3px'}}>By {author} on {new Date(date).toLocaleString()}</small></p>
          <a href={newsUrl} target = "_blank"  rel="noreferrer nofollow" className="btn d-block btn-primary mx-0 my-0 "style={{
            position:'absolute',
            width:"100.5%",
            bottom:'-0.2px',
            left:'-0.2px',
            right:0
          }}>Read More</a>
        </div>
      </div>
    )
}
