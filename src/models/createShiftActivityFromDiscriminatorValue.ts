import {deserializeIntoShiftActivity} from './deserializeIntoShiftActivity';
import {ShiftActivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShiftActivity;
}
