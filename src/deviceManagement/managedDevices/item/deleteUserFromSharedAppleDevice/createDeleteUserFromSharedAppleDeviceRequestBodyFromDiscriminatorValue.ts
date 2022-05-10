import {DeleteUserFromSharedAppleDeviceRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDeviceRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeleteUserFromSharedAppleDeviceRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeleteUserFromSharedAppleDeviceRequestBodyImpl();
}
