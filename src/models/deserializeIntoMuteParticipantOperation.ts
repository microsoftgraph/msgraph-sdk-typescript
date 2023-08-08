import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import type {MuteParticipantOperation} from './muteParticipantOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMuteParticipantOperation(muteParticipantOperation: MuteParticipantOperation | undefined = {} as MuteParticipantOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(muteParticipantOperation),
    }
}
