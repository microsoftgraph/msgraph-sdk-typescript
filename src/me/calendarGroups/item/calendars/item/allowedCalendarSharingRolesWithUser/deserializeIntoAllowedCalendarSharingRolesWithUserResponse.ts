import {CalendarRoleType} from '../../../../../../models/calendarRoleType';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {AllowedCalendarSharingRolesWithUserResponse} from './allowedCalendarSharingRolesWithUserResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllowedCalendarSharingRolesWithUserResponse(allowedCalendarSharingRolesWithUserResponse: AllowedCalendarSharingRolesWithUserResponse | undefined = {} as AllowedCalendarSharingRolesWithUserResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(allowedCalendarSharingRolesWithUserResponse),
        "value": n => { allowedCalendarSharingRolesWithUserResponse.value = n.getEnumValues<CalendarRoleType>(CalendarRoleType); },
    }
}
