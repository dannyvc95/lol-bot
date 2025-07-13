export interface PlayerDto {
  /**
   * Encrypted PUUID of the player.
   */
  puuid: string;

  /**
   * Identifier of the team the player belongs to.
   */
  teamId: string;

  /**
   * Position the player selected or was assigned to.
   * Legal values: UNSELECTED, FILL, TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY
   */
  position: 'UNSELECTED' | 'FILL' | 'TOP' | 'JUNGLE' | 'MIDDLE' | 'BOTTOM' | 'UTILITY';

  /**
   * Role of the player in the team.
   * Legal values: CAPTAIN, MEMBER
   */
  role: 'CAPTAIN' | 'MEMBER';
}
