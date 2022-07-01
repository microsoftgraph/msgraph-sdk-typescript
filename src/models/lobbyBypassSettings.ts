import {LobbyBypassScope} from './lobbyBypassScope';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LobbyBypassSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Specifies whether or not to always let dial-in callers bypass the lobby. Optional. */
    isDialInBypassEnabled?: boolean | undefined;
    /** Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional. */
    scope?: LobbyBypassScope | undefined;
}
