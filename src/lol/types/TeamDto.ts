export interface Ban {
  /** ID of the banned champion */
  championId: number;

  /** The pick turn when the champion was banned */
  pickTurn: number;
}

export interface Feat {
  /** State of the feat (e.g., 2, 1001) */
  featState: number;
}

export interface Feats {
  [key: string]: Feat;
}

export interface Objective {
  /** Whether the team secured the first of this objective */
  first: boolean;

  /** Total number of this objective secured */
  kills: number;
}

export interface Objectives {
  atakhan: Objective;
  baron: Objective;
  champion: Objective;
  dragon: Objective;
  horde: Objective;
  inhibitor: Objective;
  riftHerald: Objective;
  tower: Objective;
}

export interface TeamDto {
  /** Array of banned champions with their pick turns */
  bans: Ban[];

  /** Object representing various team feats */
  feats: Feats;

  /** Team's performance on different objectives */
  objectives: Objectives;

  /** Team identifier (100 or 200) */
  teamId: number;

  /** Whether the team won the match */
  win: boolean;
}

