import {CalendarGroup} from './calendarGroup';
import {CalendarGroupCollectionResponse} from './calendarGroupCollectionResponse';
import {createCalendarGroupFromDiscriminatorValue} from './createCalendarGroupFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCalendarGroup} from './serializeCalendarGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarGroupCollectionResponse(calendarGroupCollectionResponse: CalendarGroupCollectionResponse | undefined = {} as CalendarGroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarGroupCollectionResponse),
        "value": n => { calendarGroupCollectionResponse.value = n.getCollectionOfObjectValues<CalendarGroup>(createCalendarGroupFromDiscriminatorValue); },
    }
}
