import {AssignUserToDevicePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignUserToDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignUserToDevicePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignUserToDevicePostRequestBodyImpl();
}
