import {CalendarGroup} from './calendarGroup';
import {CalendarGroupCollectionResponse} from './calendarGroupCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendarGroup} from './serializeCalendarGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarGroupCollectionResponse(writer: SerializationWriter, calendarGroupCollectionResponse: CalendarGroupCollectionResponse | undefined = {} as CalendarGroupCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<CalendarGroup>("value", calendarGroupCollectionResponse.value, serializeCalendarGroup);
}
