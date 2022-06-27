import {ShiftItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftItemImpl();
}
