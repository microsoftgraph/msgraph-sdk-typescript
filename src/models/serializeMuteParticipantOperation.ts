import { type MuteParticipantOperation } from './muteParticipantOperation';
import { serializeCommsOperation } from './serializeCommsOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMuteParticipantOperation(writer: SerializationWriter, muteParticipantOperation: MuteParticipantOperation | undefined = {} as MuteParticipantOperation) : void {
        serializeCommsOperation(writer, muteParticipantOperation)
}
