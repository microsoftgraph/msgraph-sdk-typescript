import {ShiftItem} from './shiftItem';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftItem();
}
