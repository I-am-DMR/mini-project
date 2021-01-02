import React,{button} from 'react'
import NewsCard from '../News/NewsCard/newsCard'
import styles from'../../App.module.css'
import axios from 'axios';
class NewsBoad extends React.Component {
  state = {
    data: {}
  }  
  async fluch() {      try {
         var data = await axios.get('http://localhost:5001');
    
        return data;
      } catch (error) {
        return error;
      }
  }
    render() {
        
        return (
            <div className={styles.container}>

            <NewsCard/>
            <button onClick={this.componentDidMount}>hello</button>
            
        </div>
        )
    }
}
export default NewsBoad;