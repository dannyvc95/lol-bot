/** https://developer.riotgames.com/apis#account-v1 */
import {RiotGamesClient} from '../client';
import {AccountDto} from '../types/AccountDto';
import {AccountRegionDto} from '../types/AccountRegionDto';

export class Account {
    constructor(private client: RiotGamesClient) { }

    /** /riot/account/v1/accounts/by-puuid/{puuid} */
    async getAccountByPuuid(puuid: string): Promise<AccountDto | null> {
        try {
            return await this.client.get('americas', `/riot/account/v1/accounts/by-puuid/${puuid}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine} */
    async getAccountByRiotId(gameName: string, tagLine: string): Promise<AccountDto | null> {
        try {
            return await this.client.get(
                'americas', `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /riot/account/v1/region/by-game/{game}/by-puuid/{puuid} */
    async getActiveRegionByPuuid(puuid: string): Promise<AccountRegionDto | null> {
        try {
            const game = 'lol';
            return await this.client.get(
                'americas', `/riot/account/v1/region/by-game/${game}/by-puuid/${puuid}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
