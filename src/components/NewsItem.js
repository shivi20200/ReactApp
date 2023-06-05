import React from 'react'

const NewsItem =(props)=>{
  
      let {title, description,imageUrl,newsurl, author,date,source} = props;
      return (
        <div className ="my-4">
            <div  className="card" >
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
            <span className=" badge rounded-pill bg-danger" >
    {source}
    </span>
    </div> 
        <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107088960-1657820942859-gettyimages-1241898742-porzycki-netflixa220714_npnzo.jpeg?v=1684585801&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
        <div  className="card-body">
            <h5  className="card-title">{title} </h5>
            <p  className="card-text">{description}...</p>
            <p className ="card-text"><small className="text-primary"> By {!author?
           " Unknown":author} on {new Date(date).toGMTString()} </small> </p>
            <a rel="noreferrer" href={newsurl} target="_blank" className=" btn btn-sm btn btn-success">Read more</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem
