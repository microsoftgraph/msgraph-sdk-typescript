import { deserializeIntoPatternedRecurrence } from './deserializeIntoPatternedRecurrence';
import { type PatternedRecurrence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPatternedRecurrenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPatternedRecurrence;
}
