/** https://developer.riotgames.com/apis#match-v5 */
import {RiotGamesClient} from '../client';
import {MatchType} from '../types';
import {MatchDto} from '../types/MatchDto';
import {TimelineDto} from '../types/TimelineDto';

export class Match {
    constructor(private client: RiotGamesClient) { }

    /** /lol/match/v5/matches/by-puuid/{puuid}/ids
     * @param puuid - Player's universal unique identifier.
     * @param params - Optional filters to narrow down match results.
     * @param params.startTime - Epoch timestamp in seconds. Matches played before June 16th, 2021 won’t be included.
     * @param params.endTime - Epoch timestamp in seconds to limit matches up to a certain time.
     * @param params.queue - Queue ID to filter matches. Works jointly with the `type` filter.
     * @param params.type - Match type to filter results (e.g., 'ranked'). Works jointly with the `queue` filter.
     * @param params.start - Start index for pagination. Defaults to 0.
     * @param params.count - Number of match IDs to return. Defaults to 20. Valid range: 0–100.
     * @returns A list of match IDs matching the filters provided.
    **/
    async getMatchListByPuuid(puuid: string, params?: { startTime?: number, endTime?: number, queue?: number,
        type?: MatchType, start?: number, count?: number}) :
    Promise<string[] | null> {
        const query =
        (params?.startTime !== undefined ? `startTime=${params.startTime}&` : '') +
        (params?.endTime !== undefined ? `endTime=${params.endTime}&` : '') +
        (params?.queue !== undefined ? `queue=${params.queue}&` : '') +
        (params?.type !== undefined ? `type=${params.type}&` : '') +
        (params?.start !== undefined ? `start=${params.start}&` : '') +
        (params?.count !== undefined ? `count=${params.count}&` : '');
        const sanitized = query.endsWith('&') ? query.slice(0, -1) : query;
        try {
            return await this.client.get('americas',
                `/lol/match/v5/matches/by-puuid/${puuid}/ids${sanitized ? `?${sanitized}` : ''}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/match/v5/matches/{matchId} */
    async getMatchByMatchId(matchId: string): Promise<MatchDto | null> {
        try {
            return await this.client.get('americas',`/lol/match/v5/matches/${matchId}`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /** /lol/match/v5/matches/{matchId}/timeline */
    async getMatchTimelineByMatchId(matchId: string): Promise<TimelineDto | null> {
        try {
            return await this.client.get('americas',`/lol/match/v5/matches/${matchId}/timeline`);
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
