import { deserializeIntoAssignUserToDevicePostRequestBody } from './deserializeIntoAssignUserToDevicePostRequestBody';
import { type AssignUserToDevicePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignUserToDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignUserToDevicePostRequestBody;
}
