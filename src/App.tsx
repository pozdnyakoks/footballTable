import { useState, useEffect } from 'react';
import PlayCard from './PlayCard';
import PlayInfo from './PlayInfo';

function App() {
  const [plays, setPlays] = useState<Array<PlayInfo>>([]);
  const [isTotal, setIsTotal] = useState(false);

  async function getData(offset: number) {
    const response = await fetch(
      `https://footballista.ru/api/seasons/5099/calendar_paginated?limit=12&offset=${offset}`
    );
    const data = await response.json();
    if (plays.length > 0) {
      const filtered = data.items.filter((play: PlayInfo) => {
        return plays.some((el: PlayInfo) => el._id !== play._id);
      });

      setPlays([...plays, ...filtered]);
      if (plays.length + filtered.length === data.total) setIsTotal(true);
    } else {
      setPlays(data.items);
    }
  }

  const playsCards = plays.map((play: PlayInfo) => {
    return <PlayCard key={play._id} play={play} />;
  });

  useEffect(() => {
    getData(0);
  }, []);

  return (
    <div className='container'>
      <h1>Календарь турниров</h1>
      <ul>{playsCards}</ul>
      {!isTotal && (
        <button className='more' onClick={() => getData(plays.length)}>
          Еще
        </button>
      )}
    </div>
  );
}

export default App;
