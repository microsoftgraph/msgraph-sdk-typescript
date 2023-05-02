import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {MuteParticipantOperation} from './muteParticipantOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMuteParticipantOperation(muteParticipantOperation: MuteParticipantOperation | undefined = {} as MuteParticipantOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(muteParticipantOperation),
    }
}
