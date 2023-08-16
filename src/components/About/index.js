import { useEffect } from 'react'
import Container from '@mui/material/Container'
import HomeMenu from '../HomeMenu'
import Button from '@mui/material/Button'
import './index.css'


const About = () => {
  useEffect(() => {
    document.title = "About";  
  }, []);
    return (
      <div className='pageContainer'>
      <Container maxWidth='md' sx={{ textAlign: 'center'}}>
      <HomeMenu />
      <div className='aboutus'>
        <p>We support all 161 commonly circulating world currencies listed below. These cover 99% of all UN recognized states and territories.</p>
      </div>
      <section class="search-section">
            <h3>Search for Answers</h3>
            <form id="search-form">
                <input type="text" id="search-input" placeholder="Enter your question..." style = {{marginRight: 20}}/>
                <Button type='submit' variant="outlined">Search</Button>
            </form>
      </section>
      <section class="faq-section">
            <h3>Frequently Asked Questions</h3>
            <ul>
                <li><strong>Q:</strong> How do I reset my password?</li>
                <li><strong>Q:</strong> Can I change my subscription plan?</li>
                <li><strong>Q:</strong> What payment methods do you accept?</li>
            </ul>
        </section>
        <footer>
          <h3>Need more help? Please go to the contact page or call 1-800-123-4567</h3>
        </footer>
      </Container>  
      </div>
      
    )
    
  }
  
  export default About