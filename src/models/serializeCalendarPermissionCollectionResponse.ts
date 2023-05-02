import {CalendarPermission} from './calendarPermission';
import {CalendarPermissionCollectionResponse} from './calendarPermissionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendarPermission} from './serializeCalendarPermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarPermissionCollectionResponse(writer: SerializationWriter, calendarPermissionCollectionResponse: CalendarPermissionCollectionResponse | undefined = {} as CalendarPermissionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarPermissionCollectionResponse)
        writer.writeCollectionOfObjectValues<CalendarPermission>("value", calendarPermissionCollectionResponse.value, serializeCalendarPermission);
}
