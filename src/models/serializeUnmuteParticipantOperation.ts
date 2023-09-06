import { serializeCommsOperation } from './serializeCommsOperation';
import { type UnmuteParticipantOperation } from './unmuteParticipantOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnmuteParticipantOperation(writer: SerializationWriter, unmuteParticipantOperation: UnmuteParticipantOperation | undefined = {} as UnmuteParticipantOperation) : void {
        serializeCommsOperation(writer, unmuteParticipantOperation)
}
