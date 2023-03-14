export default interface PlayInfo {
  _id: number;
  tourNumber: number;
  teamHome: {
    name: string;
    logo: string;
    logoId: number;
  };
  teamAway: {
    name: string;
    logo: string;
    logoId: number;
  };
  stadium: {
    name: string;
  };
  date: Date;
  scoreFtAway: number;
  scoreFtHome: number;
}
