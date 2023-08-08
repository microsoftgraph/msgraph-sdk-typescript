import type {PatternedRecurrence} from './patternedRecurrence';
import type {RecurrencePattern} from './recurrencePattern';
import type {RecurrenceRange} from './recurrenceRange';
import {serializeRecurrencePattern} from './serializeRecurrencePattern';
import {serializeRecurrenceRange} from './serializeRecurrenceRange';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePatternedRecurrence(writer: SerializationWriter, patternedRecurrence: PatternedRecurrence | undefined = {} as PatternedRecurrence) : void {
        writer.writeStringValue("@odata.type", patternedRecurrence.odataType);
        writer.writeObjectValue<RecurrencePattern>("pattern", patternedRecurrence.pattern, serializeRecurrencePattern);
        writer.writeObjectValue<RecurrenceRange>("range", patternedRecurrence.range, serializeRecurrenceRange);
        writer.writeAdditionalData(patternedRecurrence.additionalData);
}
