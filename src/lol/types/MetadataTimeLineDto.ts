export interface MetadataTimeLineDto {
  /**
   * Version of the match data.
   */
  dataVersion: string;

  /**
   * Unique match ID.
   */
  matchId: string;

  /**
   * List of participant PUUIDs.
   */
  participants: string[];
}
