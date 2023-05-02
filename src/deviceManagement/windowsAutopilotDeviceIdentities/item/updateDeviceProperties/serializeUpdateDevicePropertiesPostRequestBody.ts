import {UpdateDevicePropertiesPostRequestBody} from './updateDevicePropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateDevicePropertiesPostRequestBody(writer: SerializationWriter, updateDevicePropertiesPostRequestBody: UpdateDevicePropertiesPostRequestBody | undefined = {} as UpdateDevicePropertiesPostRequestBody) : void {
        writer.writeStringValue("addressableUserName", updateDevicePropertiesPostRequestBody.addressableUserName);
        writer.writeStringValue("displayName", updateDevicePropertiesPostRequestBody.displayName);
        writer.writeStringValue("groupTag", updateDevicePropertiesPostRequestBody.groupTag);
        writer.writeStringValue("userPrincipalName", updateDevicePropertiesPostRequestBody.userPrincipalName);
        writer.writeAdditionalData(updateDevicePropertiesPostRequestBody.additionalData);
}
