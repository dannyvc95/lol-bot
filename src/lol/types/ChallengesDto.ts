export interface ChallengesDto {
  /**
   * Number of times the player had 12 assists without dying.
   */
  twelveAssistStreakCount: number;

  /**
   * Gold advantage with Baron buff above a certain threshold.
   */
  baronBuffGoldAdvantageOverThreshold: number;

  /**
   * Time spent with control wards in river or enemy territory.
   */
  controlWardTimeCoverageInRiverOrEnemyHalf: number;

  /**
   * Time of the earliest Baron Nashor taken by the player.
   */
  earliestBaron: number;

  /**
   * Time of the first dragon takedown by the player.
   */
  earliestDragonTakedown: number;

  /**
   * Time of the first Elder Dragon takedown.
   */
  earliestElderDragon: number;

  /**
   * Gold and XP advantage during early laning phase.
   */
  earlyLaningPhaseGoldExpAdvantage: number;

  /**
   * Time to complete the support quest faster than average.
   */
  fasterSupportQuestCompletion: number;

  /**
   * Fastest time to reach legendary status (unstoppable).
   */
  fastestLegendary: number;

  /**
   * Whether the team had an AFK teammate.
   */
  hadAfkTeammate: number;

  /**
   * Highest total champion damage in a game.
   */
  highestChampionDamage: number;

  /**
   * Highest crowd control (CC) score in a match.
   */
  highestCrowdControlScore: number;

  /**
   * Most wards destroyed using a sweeper in one game.
   */
  highestWardKills: number;

  /**
   * Kills in early jungle as a jungler.
   */
  junglerKillsEarlyJungle: number;

  /**
   * Kills on laners during early jungle phase as a jungler.
   */
  killsOnLanersEarlyJungleAsJungler: number;

  /**
   * Advantage in lane during laning phase in gold and XP.
   */
  laningPhaseGoldExpAdvantage: number;

  /**
   * Total times the player went legendary (unstoppable).
   */
  legendaryCount: number;

  /**
   * Highest CS lead against lane opponent.
   */
  maxCsAdvantageOnLaneOpponent: number;

  /**
   * Maximum level lead over lane opponent.
   */
  maxLevelLeadLaneOpponent: number;

  /**
   * Most wards destroyed using a single sweeper.
   */
  mostWardsDestroyedOneSweeper: number;

  /**
   * Mythic item used during the match.
   */
  mythicItemUsed: number;

  /**
   * Position selected in champion select.
   */
  playedChampSelectPosition: number;

  /**
   * Solo turret takedowns during late game.
   */
  soloTurretsLategame: number;

  /**
   * Total takedowns in the first 25 minutes.
   */
  takedownsFirst25Minutes: number;

  /**
   * Takedowns executed after using Teleport.
   */
  teleportTakedowns: number;

  /**
   * Time of third inhibitor destroyed by the team.
   */
  thirdInhibitorDestroyedTime: number;

  /**
   * Number of times player placed 3 wards with one sweeper.
   */
  threeWardsOneSweeperCount: number;

  /**
   * Vision score advantage over lane opponent.
   */
  visionScoreAdvantageLaneOpponent: number;

  /**
   * Number of Infernal Soul pickups in Arena.
   */
  InfernalScalePickup: number;

  /**
   * Number of fist bump interactions in Arena.
   */
  fistBumpParticipation: number;

  /**
   * Number of void monster kills (Baron, Rift Herald).
   */
  voidMonsterKill: number;

  /**
   * Total number of abilities used.
   */
  abilityUses: number;

  /**
   * Number of team aces before 15 minutes.
   */
  acesBefore15Minutes: number;

  /**
   * Allied jungle monsters killed.
   */
  alliedJungleMonsterKills: number;

  /**
   * Baron Nashor takedowns.
   */
  baronTakedowns: number;

  /**
   * Number of times player used blast cone across opponent.
   */
  blastConeOppositeOpponentCount: number;

  /**
   * Total bounty gold claimed.
   */
  bountyGold: number;

  /**
   * Jungle buffs stolen from enemies.
   */
  buffsStolen: number;

  /**
   * Completed the support quest within time.
   */
  completeSupportQuestInTime: number;

  /**
   * Total number of control wards placed.
   */
  controlWardsPlaced: number;

  /**
   * Damage dealt per minute.
   */
  damagePerMinute: number;

  /**
   * Share of damage taken relative to the team.
   */
  damageTakenOnTeamPercentage: number;

  /**
   * Danced with the Rift Herald after summon.
   */
  dancedWithRiftHerald: number;

  /**
   * Number of times killed by enemy champions.
   */
  deathsByEnemyChamps: number;

  /**
   * Skillshots dodged in quick succession.
   */
  dodgeSkillShotsSmallWindow: number;

  /**
   * Number of games with two team aces.
   */
  doubleAces: number;

  /**
   * Dragon takedowns participated in.
   */
  dragonTakedowns: number;

  /**
   * List of legendary items used.
   */
  legendaryItemUsed: number[];

  /**
   * Total healing and shielding provided to allies.
   */
  effectiveHealAndShielding: number;

  /**
   * Elder Dragon kills while enemy had soul.
   */
  elderDragonKillsWithOpposingSoul: number;

  /**
   * Multikills achieved on Elder Dragon fights.
   */
  elderDragonMultikills: number;

  /**
   * Enemy champion immobilizations applied.
   */
  enemyChampionImmobilizations: number;

  /**
   * Enemy jungle monsters killed.
   */
  enemyJungleMonsterKills: number;

  /**
   * Epic monsters killed near enemy jungler.
   */
  epicMonsterKillsNearEnemyJungler: number;

  /**
   * Epic monsters killed shortly after spawning.
   */
  epicMonsterKillsWithin30SecondsOfSpawn: number;

  /**
   * Number of epic monster steals.
   */
  epicMonsterSteals: number;

  /**
   * Epic monster steals without using Smite.
   */
  epicMonsterStolenWithoutSmite: number;

  /**
   * Whether the player killed the first turret.
   */
  firstTurretKilled: number;

  /**
   * Time of first turret killed.
   */
  firstTurretKilledTime: number;

  /**
   * Number of aces where no teammate died.
   */
  flawlessAces: number;

  /**
   * Number of takedowns with full team present.
   */
  fullTeamTakedown: number;

  /**
   * Total match duration in seconds.
   */
  gameLength: number;

  /**
   * Got takedowns in all 3 lanes as early jungle laner.
   */
  getTakedownsInAllLanesEarlyJungleAsLaner: number;

  /**
   * Gold earned per minute.
   */
  goldPerMinute: number;

  /**
   * Whether the team had an open Nexus at any point.
   */
  hadOpenNexus: number;

  /**
   * Immobilized enemy and killed with ally help.
   */
  immobilizeAndKillWithAlly: number;

  /**
   * Number of initial buffs taken.
   */
  initialBuffCount: number;

  /**
   * Initial scuttle crabs taken.
   */
  initialCrabCount: number;

  /**
   * CS from jungle before 10 minutes.
   */
  jungleCsBefore10Minutes: number;

  /**
   * Takedowns near damaged epic monsters as jungler.
   */
  junglerTakedownsNearDamagedEpicMonster: number;

  /**
   * Kill-death-assist ratio.
   */
  kda: number;

  /**
   * Kill after remaining hidden with an ally.
   */
  killAfterHiddenWithAlly: number;

  /**
   * Killed a champ who survived full team damage.
   */
  killedChampTookFullTeamDamageSurvived: number;

  /**
   * Total number of killing sprees.
   */
  killingSprees: number;

  /**
   * Kill participation percentage.
   */
  killParticipation: number;

  /**
   * Kills near enemy turret.
   */
  killsNearEnemyTurret: number;

  /**
   * Kills in other lanes as early jungle laner.
   */
  killsOnOtherLanesEarlyJungleAsLaner: number;

  /**
   * Kills on enemies recently healed by ARAM packs.
   */
  killsOnRecentlyHealedByAramPack: number;

  /**
   * Kills made under own turret.
   */
  killsUnderOwnTurret: number;

  /**
   * Kills with assistance from epic monsters.
   */
  killsWithHelpFromEpicMonster: number;

  /**
   * Knocked enemy into team and killed them.
   */
  knockEnemyIntoTeamAndKill: number;

  /**
   * Turrets destroyed before turret plating ended.
   */
  kTurretsDestroyedBeforePlatesFall: number;

  /**
   * Skillshots landed in early game.
   */
  landSkillShotsEarlyGame: number;

  /**
   * Lane minions killed in first 10 minutes.
   */
  laneMinionsFirst10Minutes: number;

  /**
   * Whether the team lost an inhibitor.
   */
  lostAnInhibitor: number;

  /**
   * Largest kill deficit the team overcame.
   */
  maxKillDeficit: number;

  /**
   * Mejai's Soulstealer full stacks achieved in time.
   */
  mejaisFullStackInTime: number;

  /**
   * Spent more time in enemy jungle than opponent.
   */
  moreEnemyJungleThanOpponent: number;

  /**
   * Final blow with one spell to at least 2 champions.
   */
  multiKillOneSpell: number;

  /**
   * Total number of multikills.
   */
  multikills: number;

  /**
   * Multikills after flashing aggressively.
   */
  multikillsAfterAggressiveFlash: number;

  /**
   * Number of turrets hit by a single Rift Herald.
   */
  multiTurretRiftHeraldCount: number;

  /**
   * Outer turret executed before 10 minutes.
   */
  outerTurretExecutesBefore10Minutes: number;

  /**
   * Kills made while outnumbered.
   */
  outnumberedKills: number;

  /**
   * Nexus kill made while outnumbered.
   */
  outnumberedNexusKill: number;

  /**
   * Perfect Dragon Souls taken (none lost).
   */
  perfectDragonSoulsTaken: number;

  /**
   * Perfect game (no deaths, full objectives).
   */
  perfectGame: number;

  /**
   * Picks made alongside an ally kill.
   */
  pickKillWithAlly: number;

  /**
   * Number of Poro explosions in ARAM.
   */
  poroExplosions: number;

  /**
   * Used Cleanse within 1 second of a CC effect.
   */
  quickCleanse: number;

  /**
   * First turret taken very quickly.
   */
  quickFirstTurret: number;

  /**
   * Solo kills shortly after lane phase began.
   */
  quickSoloKills: number;

  /**
   * Rift Herald takedowns.
   */
  riftHeraldTakedowns: number;

  /**
   * Saved an ally from certain death.
   */
  saveAllyFromDeath: number;

  /**
   * Scuttle crabs killed.
   */
  scuttleCrabKills: number;

  /**
   * Time between first takedown and ace.
   */
  shortestTimeToAceFromFirstTakedown: number;

  /**
   * Total number of skillshots dodged.
   */
  skillshotsDodged: number;

  /**
   * Total number of skillshots hit.
   */
  skillshotsHit: number;

  /**
   * Number of Snowball (ARAM) hits.
   */
  snowballsHit: number;

  /**
   * Solo kills on Baron Nashor.
   */
  soloBaronKills: number;

  // --- SWARM mode-specific achievements ---
  SWARM_DefeatAatrox: number;
  SWARM_DefeatBriar: number;
  SWARM_DefeatMiniBosses: number;
  SWARM_EvolveWeapon: number;
  SWARM_Have3Passives: number;
  SWARM_KillEnemy: number;
  SWARM_PickupGold: number;
  SWARM_ReachLevel50: number;
  SWARM_Survive15Min: number;
  SWARM_WinWith5EvolvedWeapons: number;

  /**
   * Number of solo kills.
   */
  soloKills: number;

  /**
   * Number of stealth wards placed.
   */
  stealthWardsPlaced: number;

  /**
   * Times survived with single-digit HP.
   */
  survivedSingleDigitHpCount: number;

  /**
   * Survived 3 immobilization effects in one fight.
   */
  survivedThreeImmobilizesInFight: number;

  /**
   * Takedown on first turret.
   */
  takedownOnFirstTurret: number;

  /**
   * Total number of takedowns.
   */
  takedowns: number;

  /**
   * Takedowns after gaining a level advantage.
   */
  takedownsAfterGainingLevelAdvantage: number;

  /**
   * Takedowns before jungle minions spawned.
   */
  takedownsBeforeJungleMinionSpawn: number;

  /**
   * Takedowns in the first few minutes.
   */
  takedownsFirstXMinutes: number;

  /**
   * Takedowns in alcove areas.
   */
  takedownsInAlcove: number;

  /**
   * Takedowns inside enemy fountain.
   */
  takedownsInEnemyFountain: number;

  /**
   * Team's Baron Nashor kills.
   */
  teamBaronKills: number;

  /**
   * Share of team damage dealt.
   */
  teamDamagePercentage: number;

  /**
   * Elder Dragon kills by the team.
   */
  teamElderDragonKills: number;

  /**
   * Rift Herald kills by the team.
   */
  teamRiftHeraldKills: number;

  /**
   * Survived after taking large amounts of damage.
   */
  tookLargeDamageSurvived: number;

  /**
   * Turret plates taken.
   */
  turretPlatesTaken: number;

  /**
   * Credit if damaged tower 30s before Rift charge destroyed it.
   */
  turretsTakenWithRiftHerald: number;

  /**
   * Number of turret takedowns.
   */
  turretTakedowns: number;

  /**
   * Number of times 20+ minions were killed in 3s.
   */
  twentyMinionsIn3SecondsCount: number;

  /**
   * Number of times 2 wards placed with 1 sweeper.
   */
  twoWardsOneSweeperCount: number;

  /**
   * Recalls executed without enemy vision.
   */
  unseenRecalls: number;

  /**
   * Vision score per minute.
   */
  visionScorePerMinute: number;

  /**
   * Number of wards protected.
   */
  wardsGuarded: number;

  /**
   * Total ward takedowns.
   */
  wardTakedowns: number;

  /**
   * Ward takedowns before 20 minutes.
   */
  wardTakedownsBefore20M: number;
}
