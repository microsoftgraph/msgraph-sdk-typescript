import type {DeleteUserFromSharedAppleDevicePostRequestBody} from './deleteUserFromSharedAppleDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleteUserFromSharedAppleDevicePostRequestBody(writer: SerializationWriter, deleteUserFromSharedAppleDevicePostRequestBody: DeleteUserFromSharedAppleDevicePostRequestBody | undefined = {} as DeleteUserFromSharedAppleDevicePostRequestBody) : void {
        writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName);
        writer.writeAdditionalData(deleteUserFromSharedAppleDevicePostRequestBody.additionalData);
}
