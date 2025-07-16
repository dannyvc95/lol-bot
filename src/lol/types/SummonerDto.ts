export interface SummonerDto {
  /** ID of the summoner icon associated with the summoner. */
  profileIconId: number;

  /**
   * Date summoner was last modified, specified as epoch milliseconds.
   * Updated by: profile icon change, tutorials, game completion, or summoner name change.
   */
  revisionDate: number;

  /** Encrypted PUUID. Exact length of 78 characters. */
  puuid: string;

  /** Summoner level associated with the summoner. */
  summonerLevel: number;
}
