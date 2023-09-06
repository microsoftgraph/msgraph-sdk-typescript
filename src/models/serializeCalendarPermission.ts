import { type CalendarPermission } from './calendarPermission';
import { CalendarRoleType } from './calendarRoleType';
import { type EmailAddress } from './emailAddress';
import { serializeEmailAddress } from './serializeEmailAddress';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalendarPermission(writer: SerializationWriter, calendarPermission: CalendarPermission | undefined = {} as CalendarPermission) : void {
        serializeEntity(writer, calendarPermission)
        if(calendarPermission.allowedRoles)
        writer.writeEnumValue<CalendarRoleType>("allowedRoles", ...calendarPermission.allowedRoles);
        writer.writeObjectValue<EmailAddress>("emailAddress", calendarPermission.emailAddress, serializeEmailAddress);
        writer.writeBooleanValue("isInsideOrganization", calendarPermission.isInsideOrganization);
        writer.writeBooleanValue("isRemovable", calendarPermission.isRemovable);
        writer.writeEnumValue<CalendarRoleType>("role", calendarPermission.role);
}
