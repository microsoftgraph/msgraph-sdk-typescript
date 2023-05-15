import {CalendarPermission} from './calendarPermission';
import {CalendarRoleType} from './calendarRoleType';
import {EmailAddress} from './emailAddress';
import {serializeEmailAddress} from './serializeEmailAddress';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarPermission(writer: SerializationWriter, calendarPermission: CalendarPermission | undefined = {} as CalendarPermission) : void {
        serializeEntity(writer, calendarPermission)
        if(calendarPermission.allowedRoles)
        writer.writeEnumValue<CalendarRoleType>("allowedRoles", ...calendarPermission.allowedRoles);
        writer.writeObjectValue<EmailAddress>("emailAddress", calendarPermission.emailAddress, serializeEmailAddress);
        writer.writeBooleanValue("isInsideOrganization", calendarPermission.isInsideOrganization);
        writer.writeBooleanValue("isRemovable", calendarPermission.isRemovable);
        writer.writeEnumValue<CalendarRoleType>("role", calendarPermission.role);
}
