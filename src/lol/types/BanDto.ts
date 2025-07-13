export interface BanDto {
  /**
   * ID of the banned champion.
   */
  championId: number;

  /**
   * Pick turn during the ban phase.
   */
  pickTurn: number;
}
