import {DeleteUserFromSharedAppleDevicePostRequestBody} from './deleteUserFromSharedAppleDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleteUserFromSharedAppleDevicePostRequestBody(deleteUserFromSharedAppleDevicePostRequestBody: DeleteUserFromSharedAppleDevicePostRequestBody | undefined = {} as DeleteUserFromSharedAppleDevicePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName);
        writer.writeAdditionalData(deleteUserFromSharedAppleDevicePostRequestBody.additionalData);
}
