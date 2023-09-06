import { deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody } from './deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody';
import { type DeleteUserFromSharedAppleDevicePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody;
}
