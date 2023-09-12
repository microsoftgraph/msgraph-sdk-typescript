import { type CalendarPermission } from './calendarPermission';
import { type CalendarPermissionCollectionResponse } from './calendarPermissionCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeCalendarPermission } from './serializeCalendarPermission';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalendarPermissionCollectionResponse(writer: SerializationWriter, calendarPermissionCollectionResponse: CalendarPermissionCollectionResponse | undefined = {} as CalendarPermissionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarPermissionCollectionResponse)
        writer.writeCollectionOfObjectValues<CalendarPermission>("value", calendarPermissionCollectionResponse.value, serializeCalendarPermission);
}
