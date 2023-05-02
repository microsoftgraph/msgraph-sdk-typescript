import {createRecurrencePatternFromDiscriminatorValue} from './createRecurrencePatternFromDiscriminatorValue';
import {createRecurrenceRangeFromDiscriminatorValue} from './createRecurrenceRangeFromDiscriminatorValue';
import {PatternedRecurrence} from './patternedRecurrence';
import {RecurrencePattern} from './recurrencePattern';
import {RecurrenceRange} from './recurrenceRange';
import {serializeRecurrencePattern} from './serializeRecurrencePattern';
import {serializeRecurrenceRange} from './serializeRecurrenceRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPatternedRecurrence(patternedRecurrence: PatternedRecurrence | undefined = {} as PatternedRecurrence) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { patternedRecurrence.odataType = n.getStringValue(); },
        "pattern": n => { patternedRecurrence.pattern = n.getObjectValue<RecurrencePattern>(createRecurrencePatternFromDiscriminatorValue); },
        "range": n => { patternedRecurrence.range = n.getObjectValue<RecurrenceRange>(createRecurrenceRangeFromDiscriminatorValue); },
    }
}
