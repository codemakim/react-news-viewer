import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {

    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=d0d8c2ecfc47419faa85cebdf4fcca12');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={10} cols={50} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App;