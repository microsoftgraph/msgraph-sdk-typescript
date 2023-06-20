import {DeleteUserFromSharedAppleDeviceActionResult} from './deleteUserFromSharedAppleDeviceActionResult';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleteUserFromSharedAppleDeviceActionResult(deleteUserFromSharedAppleDeviceActionResult: DeleteUserFromSharedAppleDeviceActionResult | undefined = {} as DeleteUserFromSharedAppleDeviceActionResult, writer: SerializationWriter) : void {
        serializeDeviceActionResult(writer, deleteUserFromSharedAppleDeviceActionResult)
        writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDeviceActionResult.userPrincipalName);
}
