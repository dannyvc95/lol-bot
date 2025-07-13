export interface AccountRegionDto {
  /**
   * Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)
   */
  puuid: string;

  /**
   * Game to lookup active region
   */
  game: string;

  /**
   * Player active region
   */
  region: string;
}
