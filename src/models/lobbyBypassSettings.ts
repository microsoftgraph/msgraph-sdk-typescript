import {LobbyBypassScope} from './lobbyBypassScope';

export interface LobbyBypassSettings{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Specifies whether or not to always let dial-in callers bypass the lobby. Optional. */
    isDialInBypassEnabled?:boolean | undefined;
    /** Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional. */
    scope?:LobbyBypassScope | undefined;
}
