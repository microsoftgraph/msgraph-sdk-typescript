import {CalendarRoleType} from '../../../../../../models/calendarRoleType';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AllowedCalendarSharingRolesWithUserResponse} from './allowedCalendarSharingRolesWithUserResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllowedCalendarSharingRolesWithUserResponse(allowedCalendarSharingRolesWithUserResponse: AllowedCalendarSharingRolesWithUserResponse | undefined = {} as AllowedCalendarSharingRolesWithUserResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, allowedCalendarSharingRolesWithUserResponse)
        if(allowedCalendarSharingRolesWithUserResponse.value)
        writer.writeEnumValue<CalendarRoleType>("value", ...allowedCalendarSharingRolesWithUserResponse.value);
}
