import DivSottoNavBar from './DivSottoNavBar'


import CustomCarousel from './CustomCarousel'
import CustomFooter from './CustomFooter';

const Home = () => {
    return(
    
    <div className='container-fluid px-4'>
      <DivSottoNavBar />
      <CustomCarousel movie= "Harry Potter"/>
      <CustomCarousel movie= "Lord of Rings"/>
      <CustomCarousel movie= "Batman"/>
      <CustomFooter />
      </div>
      )
}

export default Home