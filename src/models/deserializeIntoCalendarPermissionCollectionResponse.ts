import {CalendarPermission} from './calendarPermission';
import {CalendarPermissionCollectionResponse} from './calendarPermissionCollectionResponse';
import {createCalendarPermissionFromDiscriminatorValue} from './createCalendarPermissionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCalendarPermission} from './serializeCalendarPermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarPermissionCollectionResponse(calendarPermissionCollectionResponse: CalendarPermissionCollectionResponse | undefined = {} as CalendarPermissionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarPermissionCollectionResponse),
        "value": n => { calendarPermissionCollectionResponse.value = n.getCollectionOfObjectValues<CalendarPermission>(createCalendarPermissionFromDiscriminatorValue); },
    }
}
