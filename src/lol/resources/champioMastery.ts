/** https://developer.riotgames.com/apis#champion-mastery-v4 */
import {RiotGamesClient} from '../client';
import {ChampionMasteryDto} from '../types/ChampionMasteryDto';

export class ChampionMastery {
    constructor(private client: RiotGamesClient) {}

    /** /lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID} */
    async getChampionMasteriesByPuuid(puuid: string): Promise<ChampionMasteryDto[] | null> {
        try {
            return await this.client.get(
                'la1', `/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID}/by-champion/{championId} */
    async getChampionMasteryByPuuidAndId(puuid: string, championId: string): Promise<ChampionMasteryDto | null> {
        try {
            return await this.client.get(
                'la1', `/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/by-champion/${championId}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID}/top */
    async getChampionMasteriesTopByPuuid(puuid: string): Promise<ChampionMasteryDto[] | null> {
        try {
            return await this.client.get(
                'la1', `/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/champion-mastery/v4/scores/by-puuid/{encryptedPUUID} */
    async getChampionMasteryScoreByPuuid(puuid: string): Promise<number | null> {
        try {
            return await this.client.get(
                'la1', `/lol/champion-mastery/v4/scores/by-puuid/${puuid}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
