import err from '../../Utility/Image/error.json';
import Lottie from 'lottie-react';
import '../CSS/NotFound.css';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className='container'>
      <Link to="/" className="home-link">
        Go to Home
      </Link>
      <Lottie animationData={err} className='lottie' />
      <p className='text'>Oops! Page Not Found</p>
    </div>
  );
};

export default NotFound;
