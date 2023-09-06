import { type CalendarSharingMessageAction } from './calendarSharingMessageAction';
import { type Message } from './message';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CalendarSharingMessage extends Message, Parsable {
    /**
     * The canAccept property
     */
    canAccept?: boolean | undefined;
    /**
     * The sharingMessageAction property
     */
    sharingMessageAction?: CalendarSharingMessageAction | undefined;
    /**
     * The sharingMessageActions property
     */
    sharingMessageActions?: CalendarSharingMessageAction[] | undefined;
    /**
     * The suggestedCalendarName property
     */
    suggestedCalendarName?: string | undefined;
}
