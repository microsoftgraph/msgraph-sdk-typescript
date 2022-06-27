import {IdentitySet} from './identitySet';
import {MeetingInfo} from './meetingInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizerMeetingInfo extends Partial<AdditionalDataHolder>, MeetingInfo, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The organizer property */
    organizer?: IdentitySet | undefined;
}
