import {RecurrenceRange} from './recurrenceRange';
import {RecurrenceRangeType} from './recurrenceRangeType';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecurrenceRange(writer: SerializationWriter, recurrenceRange: RecurrenceRange | undefined = {} as RecurrenceRange) : void {
        writer.writeDateOnlyValue("endDate", recurrenceRange.endDate);
        writer.writeNumberValue("numberOfOccurrences", recurrenceRange.numberOfOccurrences);
        writer.writeStringValue("@odata.type", recurrenceRange.odataType);
        writer.writeStringValue("recurrenceTimeZone", recurrenceRange.recurrenceTimeZone);
        writer.writeDateOnlyValue("startDate", recurrenceRange.startDate);
        writer.writeEnumValue<RecurrenceRangeType>("type", recurrenceRange.type);
        writer.writeAdditionalData(recurrenceRange.additionalData);
}
