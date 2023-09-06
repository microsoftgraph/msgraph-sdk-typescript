import { type UpdateDevicePropertiesPostRequestBody } from './updateDevicePropertiesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUpdateDevicePropertiesPostRequestBody(writer: SerializationWriter, updateDevicePropertiesPostRequestBody: UpdateDevicePropertiesPostRequestBody | undefined = {} as UpdateDevicePropertiesPostRequestBody) : void {
        writer.writeStringValue("addressableUserName", updateDevicePropertiesPostRequestBody.addressableUserName);
        writer.writeStringValue("displayName", updateDevicePropertiesPostRequestBody.displayName);
        writer.writeStringValue("groupTag", updateDevicePropertiesPostRequestBody.groupTag);
        writer.writeStringValue("userPrincipalName", updateDevicePropertiesPostRequestBody.userPrincipalName);
        writer.writeAdditionalData(updateDevicePropertiesPostRequestBody.additionalData);
}
