import {CalendarRoleType} from '../../../../models/calendarRoleType';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {AllowedCalendarSharingRolesWithUserResponse} from './allowedCalendarSharingRolesWithUserResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllowedCalendarSharingRolesWithUserResponse(writer: SerializationWriter, allowedCalendarSharingRolesWithUserResponse: AllowedCalendarSharingRolesWithUserResponse | undefined = {} as AllowedCalendarSharingRolesWithUserResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, allowedCalendarSharingRolesWithUserResponse)
        if(allowedCalendarSharingRolesWithUserResponse.value)
        writer.writeEnumValue<CalendarRoleType>("value", ...allowedCalendarSharingRolesWithUserResponse.value);
}
