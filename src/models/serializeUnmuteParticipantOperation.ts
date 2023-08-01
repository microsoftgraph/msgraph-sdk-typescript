import {serializeCommsOperation} from './serializeCommsOperation';
import type {UnmuteParticipantOperation} from './unmuteParticipantOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnmuteParticipantOperation(writer: SerializationWriter, unmuteParticipantOperation: UnmuteParticipantOperation | undefined = {} as UnmuteParticipantOperation) : void {
        serializeCommsOperation(writer, unmuteParticipantOperation)
}
