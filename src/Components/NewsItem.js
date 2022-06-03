import React, { Component } from 'react'
import breakingNews from './BreakingNews.jpg'
export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,mode} = this.props;
    return (
      <div className="card my-3 m-auto" style={(mode === 'Light Mode')?{backgroundColor: '#1F1F1F',color: 'white',width: "20rem", height:"400px"}:{backgroundColor: 'white',color: 'black',width: "20rem", height:"400px"}}>
        <img src={imageUrl?imageUrl:breakingNews} className="card-img-top" alt="..."  style={{height:'178px'}}/>
        <div className="card-body">
          <h5 className="card-title overflow-hidden text-break" style={{maxHeight:"80px"}}>{title}</h5>
          <p className="card-text " style = {{wordBreak:"break-all"}}>{description} </p>
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
}

export default NewsItem