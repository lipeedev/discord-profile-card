export type Snowflake = string | number;

export type PresenceStatus = 'online' | 'dnd' | 'idle' | 'invisible' | 'offline';

export enum Opcode {
    Dispatch,
    Heartbeat,
    Identify,
    PresenceUpdate,
    VoiceStateUpdate,
    Resume = 6,
    Reconnect,
    RequestGuildMembers,
    InvalidSession,
    Hello,
    HeartbeatACK
}

type UserPresence = {
    id: string;
}

export interface User {
    username: string;
    public_flags: number;
    id: number;
    discriminator: string;
    bot: boolean;
    avatar: string;
    presence?: Presence;
}

interface ClientStatus {
    mobile?: PresenceStatus;
    desktop?: PresenceStatus;
}

export interface Presence {
    user: UserPresence;
    status: PresenceStatus;
    guild_id: Snowflake;
    activities: Activity[];
    client_status: ClientStatus;
}

export interface PayloadStructure {
    op: Opcode;
    d: any;
    s: number | null;
    t: string | null;
}

interface IdentifyProperties {
    os: string;
    browser: string;
    device: string;
}

interface ActivityTimestamps {
    start?: number;
    end?: number;
}

export enum ActivityTypes {
    Playing,
    Streaming,
    Listening,
    Watching,
    Custom,
    Competing
}

export enum ActivityFlags {
    Instance = 1 << 0,
    Join = 1 << 1,
    Spectate = 1 << 2,
    JoinRequest = 1 << 3,
    Sync = 1 << 4,
    Play = 1 << 5,
    PartyPrivacyFriends = 1 << 6,
    PartyPrivacyVoiceChannel = 1 << 7,
    Embedded = 1 << 8
}

export interface Emoji {
    name: string;
    id?: Snowflake;
    animated?: boolean;
}

export interface ActivityParty {
    id?: string;
    size?: [number, number];
}

export interface ActivityAssets {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
}

interface ActivitySecrets {
    join?: string;
    spectate?: string;
    match?: string;
}

interface Button {
    label: string;
    url: string;
}

export interface Activity {
    name: string;
    type: ActivityTypes;
    id: string;
    url?: string;
    created_at: string;
    timestamps?: ActivityTimestamps;
    application_id?: Snowflake;
    details?: string;
    state?: string;
    emoji?: Emoji;
    party?: ActivityParty;
    assets?: ActivityAssets;
    secrets?: ActivitySecrets;
    instance?: boolean;
    flags?: ActivityFlags;
    buttons?: Button[];
    session_id?: string;
    sync_id?: string;
}

export interface PresenceStructure {
    since: number | null;
    activities: Activity[];
    status: PresenceStatus;
    afk: boolean;
}

export interface GatewayIdentify {
    token: string;
    properties: IdentifyProperties;
    compress?: boolean;
    large_threshold?: number;
    shard?: [number, number];
    presence?: PresenceStructure;
    intents: number;
}