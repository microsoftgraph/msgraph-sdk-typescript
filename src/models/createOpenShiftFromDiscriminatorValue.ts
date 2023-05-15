import {deserializeIntoOpenShift} from './deserializeIntoOpenShift';
import {OpenShift} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOpenShift;
}
