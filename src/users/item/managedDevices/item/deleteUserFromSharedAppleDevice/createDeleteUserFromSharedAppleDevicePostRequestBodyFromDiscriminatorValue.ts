import {deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody} from './deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody';
import {DeleteUserFromSharedAppleDevicePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody;
}
