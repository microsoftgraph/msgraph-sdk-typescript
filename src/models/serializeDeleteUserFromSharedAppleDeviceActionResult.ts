import { type DeleteUserFromSharedAppleDeviceActionResult } from './deleteUserFromSharedAppleDeviceActionResult';
import { serializeDeviceActionResult } from './serializeDeviceActionResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeleteUserFromSharedAppleDeviceActionResult(writer: SerializationWriter, deleteUserFromSharedAppleDeviceActionResult: DeleteUserFromSharedAppleDeviceActionResult | undefined = {} as DeleteUserFromSharedAppleDeviceActionResult) : void {
        serializeDeviceActionResult(writer, deleteUserFromSharedAppleDeviceActionResult)
        writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDeviceActionResult.userPrincipalName);
}
