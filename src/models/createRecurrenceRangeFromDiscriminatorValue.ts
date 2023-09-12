import { deserializeIntoRecurrenceRange } from './deserializeIntoRecurrenceRange';
import { type RecurrenceRange } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRecurrenceRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecurrenceRange;
}
