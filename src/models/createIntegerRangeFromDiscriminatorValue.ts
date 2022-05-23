import {IntegerRangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntegerRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IntegerRangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IntegerRangeImpl();
}
