import {CalendarColor} from './calendarColor';
import {CalendarPermission} from './calendarPermission';
import {EmailAddress} from './emailAddress';
import {Entity} from './entity';
import {Event} from './event';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Calendar extends Entity, Parsable {
    /**
     * Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     */
    allowedOnlineMeetingProviders?: OnlineMeetingProviderType[] | undefined;
    /**
     * The permissions of the users with whom the calendar is shared.
     */
    calendarPermissions?: CalendarPermission[] | undefined;
    /**
     * The calendar view for the calendar. Navigation property. Read-only.
     */
    calendarView?: Event[] | undefined;
    /**
     * true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access.
     */
    canEdit?: boolean | undefined;
    /**
     * true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it.
     */
    canShare?: boolean | undefined;
    /**
     * true if the user can read calendar items that have been marked private, false otherwise.
     */
    canViewPrivateItems?: boolean | undefined;
    /**
     * Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     */
    changeKey?: string | undefined;
    /**
     * Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.
     */
    color?: CalendarColor | undefined;
    /**
     * The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     */
    defaultOnlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /**
     * The events in the calendar. Navigation property. Read-only.
     */
    events?: Event[] | undefined;
    /**
     * The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is empty. Read-only.
     */
    hexColor?: string | undefined;
    /**
     * true if this is the default calendar where new events are created by default, false otherwise.
     */
    isDefaultCalendar?: boolean | undefined;
    /**
     * Indicates whether this user calendar can be deleted from the user mailbox.
     */
    isRemovable?: boolean | undefined;
    /**
     * Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
     */
    isTallyingResponses?: boolean | undefined;
    /**
     * The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
     */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /**
     * The calendar name.
     */
    name?: string | undefined;
    /**
     * If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user.
     */
    owner?: EmailAddress | undefined;
    /**
     * The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
}
