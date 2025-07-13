export interface TournamentPhaseDto {
  /**
   * Unique identifier of the tournament phase.
   */
  id: number;

  /**
   * Time when registration opens, in milliseconds since epoch.
   */
  registrationTime: number;

  /**
   * Time when the tournament phase starts, in milliseconds since epoch.
   */
  startTime: number;

  /**
   * Indicates whether the tournament phase was cancelled.
   */
  cancelled: boolean;
}
