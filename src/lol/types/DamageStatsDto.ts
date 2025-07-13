export interface DamageStatsDto {
  /**
   * Total magic damage dealt.
   */
  magicDamageDone: number;

  /**
   * Magic damage dealt to champions.
   */
  magicDamageDoneToChampions: number;

  /**
   * Magic damage taken.
   */
  magicDamageTaken: number;

  /**
   * Total physical damage dealt.
   */
  physicalDamageDone: number;

  /**
   * Physical damage dealt to champions.
   */
  physicalDamageDoneToChampions: number;

  /**
   * Physical damage taken.
   */
  physicalDamageTaken: number;

  /**
   * Total damage dealt (all types).
   */
  totalDamageDone: number;

  /**
   * Total damage dealt to champions (all types).
   */
  totalDamageDoneToChampions: number;

  /**
   * Total damage taken (all types).
   */
  totalDamageTaken: number;

  /**
   * True damage dealt (ignores resistances).
   */
  trueDamageDone: number;

  /**
   * True damage dealt to champions.
   */
  trueDamageDoneToChampions: number;

  /**
   * True damage taken.
   */
  trueDamageTaken: number;
}
