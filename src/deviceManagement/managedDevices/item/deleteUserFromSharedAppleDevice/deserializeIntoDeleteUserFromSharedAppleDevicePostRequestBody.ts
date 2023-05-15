import {DeleteUserFromSharedAppleDevicePostRequestBody} from './deleteUserFromSharedAppleDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody(deleteUserFromSharedAppleDevicePostRequestBody: DeleteUserFromSharedAppleDevicePostRequestBody | undefined = {} as DeleteUserFromSharedAppleDevicePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "userPrincipalName": n => { deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName = n.getStringValue(); },
    }
}
