/* eslint-disable jsx-a11y/control-has-associated-label */
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import Header from '../Header'
import BlogItem from '../BlogItem'
import ContextChanges from '../Context/ContextChange'
import './index.css'

class Home extends Component {
  state = {isLoading: true, blogsData: [], searchInput: ''}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/blogs?search=${searchInput}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitSearchInput = () => {
    this.getBlogsData()
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getBlogsData()
    }
  }

  render() {
    const {blogsData, isLoading, searchInput} = this.state
    const filterSearchInput = blogsData.filter(eachOne =>
      eachOne.title.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <ContextChanges.Consumer>
        {value => {
          const {isDarkTheme} = value

          const homeBgColor = isDarkTheme ? 'dark-back' : 'light-back'
          return (
            <div data-testid="home">
              <Header />
              <div className={`home-container ${homeBgColor}`}>
                <h1 className="home-heading">Blog Lists</h1>
                <div>
                  <input
                    className="search-input"
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    onKeyDown={this.onEnterSearchInput}
                  />
                  <button
                    data-testid="searchButton"
                    type="button"
                    className="search-button"
                    onClick={this.onSubmitSearchInput}
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
                      {filterSearchInput.map(eachBlogItem => (
                        <BlogItem
                          key={eachBlogItem.id}
                          blogItemDetails={eachBlogItem}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )
        }}
      </ContextChanges.Consumer>
    )
  }
}

export default Home
