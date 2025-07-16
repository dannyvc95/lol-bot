/** https://developer.riotgames.com/apis#summoner-v4 */
import {RiotGamesClient} from '../client';
import {SummonerDto} from '../types/SummonerDto';

export class Summoner {
    constructor(private client: RiotGamesClient) {}

    /** /lol/summoner/v4/summoners/by-puuid/{encryptedPUUID} */
    async getSummonerByPuuid(puuid: string): Promise<SummonerDto | null> {
        try {
            return await this.client.get('la1', `/lol/summoner/v4/summoners/by-puuid/${puuid}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
