import { CalendarRoleType } from '../../../../models/calendarRoleType';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import { type AllowedCalendarSharingRolesWithUserResponse } from './allowedCalendarSharingRolesWithUserResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAllowedCalendarSharingRolesWithUserResponse(writer: SerializationWriter, allowedCalendarSharingRolesWithUserResponse: AllowedCalendarSharingRolesWithUserResponse | undefined = {} as AllowedCalendarSharingRolesWithUserResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, allowedCalendarSharingRolesWithUserResponse)
        writer.writeCollectionOfObjectValues<CalendarRoleType>("value", allowedCalendarSharingRolesWithUserResponse.value, object);
}
