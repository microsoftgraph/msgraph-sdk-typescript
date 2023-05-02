import {deserializeIntoAssignUserToDevicePostRequestBody} from './deserializeIntoAssignUserToDevicePostRequestBody';
import {AssignUserToDevicePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignUserToDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignUserToDevicePostRequestBody;
}
