import { type PatternedRecurrence } from './patternedRecurrence';
import { serializePatternedRecurrence } from './serializePatternedRecurrence';
import { serializeTimeRange } from './serializeTimeRange';
import { type ShiftAvailability } from './shiftAvailability';
import { type TimeRange } from './timeRange';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeShiftAvailability(writer: SerializationWriter, shiftAvailability: ShiftAvailability | undefined = {} as ShiftAvailability) : void {
        writer.writeStringValue("@odata.type", shiftAvailability.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", shiftAvailability.recurrence, serializePatternedRecurrence);
        writer.writeCollectionOfObjectValues<TimeRange>("timeSlots", shiftAvailability.timeSlots, serializeTimeRange);
        writer.writeStringValue("timeZone", shiftAvailability.timeZone);
        writer.writeAdditionalData(shiftAvailability.additionalData);
}
