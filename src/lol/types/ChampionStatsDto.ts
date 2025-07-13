export interface ChampionStatsDto {
  /**
   * Ability Haste - reduces cooldowns.
   */
  abilityHaste: number;

  /**
   * Ability Power - magic damage amplification.
   */
  abilityPower: number;

  /**
   * Armor - physical damage reduction.
   */
  armor: number;

  /**
   * Armor Penetration flat value.
   */
  armorPen: number;

  /**
   * Armor Penetration percentage.
   */
  armorPenPercent: number;

  /**
   * Attack Damage - physical attack power.
   */
  attackDamage: number;

  /**
   * Attack Speed multiplier.
   */
  attackSpeed: number;

  /**
   * Bonus Armor Penetration percentage from items or runes.
   */
  bonusArmorPenPercent: number;

  /**
   * Bonus Magic Penetration percentage from items or runes.
   */
  bonusMagicPenPercent: number;

  /**
   * Crowd Control reduction percentage.
   */
  ccReduction: number;

  /**
   * Cooldown Reduction percentage.
   */
  cooldownReduction: number;

  /**
   * Current Health points.
   */
  health: number;

  /**
   * Maximum Health points.
   */
  healthMax: number;

  /**
   * Health regeneration rate per second.
   */
  healthRegen: number;

  /**
   * Lifesteal percentage (physical damage heal).
   */
  lifesteal: number;

  /**
   * Flat Magic Penetration.
   */
  magicPen: number;

  /**
   * Magic Penetration percentage.
   */
  magicPenPercent: number;

  /**
   * Magic Resist - reduces magic damage taken.
   */
  magicResist: number;

  /**
   * Movement speed in units per second.
   */
  movementSpeed: number;

  /**
   * Omnivamp percentage (healing from all damage types).
   */
  omnivamp: number;

  /**
   * Physical Vamp percentage (healing from physical damage).
   */
  physicalVamp: number;

  /**
   * Current power/mana resource.
   */
  power: number;

  /**
   * Maximum power/mana resource.
   */
  powerMax: number;

  /**
   * Power/mana regeneration per second.
   */
  powerRegen: number;

  /**
   * Spell Vamp percentage (healing from ability damage).
   */
  spellVamp: number;
}
