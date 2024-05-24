// news.jpg image in public folder
const NewsCard = ({ item }) => {
  console.log(item);

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" style={{ maxWidth: "310px" }}>
      <img src={item.urlToImage?item.urlToImage:"news.jpg"} style={{ height: "170px", width: "290px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title.slice(0, 50)}</h5>
        <p className="card-text">{item.description ? item.description.slice(0, 100)
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad qui sunt sed temporibus eum sint."}</p>
        <a href={item.url} className="btn btn-primary" >Read more</a>
      </div>
    </div>
  )
}

export default NewsCard