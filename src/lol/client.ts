import dotenv from 'dotenv';
dotenv.config();

import {Account} from './resources/account';
import {ChampionRotation} from './resources/championRotation';
import {ChampionMastery} from './resources/champioMastery';
import {Clash} from './resources/clash';
import {LeagueExp} from './resources/leagueExp';
import {LolStatus} from './resources/lolStatus';
import {Spectator} from './resources/spectator';
import {Match} from './resources/match';
import {League} from './resources/league';
import {LolChallenges} from './resources/lolChallenges';

type RiotGamesApi = 'americas' | 'la1';

export class RiotGamesClient {
    public readonly account: Account;
    public readonly championRotation: ChampionRotation;
    public readonly championMastery: ChampionMastery;
    public readonly clash: Clash;
    public readonly leagueExp: LeagueExp;
    public readonly lolChallenges: LolChallenges;
    public readonly lolStatus: LolStatus;
    public readonly spectator: Spectator;
    public readonly match: Match;
    public readonly league: League;

    private readonly apiKey: string = process.env.RIOT_GAMES_API_KEY || '';

    private readonly apiHosts: Record<RiotGamesApi, string> = {
        americas: process.env.RIOT_GAMES_API_AMERICAS_HOST || '',
        la1: process.env.RIOT_GAMES_API_LA1_HOST || '',
    };

    constructor() {
        this.account = new Account(this);
        this.clash = new Clash(this);
        this.championMastery = new ChampionMastery(this);
        this.championRotation = new ChampionRotation(this);
        this.leagueExp = new LeagueExp(this);
        this.lolStatus = new LolStatus(this);
        this.lolChallenges = new LolChallenges(this);
        this.spectator = new Spectator(this);
        this.match = new Match(this);
        this.league = new League(this);
    }

    async get<T = unknown>(api: RiotGamesApi, path: string): Promise<T> {
        const response = await fetch(`${this.apiHosts[api]}${path}`, {headers: {'X-Riot-Token': this.apiKey}});
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        return response.json();
    }
}
