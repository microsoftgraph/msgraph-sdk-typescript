import {CalendarPermission} from './calendarPermission';
import {CalendarRoleType} from './calendarRoleType';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EmailAddress} from './emailAddress';
import {serializeEmailAddress} from './serializeEmailAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarPermission(calendarPermission: CalendarPermission | undefined = {} as CalendarPermission) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(calendarPermission),
        "allowedRoles": n => { calendarPermission.allowedRoles = n.getCollectionOfEnumValues<CalendarRoleType>(CalendarRoleType); },
        "emailAddress": n => { calendarPermission.emailAddress = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
        "isInsideOrganization": n => { calendarPermission.isInsideOrganization = n.getBooleanValue(); },
        "isRemovable": n => { calendarPermission.isRemovable = n.getBooleanValue(); },
        "role": n => { calendarPermission.role = n.getEnumValue<CalendarRoleType>(CalendarRoleType); },
    }
}
