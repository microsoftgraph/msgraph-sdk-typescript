import {DayOfWeek} from './dayOfWeek';
import {serializeTimeZoneBase} from './serializeTimeZoneBase';
import {TimeZoneBase} from './timeZoneBase';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeWorkingHours(writer: SerializationWriter, workingHours: WorkingHours | undefined = {} as WorkingHours) : void {
        if(workingHours.daysOfWeek)
        writer.writeEnumValue<DayOfWeek>("daysOfWeek", ...workingHours.daysOfWeek);
        writer.writeTimeOnlyValue("endTime", workingHours.endTime);
        writer.writeStringValue("@odata.type", workingHours.odataType);
        writer.writeTimeOnlyValue("startTime", workingHours.startTime);
        writer.writeObjectValue<TimeZoneBase>("timeZone", workingHours.timeZone, serializeTimeZoneBase);
        writer.writeAdditionalData(workingHours.additionalData);
}
