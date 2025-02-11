// import '../CSS/footer.css'

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className="first">
//         <p>ShoppyGlobe</p>
//         <p>Your go-to e-commerce store for daily essentials, offering quality products, great deals, and fast delivery—everything you need, just a click away!</p>
//       </div>
//       <div className="second">
//         <nav>
//           <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact us</li>
//           </ul>
//         </nav>
//       </div>
//       <div className="fourth">
//         <p>Contact Us</p>
//         <p>Do you have any questions or suggestions?</p>
//         <p>contact@yourcompany.com</p>
//       </div>
//     </div>
//   )
// }

// export default Footer

import '../CSS/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="first">
        <p className="brand-name">ShoppyGlobe</p>
        <p className="description">
          Your go-to e-commerce store for daily essentials, offering quality products, great deals, and fast delivery—everything you need, just a click away!
        </p>
      </div>
      <div className="second">
        <nav aria-label="Footer Navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </nav>
      </div>
      <div className="fourth">
        <p className="contact-title">Contact Us</p>
        <p className="contact-description">Do you have any questions or suggestions?</p>
        <p className="email"><a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a></p>
      </div>
    </div>
  );
};

export default Footer;
