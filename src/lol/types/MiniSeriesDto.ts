export interface MiniSeriesDto {
  /**
   * Number of losses in the mini series.
   */
  losses: number;

  /**
   * Progress of the mini series as a string (e.g., "WLLW").
   */
  progress: string;

  /**
   * Number of wins required to complete the mini series.
   */
  target: number;

  /**
   * Number of wins in the mini series.
   */
  wins: number;
}
