import { deserializeIntoRecurrencePattern } from './deserializeIntoRecurrencePattern';
import { type RecurrencePattern } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRecurrencePatternFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecurrencePattern;
}
