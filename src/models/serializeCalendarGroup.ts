import { type Calendar } from './calendar';
import { type CalendarGroup } from './calendarGroup';
import { serializeCalendar } from './serializeCalendar';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeCalendarGroup(writer: SerializationWriter, calendarGroup: CalendarGroup | undefined = {} as CalendarGroup) : void {
        serializeEntity(writer, calendarGroup)
        writer.writeCollectionOfObjectValues<Calendar>("calendars", calendarGroup.calendars, serializeCalendar);
        writer.writeStringValue("changeKey", calendarGroup.changeKey);
        writer.writeGuidValue("classId", calendarGroup.classId);
        writer.writeStringValue("name", calendarGroup.name);
}
