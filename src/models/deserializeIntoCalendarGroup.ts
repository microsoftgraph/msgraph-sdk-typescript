import { type Calendar } from './calendar';
import { type CalendarGroup } from './calendarGroup';
import { createCalendarFromDiscriminatorValue } from './createCalendarFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeCalendar } from './serializeCalendar';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoCalendarGroup(calendarGroup: CalendarGroup | undefined = {} as CalendarGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(calendarGroup),
        "calendars": n => { calendarGroup.calendars = n.getCollectionOfObjectValues<Calendar>(createCalendarFromDiscriminatorValue); },
        "changeKey": n => { calendarGroup.changeKey = n.getStringValue(); },
        "classId": n => { calendarGroup.classId = n.getGuidValue(); },
        "name": n => { calendarGroup.name = n.getStringValue(); },
    }
}
