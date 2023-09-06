import { type IdentitySet } from './identitySet';
import { type MeetingInfo } from './meetingInfo';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OrganizerMeetingInfo extends MeetingInfo, Parsable {
    /**
     * The organizer property
     */
    organizer?: IdentitySet | undefined;
}
