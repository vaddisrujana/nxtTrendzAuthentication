import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home">
      <div>
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="paragraph">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heared
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shopnow" type="button">
          Shop Now
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes"
        />
      </div>
    </div>
  </div>
)

export default Home
