import { DayOfWeek } from './dayOfWeek';
import { type StandardTimeZoneOffset } from './standardTimeZoneOffset';
import { TimeOnly, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStandardTimeZoneOffset(writer: SerializationWriter, standardTimeZoneOffset: StandardTimeZoneOffset | undefined = {} as StandardTimeZoneOffset) : void {
        writer.writeNumberValue("dayOccurrence", standardTimeZoneOffset.dayOccurrence);
        writer.writeEnumValue<DayOfWeek>("dayOfWeek", standardTimeZoneOffset.dayOfWeek);
        writer.writeNumberValue("month", standardTimeZoneOffset.month);
        writer.writeStringValue("@odata.type", standardTimeZoneOffset.odataType);
        writer.writeTimeOnlyValue("time", standardTimeZoneOffset.time);
        writer.writeNumberValue("year", standardTimeZoneOffset.year);
        writer.writeAdditionalData(standardTimeZoneOffset.additionalData);
}
