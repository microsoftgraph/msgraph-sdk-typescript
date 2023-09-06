import { deserializeIntoOpenShift } from './deserializeIntoOpenShift';
import { type OpenShift } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOpenShiftFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOpenShift;
}
