import { deserializeIntoDeleteUserFromSharedAppleDeviceActionResult } from './deserializeIntoDeleteUserFromSharedAppleDeviceActionResult';
import { type DeleteUserFromSharedAppleDeviceActionResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeleteUserFromSharedAppleDeviceActionResult;
}
