import {IdentitySet} from './identitySet';
import {OrganizerMeetingInfo} from './organizerMeetingInfo';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeMeetingInfo} from './serializeMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizerMeetingInfo(writer: SerializationWriter, organizerMeetingInfo: OrganizerMeetingInfo | undefined = {} as OrganizerMeetingInfo) : void {
        serializeMeetingInfo(writer, organizerMeetingInfo)
        writer.writeObjectValue<IdentitySet>("organizer", organizerMeetingInfo.organizer, serializeIdentitySet);
}
