import {CalendarRoleType} from '../../../../../../models/calendarRoleType';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {AllowedCalendarSharingRolesWithUserResponse} from './allowedCalendarSharingRolesWithUserResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllowedCalendarSharingRolesWithUserResponse(allowedCalendarSharingRolesWithUserResponse: AllowedCalendarSharingRolesWithUserResponse | undefined = {} as AllowedCalendarSharingRolesWithUserResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(allowedCalendarSharingRolesWithUserResponse),
        "value": n => { allowedCalendarSharingRolesWithUserResponse.value = n.getCollectionOfEnumValues<CalendarRoleType>(CalendarRoleType); },
    }
}
