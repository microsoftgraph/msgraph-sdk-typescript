import {AssignUserToDeviceRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignUserToDeviceRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignUserToDeviceRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignUserToDeviceRequestBodyImpl();
}
