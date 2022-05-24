import {DeleteUserFromSharedAppleDevicePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeleteUserFromSharedAppleDevicePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeleteUserFromSharedAppleDevicePostRequestBodyImpl();
}
