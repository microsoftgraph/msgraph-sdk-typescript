import {CalendarSharingMessageAction} from './calendarSharingMessageAction';
import {Message} from './message';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarSharingMessage extends Partial<AdditionalDataHolder>, Message, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The canAccept property */
    canAccept?: boolean | undefined;
    /** The sharingMessageAction property */
    sharingMessageAction?: CalendarSharingMessageAction | undefined;
    /** The sharingMessageActions property */
    sharingMessageActions?: CalendarSharingMessageAction[] | undefined;
    /** The suggestedCalendarName property */
    suggestedCalendarName?: string | undefined;
}
