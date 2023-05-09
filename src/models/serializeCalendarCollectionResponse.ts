import {Calendar} from './calendar';
import {CalendarCollectionResponse} from './calendarCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendar} from './serializeCalendar';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarCollectionResponse(writer: SerializationWriter, calendarCollectionResponse: CalendarCollectionResponse | undefined = {} as CalendarCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarCollectionResponse)
        writer.writeCollectionOfObjectValues<Calendar>("value", calendarCollectionResponse.value, serializeCalendar);
}
