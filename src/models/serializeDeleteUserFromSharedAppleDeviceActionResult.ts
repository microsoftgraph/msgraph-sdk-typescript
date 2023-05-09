import {DeleteUserFromSharedAppleDeviceActionResult} from './deleteUserFromSharedAppleDeviceActionResult';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleteUserFromSharedAppleDeviceActionResult(writer: SerializationWriter, deleteUserFromSharedAppleDeviceActionResult: DeleteUserFromSharedAppleDeviceActionResult | undefined = {} as DeleteUserFromSharedAppleDeviceActionResult) : void {
        serializeDeviceActionResult(writer, deleteUserFromSharedAppleDeviceActionResult)
        writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDeviceActionResult.userPrincipalName);
}
