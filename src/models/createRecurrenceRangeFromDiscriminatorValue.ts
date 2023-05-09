import {deserializeIntoRecurrenceRange} from './deserializeIntoRecurrenceRange';
import {RecurrenceRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurrenceRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecurrenceRange;
}
