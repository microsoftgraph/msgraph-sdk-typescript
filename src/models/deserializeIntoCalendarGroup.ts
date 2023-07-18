import {Calendar} from './calendar';
import {CalendarGroup} from './calendarGroup';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeCalendar} from './serializeCalendar';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoCalendarGroup(calendarGroup: CalendarGroup | undefined = {} as CalendarGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(calendarGroup),
        "calendars": n => { calendarGroup.calendars = n.getCollectionOfObjectValues<Calendar>(createCalendarFromDiscriminatorValue); },
        "changeKey": n => { calendarGroup.changeKey = n.getStringValue(); },
        "classId": n => { calendarGroup.classId = n.getGuidValue(); },
        "name": n => { calendarGroup.name = n.getStringValue(); },
    }
}
