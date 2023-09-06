import { deserializeIntoOpenShiftChangeRequest } from './deserializeIntoOpenShiftChangeRequest';
import { type OpenShiftChangeRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOpenShiftChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOpenShiftChangeRequest;
}
