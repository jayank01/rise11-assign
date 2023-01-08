import Booking from '../components/booking/Booking';
import vid from "../../src/assets/images/pink.mp4";
const Home = () => {
  return (
    <div>
    
    <div className='booking_area w-full h-96 bg-gradient'>
        <div className="max-w-6xl w-full px-4 lg:px-0 mx-auto">
           
            <Booking />
        </div>
    </div>
    </div>
  )
}

export default Home