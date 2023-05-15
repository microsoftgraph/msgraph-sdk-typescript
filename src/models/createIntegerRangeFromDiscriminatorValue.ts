import {deserializeIntoIntegerRange} from './deserializeIntoIntegerRange';
import {IntegerRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntegerRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntegerRange;
}
