import {PatternedRecurrence} from './patternedRecurrence';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {serializeTimeRange} from './serializeTimeRange';
import {ShiftAvailability} from './shiftAvailability';
import {TimeRange} from './timeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftAvailability(writer: SerializationWriter, shiftAvailability: ShiftAvailability | undefined = {} as ShiftAvailability) : void {
        writer.writeStringValue("@odata.type", shiftAvailability.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", shiftAvailability.recurrence, serializePatternedRecurrence);
        writer.writeCollectionOfObjectValues<TimeRange>("timeSlots", shiftAvailability.timeSlots, serializeTimeRange);
        writer.writeStringValue("timeZone", shiftAvailability.timeZone);
        writer.writeAdditionalData(shiftAvailability.additionalData);
}
