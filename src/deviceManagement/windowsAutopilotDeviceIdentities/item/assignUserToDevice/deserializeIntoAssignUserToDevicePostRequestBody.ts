import type {AssignUserToDevicePostRequestBody} from './assignUserToDevicePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignUserToDevicePostRequestBody(assignUserToDevicePostRequestBody: AssignUserToDevicePostRequestBody | undefined = {} as AssignUserToDevicePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "addressableUserName": n => { assignUserToDevicePostRequestBody.addressableUserName = n.getStringValue(); },
        "userPrincipalName": n => { assignUserToDevicePostRequestBody.userPrincipalName = n.getStringValue(); },
    }
}
