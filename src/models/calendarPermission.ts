import { CalendarRoleType } from './calendarRoleType';
import { type EmailAddress } from './emailAddress';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CalendarPermission extends Entity, Parsable {
    /**
     * List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead, limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom.
     */
    allowedRoles?: CalendarRoleType[] | undefined;
    /**
     * Represents a share recipient or delegate who has access to the calendar. For the 'My Organization' share recipient, the address property is null. Read-only.
     */
    emailAddress?: EmailAddress | undefined;
    /**
     * True if the user in context (recipient or delegate) is inside the same organization as the calendar owner.
     */
    isInsideOrganization?: boolean | undefined;
    /**
     * True if the user can be removed from the list of recipients or delegates for the specified calendar, false otherwise. The 'My organization' user determines the permissions other people within your organization have to the given calendar. You can't remove 'My organization' as a share recipient to a calendar.
     */
    isRemovable?: boolean | undefined;
    /**
     * Current permission level of the calendar share recipient or delegate.
     */
    role?: CalendarRoleType | undefined;
}
