import {CalendarGroup} from './calendarGroup';
import {CalendarGroupCollectionResponse} from './calendarGroupCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendarGroup} from './serializeCalendarGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarGroupCollectionResponse(calendarGroupCollectionResponse: CalendarGroupCollectionResponse | undefined = {} as CalendarGroupCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<CalendarGroup>("value", calendarGroupCollectionResponse.value, serializeCalendarGroup);
}
