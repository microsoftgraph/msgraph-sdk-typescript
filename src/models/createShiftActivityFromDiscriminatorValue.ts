import {ShiftActivityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftActivityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftActivityImpl();
}
