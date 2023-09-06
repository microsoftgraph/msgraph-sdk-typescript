import { type IdentitySet } from './identitySet';
import { type OrganizerMeetingInfo } from './organizerMeetingInfo';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeMeetingInfo } from './serializeMeetingInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOrganizerMeetingInfo(writer: SerializationWriter, organizerMeetingInfo: OrganizerMeetingInfo | undefined = {} as OrganizerMeetingInfo) : void {
        serializeMeetingInfo(writer, organizerMeetingInfo)
        writer.writeObjectValue<IdentitySet>("organizer", organizerMeetingInfo.organizer, serializeIdentitySet);
}
