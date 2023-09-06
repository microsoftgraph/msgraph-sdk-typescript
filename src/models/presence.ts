import { type Entity } from './entity';
import { type PresenceStatusMessage } from './presenceStatusMessage';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Presence extends Entity, Parsable {
    /**
     * The supplemental information to a user's availability. Possible values are Available, Away, BeRightBack, Busy, DoNotDisturb, InACall, InAConferenceCall, Inactive, InAMeeting, Offline, OffWork, OutOfOffice, PresenceUnknown, Presenting, UrgentInterruptionsOnly.
     */
    activity?: string | undefined;
    /**
     * The base presence information for a user. Possible values are Available, AvailableIdle,  Away, BeRightBack, Busy, BusyIdle, DoNotDisturb, Offline, PresenceUnknown
     */
    availability?: string | undefined;
    /**
     * The statusMessage property
     */
    statusMessage?: PresenceStatusMessage | undefined;
}
