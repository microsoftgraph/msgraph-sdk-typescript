import {deserializeIntoDeleteUserFromSharedAppleDeviceActionResult} from './deserializeIntoDeleteUserFromSharedAppleDeviceActionResult';
import {DeleteUserFromSharedAppleDeviceActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeleteUserFromSharedAppleDeviceActionResult;
}
