import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {UnmuteParticipantOperation} from './unmuteParticipantOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnmuteParticipantOperation(unmuteParticipantOperation: UnmuteParticipantOperation | undefined = {} as UnmuteParticipantOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(unmuteParticipantOperation),
    }
}
