import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {createTimeRangeFromDiscriminatorValue} from './createTimeRangeFromDiscriminatorValue';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {serializeTimeRange} from './serializeTimeRange';
import {ShiftAvailability} from './shiftAvailability';
import {TimeRange} from './timeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftAvailability(shiftAvailability: ShiftAvailability | undefined = {} as ShiftAvailability) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { shiftAvailability.odataType = n.getStringValue(); },
        "recurrence": n => { shiftAvailability.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "timeSlots": n => { shiftAvailability.timeSlots = n.getCollectionOfObjectValues<TimeRange>(createTimeRangeFromDiscriminatorValue); },
        "timeZone": n => { shiftAvailability.timeZone = n.getStringValue(); },
    }
}
