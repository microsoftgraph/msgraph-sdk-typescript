import { type UpdateDevicePropertiesPostRequestBody } from './updateDevicePropertiesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateDevicePropertiesPostRequestBody(updateDevicePropertiesPostRequestBody: UpdateDevicePropertiesPostRequestBody | undefined = {} as UpdateDevicePropertiesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "addressableUserName": n => { updateDevicePropertiesPostRequestBody.addressableUserName = n.getStringValue(); },
        "displayName": n => { updateDevicePropertiesPostRequestBody.displayName = n.getStringValue(); },
        "groupTag": n => { updateDevicePropertiesPostRequestBody.groupTag = n.getStringValue(); },
        "userPrincipalName": n => { updateDevicePropertiesPostRequestBody.userPrincipalName = n.getStringValue(); },
    }
}
