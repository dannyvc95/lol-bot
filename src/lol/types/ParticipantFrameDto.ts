import {ChampionStatsDto} from './ChampionStatsDto';
import {DamageStatsDto} from './DamageStatsDto';
import {PositionDto} from './PositionDto';

export interface ParticipantFrameDto {
  /**
   * Champion stats snapshot during this frame.
   */
  championStats: ChampionStatsDto;

  /**
   * Current gold held by participant.
   */
  currentGold: number;

  /**
   * Damage stats snapshot during this frame.
   */
  damageStats: DamageStatsDto;

  /**
   * Gold earned per second.
   */
  goldPerSecond: number;

  /**
   * Number of jungle minions killed.
   */
  jungleMinionsKilled: number;

  /**
   * Participant's level.
   */
  level: number;

  /**
   * Number of minions killed.
   */
  minionsKilled: number;

  /**
   * Participant ID.
   */
  participantId: number;

  /**
   * Participant position on the map.
   */
  position: PositionDto;

  /**
   * Time spent controlled (crowd controlled) by enemy.
   */
  timeEnemySpentControlled: number;

  /**
   * Total gold owned.
   */
  totalGold: number;

  /**
   * Total experience points earned.
   */
  xp: number;
}
