import {MuteParticipantOperation} from './muteParticipantOperation';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMuteParticipantOperation(writer: SerializationWriter, muteParticipantOperation: MuteParticipantOperation | undefined = {} as MuteParticipantOperation) : void {
        serializeCommsOperation(writer, muteParticipantOperation)
}
