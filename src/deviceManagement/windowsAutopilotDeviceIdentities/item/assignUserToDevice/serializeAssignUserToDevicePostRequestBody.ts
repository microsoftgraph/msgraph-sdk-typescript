import { type AssignUserToDevicePostRequestBody } from './assignUserToDevicePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssignUserToDevicePostRequestBody(writer: SerializationWriter, assignUserToDevicePostRequestBody: AssignUserToDevicePostRequestBody | undefined = {} as AssignUserToDevicePostRequestBody) : void {
        writer.writeStringValue("addressableUserName", assignUserToDevicePostRequestBody.addressableUserName);
        writer.writeStringValue("userPrincipalName", assignUserToDevicePostRequestBody.userPrincipalName);
        writer.writeAdditionalData(assignUserToDevicePostRequestBody.additionalData);
}
