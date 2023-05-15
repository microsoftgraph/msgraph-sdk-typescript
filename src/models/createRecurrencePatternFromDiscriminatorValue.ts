import {deserializeIntoRecurrencePattern} from './deserializeIntoRecurrencePattern';
import {RecurrencePattern} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurrencePatternFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecurrencePattern;
}
