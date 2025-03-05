type TPlayer = {
  kills: number;
  username: string;
};

type TTeam = {
  name: string;
  place: number;
  players: TPlayer[];
  points: number;
  total_kills: 13;
};

enum EMatchStatuses {
  FINISHED = "Finished",
  ONGOING = "Ongoing",
  SHEDULED = "Scheduled",
}

export interface IMatchesDataType {
  awayScore: number;
  awayTeam: TTeam;
  homeScore: number;
  homeTeam: TTeam;
  status: EMatchStatuses;
  time: string;
  title: string;
}

export interface IMatchesSchema {
  isLoading: boolean;
  matchesData: IMatchesDataType[];
  error?: string;
}
