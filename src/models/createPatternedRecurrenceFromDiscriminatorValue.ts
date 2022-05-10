import {PatternedRecurrenceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPatternedRecurrenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : PatternedRecurrenceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PatternedRecurrenceImpl();
}
