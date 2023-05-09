import {PatternedRecurrence} from './patternedRecurrence';
import {RecurrencePattern} from './recurrencePattern';
import {RecurrenceRange} from './recurrenceRange';
import {serializeRecurrencePattern} from './serializeRecurrencePattern';
import {serializeRecurrenceRange} from './serializeRecurrenceRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePatternedRecurrence(writer: SerializationWriter, patternedRecurrence: PatternedRecurrence | undefined = {} as PatternedRecurrence) : void {
        writer.writeStringValue("@odata.type", patternedRecurrence.odataType);
        writer.writeObjectValue<RecurrencePattern>("pattern", patternedRecurrence.pattern, serializeRecurrencePattern);
        writer.writeObjectValue<RecurrenceRange>("range", patternedRecurrence.range, serializeRecurrenceRange);
        writer.writeAdditionalData(patternedRecurrence.additionalData);
}
