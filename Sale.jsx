import { useState, useEffect } from "react";
import "./sale.css";
import sale from "../../Utility/Image/sale.png";

const Sale = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  // Set a countdown timer if needed (for example, sale ending in 24 hours)
  useEffect(() => {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24-hour countdown
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft("Sale Ended");
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="sale">
      <div className="left-side">
        <p>Clothing Hot</p>
        <p>Shoe Collection</p>
        <p>Accessories</p>
      </div>
      <div className="right-side">
        <div className="bag-price">
          <p className="saleprice">Sale of $10.10</p>
          <img src={sale} alt="Sale Banner" />
        </div>
        <div className="desp">
          <p>Deal Of The Week</p>
          <p>Multi-pocket Chest Bag Black</p>
          <p>{timeLeft ? `Hurry! Sale ends in: ${timeLeft}` : "Sale is over"}</p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
