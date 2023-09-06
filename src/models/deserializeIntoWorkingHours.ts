import { createTimeZoneBaseFromDiscriminatorValue } from './createTimeZoneBaseFromDiscriminatorValue';
import { DayOfWeek } from './dayOfWeek';
import { serializeTimeZoneBase } from './serializeTimeZoneBase';
import { type TimeZoneBase } from './timeZoneBase';
import { type WorkingHours } from './workingHours';
import { TimeOnly, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkingHours(workingHours: WorkingHours | undefined = {} as WorkingHours) : Record<string, (node: ParseNode) => void> {
    return {
        "daysOfWeek": n => { workingHours.daysOfWeek = n.getCollectionOfEnumValues<DayOfWeek>(DayOfWeek); },
        "endTime": n => { workingHours.endTime = n.getTimeOnlyValue(); },
        "@odata.type": n => { workingHours.odataType = n.getStringValue(); },
        "startTime": n => { workingHours.startTime = n.getTimeOnlyValue(); },
        "timeZone": n => { workingHours.timeZone = n.getObjectValue<TimeZoneBase>(createTimeZoneBaseFromDiscriminatorValue); },
    }
}
