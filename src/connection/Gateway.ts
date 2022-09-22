import { Dispatch, SetStateAction } from 'react';
import { GatewayIdentify, Opcode, PayloadStructure, User } from '../types';

type SetMyUser = Dispatch<SetStateAction<User | undefined>>;

export class Gateway {
    ws: WebSocket;
    data: GatewayIdentify;
    userInfo!: User;

    constructor() {
        this.ws = new WebSocket(import.meta.env.VITE_GATEWAY_URL);
        this.data = {
            token: import.meta.env.VITE_CLIENT_TOKEN,
            intents: 1 << 8,
            properties: {
                browser: 'linux',
                device: 'chrome',
                os: 'chrome'
            }
        };
    }

    connect(setUser: SetMyUser) {

        this.ws.onopen = () => {
            this.ws.send(JSON.stringify({ op: 2, d: this.data }));
        };

        this.ws.onmessage = ({ data }) => {
            const { d, op, t } = JSON.parse(data) as unknown as PayloadStructure;

            if (op === Opcode.Hello) {
                setInterval(() => this.ws.send(JSON.stringify({ d: null, op: 1 })), d.heartbeat_interval);
            }

            if (t === 'READY') {
                this.sendMemberRequestPayload();
            }

            if (t === 'PRESENCE_UPDATE') {
                if (d.user.id !== import.meta.env.VITE_USER_ID) return;
                this.userInfo = { ...this.userInfo, presence: d };
                setUser(this.userInfo);
            }

            if (t === 'GUILD_MEMBERS_CHUNK') {
                this.userInfo = { ...d.members[0].user };
                setUser(this.userInfo);
            }
        };
    }

    private sendMemberRequestPayload() {
        this.ws.send(JSON.stringify({
            op: 8,
            d: {
                guild_id: import.meta.env.VITE_GUILD_ID,
                user_ids: import.meta.env.VITE_USER_ID,
                limit: 0,
            }
        }));
    }

}