import { type CalendarGroup } from './calendarGroup';
import { type CalendarGroupCollectionResponse } from './calendarGroupCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeCalendarGroup } from './serializeCalendarGroup';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalendarGroupCollectionResponse(writer: SerializationWriter, calendarGroupCollectionResponse: CalendarGroupCollectionResponse | undefined = {} as CalendarGroupCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<CalendarGroup>("value", calendarGroupCollectionResponse.value, serializeCalendarGroup);
}
