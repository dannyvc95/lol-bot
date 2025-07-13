import {ChallengesDto} from './ChallengesDto';
import {MissionsDto} from './MissionsDto ';

export interface ParticipantDto {
  /**
   * Yellow crossed swords ping - typically used to signal an all-in engage.
   */
  allInPings: number;

  /**
   * Green flag ping - asks teammates to assist you.
   */
  assistMePings: number;

  /**
   * Total number of assists.
   */
  assists: number;

  /**
   * Number of Baron Nashor kills contributed to.
   */
  baronKills: number;

  /**
   * Current bounty level (extra gold for killing this player).
   */
  bountyLevel: number;

  /**
   * Total experience points earned.
   */
  champExperience: number;

  /**
   * Final level reached by the champion.
   */
  champLevel: number;

  /**
   * Champion ID played. Use championName if match was prior to patch 11.4.
   */
  championId: number;

  /**
   * Name of the champion played.
   */
  championName: string;

  /**
   * Blue generic ping (ALT+click).
   */
  commandPings: number;

  /**
   * Kayn only: 0 - None, 1 - Slayer, 2 - Assassin.
   */
  championTransform: number;

  /**
   * Number of consumable items (e.g. potions, wards) purchased.
   */
  consumablesPurchased: number;

  /**
   * Player challenge stats.
   */
  challenges: ChallengesDto;

  /**
   * Damage dealt to buildings (e.g., turrets, inhibitors).
   */
  damageDealtToBuildings: number;

  /**
   * Damage dealt to major map objectives (Baron, Dragon, etc.).
   */
  damageDealtToObjectives: number;

  /**
   * Damage dealt specifically to turrets.
   */
  damageDealtToTurrets: number;

  /**
   * Total damage taken that was mitigated (e.g., shields, resistances).
   */
  damageSelfMitigated: number;

  /**
   * Total number of deaths.
   */
  deaths: number;

  /**
   * Number of control wards placed.
   */
  detectorWardsPlaced: number;

  /**
   * Number of double kills (2 kills in short succession).
   */
  doubleKills: number;

  /**
   * Number of dragon kills contributed to.
   */
  dragonKills: number;

  /**
   * Whether this player is eligible to progress (e.g. level up pass).
   */
  eligibleForProgression: boolean;

  /**
   * Yellow question mark ping - indicates missing enemies.
   */
  enemyMissingPings: number;

  /**
   * Red eye ping - warns of enemy vision.
   */
  enemyVisionPings: number;

  /**
   * Whether this player assisted the first blood.
   */
  firstBloodAssist: boolean;

  /**
   * Whether this player secured first blood.
   */
  firstBloodKill: boolean;

  /**
   * Whether this player assisted in the first tower kill.
   */
  firstTowerAssist: boolean;

  /**
   * Whether this player got the first tower kill.
   */
  firstTowerKill: boolean;

  /**
   * Whether the game ended via early surrender (OneStone challenge).
   */
  gameEndedInEarlySurrender: boolean;

  /**
   * Whether the game ended via normal surrender.
   */
  gameEndedInSurrender: boolean;

  /**
   * Number of "hold position" pings.
   */
  holdPings: number;

  /**
   * Yellow circle with line ping - suggests retreat.
   */
  getBackPings: number;

  /**
   * Total gold earned.
   */
  goldEarned: number;

  /**
   * Total gold spent.
   */
  goldSpent: number;

  /**
   * Best guess of actual role played by the player (e.g., TOP, JUNGLE).
   */
  individualPosition: string;

  /**
   * Number of inhibitors destroyed.
   */
  inhibitorKills: number;

  /**
   * Number of inhibitor takedowns (including assists).
   */
  inhibitorTakedowns: number;

  /**
   * Number of team inhibitors lost.
   */
  inhibitorsLost: number;

  /**
   * Item in first inventory slot.
   */
  item0: number;

  /**
   * Item in second inventory slot.
   */
  item1: number;

  /**
   * Item in third inventory slot.
   */
  item2: number;

  /**
   * Item in fourth inventory slot.
   */
  item3: number;

  /**
   * Item in fifth inventory slot.
   */
  item4: number;

  /**
   * Item in sixth inventory slot.
   */
  item5: number;

  /**
   * Trinket item slot.
   */
  item6: number;

  /**
   * Number of items purchased.
   */
  itemsPurchased: number;

  /**
   * Number of killing sprees achieved.
   */
  killingSprees: number;

  /**
   * Total number of kills.
   */
  kills: number;

  /**
   * Initial lane assigned by Riot (e.g., TOP, MID, JUNGLE).
   */
  lane: string;

  /**
   * Highest critical strike damage dealt.
   */
  largestCriticalStrike: number;

  /**
   * Longest kill streak achieved.
   */
  largestKillingSpree: number;

  /**
   * Highest multi-kill (e.g., double, triple, quadra).
   */
  largestMultiKill: number;

  /**
   * Longest time spent alive without dying.
   */
  longestTimeSpentLiving: number;

  /**
   * Total magic damage dealt.
   */
  magicDamageDealt: number;

  /**
   * Magic damage dealt to enemy champions.
   */
  magicDamageDealtToChampions: number;

  /**
   * Magic damage taken from enemy abilities.
   */
  magicDamageTaken: number;

  /**
   * Player mission-related stats.
   */
  missions: MissionsDto;

  /**
   * Total neutral minions killed (includes jungle and summoned pets).
   */
  neutralMinionsKilled: number;

  /**
   * Green ward ping - requests vision.
   */
  needVisionPings: number;

  /**
   * Number of Nexus kills (mostly in Arena mode).
   */
  nexusKills: number;

  /**
   * Number of Nexus takedowns (includes assists).
   */
  nexusTakedowns: number;

  /**
   * Whether the Nexus was lost by the player’s team.
   */
  nexusLost: number;

  /**
   * Number of objectives stolen (Baron, Dragon, etc.).
   */
  objectivesStolen: number;

  /**
   * Number of assists during objective steals.
   */
  objectivesStolenAssists: number;

  /**
   * Blue arrow ping - indicates "On My Way".
   */
  onMyWayPings: number;

  /**
   * Internal participant ID (1–10).
   */
  participantId: number;

  /**
   * Deprecated player score stat 0.
   */
  playerScore0: number;

  // ... Continúa el mismo estilo para el resto de propiedades ...

  /**
   * Whether the player's team won the match.
   */
  win: boolean;
}
