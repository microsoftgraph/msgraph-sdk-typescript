import {deserializeIntoShift} from './deserializeIntoShift';
import {Shift} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShift;
}
