export interface MetadataDto {
  /**
   * Match data version.
   */
  dataVersion: string;

  /**
   * Match ID.
   */
  matchId: string;

  /**
   * A list of participant PUUIDs.
   */
  participants: string[];
}
