import type {DeleteUserFromSharedAppleDeviceActionResult} from './deleteUserFromSharedAppleDeviceActionResult';
import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleteUserFromSharedAppleDeviceActionResult(deleteUserFromSharedAppleDeviceActionResult: DeleteUserFromSharedAppleDeviceActionResult | undefined = {} as DeleteUserFromSharedAppleDeviceActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(deleteUserFromSharedAppleDeviceActionResult),
        "userPrincipalName": n => { deleteUserFromSharedAppleDeviceActionResult.userPrincipalName = n.getStringValue(); },
    }
}
