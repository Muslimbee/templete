import avatar from '../../../public/images/user-tie-solid.svg' 

function AboutUs() {
  return (
    <div className='about'>
      <h2>Lorem ipsum dolor sit.</h2>
      <ul className="about__list">
        <li className="about__list-item">
          <img src={avatar} alt="" width={60} />
          
          <h3>Muhammad Allayev</h3>
          <p>Lorem, ipsum.</p>
          <div className="icons">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </li>
        <li className="about__list-item">
          <img src={avatar} alt="" width={60} />
          
          <h3>Muhammad Allayev</h3>
          <p>Lorem, ipsum.</p>
          <div className="icons">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </li>
        <li className="about__list-item">
          <img src={avatar} alt="" width={60} />
          
          <h3>Muhammad Allayev</h3>
          <p>Lorem, ipsum.</p>
          <div className="icons">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AboutUs
