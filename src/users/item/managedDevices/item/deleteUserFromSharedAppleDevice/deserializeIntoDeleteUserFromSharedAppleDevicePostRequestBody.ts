import { type DeleteUserFromSharedAppleDevicePostRequestBody } from './deleteUserFromSharedAppleDevicePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody(deleteUserFromSharedAppleDevicePostRequestBody: DeleteUserFromSharedAppleDevicePostRequestBody | undefined = {} as DeleteUserFromSharedAppleDevicePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "userPrincipalName": n => { deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName = n.getStringValue(); },
    }
}
