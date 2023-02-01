import {DeleteUserFromSharedAppleDevicePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeleteUserFromSharedAppleDevicePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeleteUserFromSharedAppleDevicePostRequestBody();
}
