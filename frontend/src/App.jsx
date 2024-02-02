import   { useEffect, useState } from 'react';
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      const fetchFromApi = async () => {
          try {
              const url = "http://localhost:3002/getProfile";
              const response = await axios.get(url);
              console.log("API Response:", response.data);
              setData(response.data);
          } catch (error) {
              console.error("Data fetch error", error);
          } finally {
              setLoading(false);
          }
      };
  
      fetchFromApi();
  }, []);
  
  if (loading) {
      return <p>Loading...</p>;
  }

    return (
      <div>
      {data ? (
          <>
              <p>fy_id : {data.data.fy_id}</p>
              <p>Mobile Number : {data.data.mobile_number}</p>
              <p>Email id : {data.data.email_id}</p>
              <p>NAME : {data.data.name}</p>
              <p>PIN_CHANGE_DATE : {data.data.pin_change_date}</p>
              <p>Pw_To_expire : {data.data.pwd_to_expire}</p>

              
              <p></p>
          </>
      ) : (
          <p>Loading...</p>
      )}
  </div>
    );
};

export default App;
