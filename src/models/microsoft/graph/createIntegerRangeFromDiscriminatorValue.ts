import {IntegerRange} from './integerRange';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntegerRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IntegerRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IntegerRange();
}
