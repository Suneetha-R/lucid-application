/* eslint-disable jsx-a11y/control-has-associated-label */
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import Header from '../Header'
import BlogItem from '../BlogItem'
import './index.css'

class Home extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="home-heading">Blog Lists</h1>
          <div>
            <input
              className="search-input"
              type="search"
              placeholder="Search"
            />
            <button
              data-testid="searchButton"
              type="button"
              className="search-button"
            >
              <AiOutlineSearch className="search-icon" />
            </button>
          </div>
          <div className="blogs-list-container">
            {isLoading ? (
              <div data-testid="loader">
                <Loader
                  type="TailSpin"
                  color="#00bfff"
                  height={50}
                  width={50}
                />
              </div>
            ) : (
              <ul className="blogs-list">
                {blogsData.map(eachBlogItem => (
                  <BlogItem
                    key={eachBlogItem.id}
                    blogItemDetails={eachBlogItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Home
