export interface ApexPlayerInfoDto {
  /**
   * Encrypted PUUID. Exact length of 78 characters.
   */
  puuid: string;

  /**
   * Value.
   */
  value: number;

  /**
   * Player position.
   */
  position: number;
}
