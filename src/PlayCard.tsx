import PlayInfo from './PlayInfo';
export default function PlayCard({ play }: { play: PlayInfo }) {
  const date = new Date(play.date);
  const playDate = date.toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <li>
      <h2 className='tour'>{play.tourNumber} тур</h2>
      <div className='teams'>
        <div className='team'>
          <h3>{play.teamAway ? play.teamAway.name : 'команда не назначена'}</h3>
          {play.teamAway && (
            <img
              src={`https://footballista.ru/api/img/logos/${play.teamAway.logo}-middle.png?logoId=${play.teamAway.logoId}`}
              alt='team-logo'
            />
          )}
          <span className='scoreAway'>{play.scoreFtAway}</span>
        </div>
        <span className='semicolon'>:</span>
        <div className='team'>
          <h3>{play.teamHome ? play.teamHome.name : 'команда не назначена'}</h3>
          {play.teamHome && (
            <img
              src={`https://footballista.ru/api/img/logos/${play.teamHome.logo}-middle.png?logoId=${play.teamHome.logoId}`}
              alt='team-logo'
            />
          )}
          <span className='scoreHome'>{play.scoreFtHome}</span>
        </div>
      </div>
      <p className='date'>{playDate}</p>
      <p className='stadium'>
        {play.stadium ? play.stadium.name : 'Стадион не назначен'}
      </p>
    </li>
  );
}
