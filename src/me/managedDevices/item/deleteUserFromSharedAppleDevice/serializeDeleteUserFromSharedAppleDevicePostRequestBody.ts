import { type DeleteUserFromSharedAppleDevicePostRequestBody } from './deleteUserFromSharedAppleDevicePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeleteUserFromSharedAppleDevicePostRequestBody(writer: SerializationWriter, deleteUserFromSharedAppleDevicePostRequestBody: DeleteUserFromSharedAppleDevicePostRequestBody | undefined = {} as DeleteUserFromSharedAppleDevicePostRequestBody) : void {
        writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName);
        writer.writeAdditionalData(deleteUserFromSharedAppleDevicePostRequestBody.additionalData);
}
