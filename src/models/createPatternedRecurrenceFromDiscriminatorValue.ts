import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {PatternedRecurrence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPatternedRecurrenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPatternedRecurrence;
}
