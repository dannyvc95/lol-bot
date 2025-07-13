export interface AccountDto {
  /**
   * Encrypted PUUID. Exact length of 78 characters.
   */
  puuid: string;

  /**
   * This field may be excluded from the response if the account doesn't have a gameName.
   */
  gameName?: string;

  /**
   * This field may be excluded from the response if the account doesn't have a tagLine.
   */
  tagLine?: string;
}
