/** https://developer.riotgames.com/apis#lol-challenges-v1 */
import {RiotGamesClient} from '../client';
import {Level} from '../types';
import {ApexPlayerInfoDto} from '../types/ApexPlayerInfoDto';
import {ChallengeConfigInfoDto} from '../types/ChallengeConfigInfoDto';
import {PlayerInfoDto} from '../types/PlayerInfoDto';

export class LolChallenges {
    constructor(private client: RiotGamesClient) {}

    /** /lol/challenges/v1/challenges/config */
    async getChallengesConfigs(): Promise<ChallengeConfigInfoDto[] | null> {
        try {
            return await this.client.get('la1','/lol/challenges/v1/challenges/config');
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/challenges/v1/challenges/percentiles */
    async getChallengesPercentiles(): Promise< Record<number, Record<number, Record<Level, number>>> | null> {
        try {
            return await this.client.get('la1','/lol/challenges/v1/challenges/percentiles');
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/challenges/v1/challenges/{challengeId}/config */
    async getChallengeConfigById(challengeId: number): Promise<ChallengeConfigInfoDto | null> {
        try {
            return await this.client.get('la1',`/lol/challenges/v1/challenges/${challengeId}/config`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /**  /lol/challenges/v1/challenges/{challengeId}/leaderboards/by-level/{level} */
    async getApexPlayerInfoList(challengeId: number, level: Level): Promise<ApexPlayerInfoDto[] | null> {
        try {
            return await this.client.get(
                'la1',` /lol/challenges/v1/challenges/${challengeId}/leaderboards/by-level/${level}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/challenges/v1/challenges/{challengeId}/percentiles */
    async getChallengePercentileById(challengeId: number): Promise<Record<Level, number> | null> {
        try {
            return await this.client.get('la1',`/lol/challenges/v1/challenges/${challengeId}/percentiles`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/challenges/v1/player-data/{puuid} */
    async getPlayerChallengeData(puuid: string): Promise<PlayerInfoDto | null> {
        try {
            return await this.client.get('la1',`/lol/challenges/v1/player-data/${puuid}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

}
