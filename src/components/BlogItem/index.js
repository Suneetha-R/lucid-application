import {Link} from 'react-router-dom'
import ContextChanges from '../Context/ContextChange'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <ContextChanges.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? 'dark-back' : 'light-back'
        return (
          <li className={`blog-item ${bgColor}`}>
            <Link to={`/blogs/${id}`} className="blog-item-link">
              <div className="blog-item-container">
                <img
                  className="blog-item-image"
                  src={imageUrl}
                  alt={`item${id}`}
                />
                <div className="blog-item-info">
                  <p className="blog-item-topic">{topic}</p>
                  <h1 className="blog-item-title">{title}</h1>
                  <div className="author-info">
                    <img
                      className="avatar"
                      src={avatarUrl}
                      alt={`avatar${id}`}
                    />
                    <p className="author-name">{author}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </ContextChanges.Consumer>
  )
}

export default BlogItem
