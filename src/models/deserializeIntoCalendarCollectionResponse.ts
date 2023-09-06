import { type Calendar } from './calendar';
import { type CalendarCollectionResponse } from './calendarCollectionResponse';
import { createCalendarFromDiscriminatorValue } from './createCalendarFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeCalendar } from './serializeCalendar';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarCollectionResponse(calendarCollectionResponse: CalendarCollectionResponse | undefined = {} as CalendarCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarCollectionResponse),
        "value": n => { calendarCollectionResponse.value = n.getCollectionOfObjectValues<Calendar>(createCalendarFromDiscriminatorValue); },
    }
}
