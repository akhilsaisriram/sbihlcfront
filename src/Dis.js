import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dis() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
      companydata();
    }, []);
  
    const companydata = async () => {
      const { data } = await axios.get('http://localhost:5000/posts');
      setCompanies(data);
    };
  
    return (
      <div className='companies'>
        {companies.map((comp) => (
          <div key={comp.id}>
            <h5>{comp.username}</h5>
          </div>
        ))}
      </div>
    );
         }

export default Dis;