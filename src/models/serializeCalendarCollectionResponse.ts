import { type Calendar } from './calendar';
import { type CalendarCollectionResponse } from './calendarCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeCalendar } from './serializeCalendar';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalendarCollectionResponse(writer: SerializationWriter, calendarCollectionResponse: CalendarCollectionResponse | undefined = {} as CalendarCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarCollectionResponse)
        writer.writeCollectionOfObjectValues<Calendar>("value", calendarCollectionResponse.value, serializeCalendar);
}
