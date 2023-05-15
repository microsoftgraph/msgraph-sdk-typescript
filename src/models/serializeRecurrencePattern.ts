import {DayOfWeek} from './dayOfWeek';
import {RecurrencePattern} from './recurrencePattern';
import {RecurrencePatternType} from './recurrencePatternType';
import {WeekIndex} from './weekIndex';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecurrencePattern(writer: SerializationWriter, recurrencePattern: RecurrencePattern | undefined = {} as RecurrencePattern) : void {
        writer.writeNumberValue("dayOfMonth", recurrencePattern.dayOfMonth);
        if(recurrencePattern.daysOfWeek)
        writer.writeEnumValue<DayOfWeek>("daysOfWeek", ...recurrencePattern.daysOfWeek);
        writer.writeEnumValue<DayOfWeek>("firstDayOfWeek", recurrencePattern.firstDayOfWeek);
        writer.writeEnumValue<WeekIndex>("index", recurrencePattern.index);
        writer.writeNumberValue("interval", recurrencePattern.interval);
        writer.writeNumberValue("month", recurrencePattern.month);
        writer.writeStringValue("@odata.type", recurrencePattern.odataType);
        writer.writeEnumValue<RecurrencePatternType>("type", recurrencePattern.type);
        writer.writeAdditionalData(recurrencePattern.additionalData);
}
