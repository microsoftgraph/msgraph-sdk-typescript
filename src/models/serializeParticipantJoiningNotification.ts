import {Call} from './call';
import {ParticipantJoiningNotification} from './participantJoiningNotification';
import {serializeCall} from './serializeCall';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantJoiningNotification(writer: SerializationWriter, participantJoiningNotification: ParticipantJoiningNotification | undefined = {} as ParticipantJoiningNotification) : void {
        serializeEntity(writer, participantJoiningNotification)
        writer.writeObjectValue<Call>("call", participantJoiningNotification.call, serializeCall);
}
