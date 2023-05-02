import {createMeetingParticipantInfoFromDiscriminatorValue} from './createMeetingParticipantInfoFromDiscriminatorValue';
import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {MeetingParticipants} from './meetingParticipants';
import {serializeMeetingParticipantInfo} from './serializeMeetingParticipantInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingParticipants(meetingParticipants: MeetingParticipants | undefined = {} as MeetingParticipants) : Record<string, (node: ParseNode) => void> {
    return {
        "attendees": n => { meetingParticipants.attendees = n.getCollectionOfObjectValues<MeetingParticipantInfo>(createMeetingParticipantInfoFromDiscriminatorValue); },
        "@odata.type": n => { meetingParticipants.odataType = n.getStringValue(); },
        "organizer": n => { meetingParticipants.organizer = n.getObjectValue<MeetingParticipantInfo>(createMeetingParticipantInfoFromDiscriminatorValue); },
    }
}
