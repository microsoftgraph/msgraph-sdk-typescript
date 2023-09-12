import { deserializeIntoCommsOperation } from './deserializeIntoCommsOperation';
import { type UnmuteParticipantOperation } from './unmuteParticipantOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnmuteParticipantOperation(unmuteParticipantOperation: UnmuteParticipantOperation | undefined = {} as UnmuteParticipantOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(unmuteParticipantOperation),
    }
}
