import { type MeetingParticipantInfo } from './meetingParticipantInfo';
import { type MeetingParticipants } from './meetingParticipants';
import { serializeMeetingParticipantInfo } from './serializeMeetingParticipantInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMeetingParticipants(writer: SerializationWriter, meetingParticipants: MeetingParticipants | undefined = {} as MeetingParticipants) : void {
        writer.writeCollectionOfObjectValues<MeetingParticipantInfo>("attendees", meetingParticipants.attendees, serializeMeetingParticipantInfo);
        writer.writeStringValue("@odata.type", meetingParticipants.odataType);
        writer.writeObjectValue<MeetingParticipantInfo>("organizer", meetingParticipants.organizer, serializeMeetingParticipantInfo);
        writer.writeAdditionalData(meetingParticipants.additionalData);
}
