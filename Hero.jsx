// import '../CSS/Hero.css'
// import mode12 from '../../Utility/Image/model2.png'
// function Hero(){
//   return <>
//   <div className="HeroBar">
//     {/* <p>Arrow</p> */}
//    <div className="Left-Side">
//     <p>Summer Collection</p>
//     <p>Fall-Winter</p>
//     <p>Collections 2025</p>
//     <p>A specialist creating essentials.Ethically crafted with unwavening commiting to exception quality</p>
//     <button className='shpbtn'>SHOP NOW</button>
//    </div>
//    <div className="Right-side">
//     <img src={mode12}></img>
//    </div>
//    {/* <p>Arrow</p> */}
//   </div>
  
//   </>
// }

// export default Hero

import '../CSS/Hero.css';
import mode12 from '../../Utility/Image/model2.png';

function Hero() {
  return (
    <>
      <div className="HeroBar">
        <div className="Left-Side">
          <p className="collection-title">Summer Collection</p>
          <p className="season">Fall-Winter</p>
          <p className="year">Collections 2025</p>
          <p className="description">
            A specialist creating essentials. Ethically crafted with unwavering commitment to exceptional quality.
          </p>
          <button className="shpbtn" aria-label="Shop Now">
            SHOP NOW
          </button>
        </div>
        <div className="Right-Side">
          <img src={mode12} alt="Model showcasing summer collection clothing" />
        </div>
      </div>
    </>
  );
}

export default Hero;
