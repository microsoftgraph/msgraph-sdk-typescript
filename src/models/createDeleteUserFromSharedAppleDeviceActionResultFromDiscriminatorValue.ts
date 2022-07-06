import {DeleteUserFromSharedAppleDeviceActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeleteUserFromSharedAppleDeviceActionResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeleteUserFromSharedAppleDeviceActionResult();
}
