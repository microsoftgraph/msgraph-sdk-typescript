import { DayOfWeek } from './dayOfWeek';
import { serializeTimeZoneBase } from './serializeTimeZoneBase';
import { type TimeZoneBase } from './timeZoneBase';
import { type WorkingHours } from './workingHours';
import { TimeOnly, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkingHours(writer: SerializationWriter, workingHours: WorkingHours | undefined = {} as WorkingHours) : void {
        writer.writeCollectionOfObjectValues<DayOfWeek>("daysOfWeek", workingHours.daysOfWeek, object);
        writer.writeTimeOnlyValue("endTime", workingHours.endTime);
        writer.writeStringValue("@odata.type", workingHours.odataType);
        writer.writeTimeOnlyValue("startTime", workingHours.startTime);
        writer.writeObjectValue<TimeZoneBase>("timeZone", workingHours.timeZone, serializeTimeZoneBase);
        writer.writeAdditionalData(workingHours.additionalData);
}
