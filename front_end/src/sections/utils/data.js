
import axios from 'axios';

const API_URL = 'http://localhost:8000'; 

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error so that the caller can handle it
  }
};
 
const postData= async (endpoint,data) => {
    try{
      const response= await axios.post(`${API_URL}/${endpoint}`,{...data});
      return response;
    }catch(error){
      console.log('eorr in data.js');
      throw error;
    }
  };
export {fetchData,postData}
