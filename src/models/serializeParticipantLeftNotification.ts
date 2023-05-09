import {Call} from './call';
import {ParticipantLeftNotification} from './participantLeftNotification';
import {serializeCall} from './serializeCall';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantLeftNotification(writer: SerializationWriter, participantLeftNotification: ParticipantLeftNotification | undefined = {} as ParticipantLeftNotification) : void {
        serializeEntity(writer, participantLeftNotification)
        writer.writeObjectValue<Call>("call", participantLeftNotification.call, serializeCall);
        writer.writeStringValue("participantId", participantLeftNotification.participantId);
}
