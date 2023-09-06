import { DayOfWeek } from './dayOfWeek';
import { type RecurrencePattern } from './recurrencePattern';
import { RecurrencePatternType } from './recurrencePatternType';
import { WeekIndex } from './weekIndex';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRecurrencePattern(writer: SerializationWriter, recurrencePattern: RecurrencePattern | undefined = {} as RecurrencePattern) : void {
        writer.writeNumberValue("dayOfMonth", recurrencePattern.dayOfMonth);
        writer.writeCollectionOfObjectValues<DayOfWeek>("daysOfWeek", recurrencePattern.daysOfWeek, object);
        writer.writeEnumValue<DayOfWeek>("firstDayOfWeek", recurrencePattern.firstDayOfWeek);
        writer.writeEnumValue<WeekIndex>("index", recurrencePattern.index);
        writer.writeNumberValue("interval", recurrencePattern.interval);
        writer.writeNumberValue("month", recurrencePattern.month);
        writer.writeStringValue("@odata.type", recurrencePattern.odataType);
        writer.writeEnumValue<RecurrencePatternType>("type", recurrencePattern.type);
        writer.writeAdditionalData(recurrencePattern.additionalData);
}
