import {Calendar} from './calendar';
import {CalendarCollectionResponse} from './calendarCollectionResponse';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCalendar} from './serializeCalendar';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarCollectionResponse(calendarCollectionResponse: CalendarCollectionResponse | undefined = {} as CalendarCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarCollectionResponse),
        "value": n => { calendarCollectionResponse.value = n.getCollectionOfObjectValues<Calendar>(createCalendarFromDiscriminatorValue); },
    }
}
