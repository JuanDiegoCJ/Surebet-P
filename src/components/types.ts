export interface SurebetLeg {
  typesurebet: string;
  arbprofit: string;
  middle: string;
  sportname: string;
  fulltime: string;
  arbgenerationtime: string;
  bookmaker: string;
  currentscore: string;
  eventname: string;
  eventstarttime: string;
  leaguename: string;
  arboutcome: string;
  directionodd: string;
  odd: string;
  gamescore: string;
  currencyodd: string;
  created: string;
  createddate: string;
  arbid: string;
  eventid: string;
  section: string;
  color: string;
  wrongitem: string;
  clon: string;
  origen: string;
  tipo: string;
  link: string;
  funds: string;
}

export interface SurebetGrouped {
  arbid: string;
  arbprofit: string;
  middle: string;
  sportname: string;
  arbgenerationtime: string;
  legs: SurebetLeg[];
}