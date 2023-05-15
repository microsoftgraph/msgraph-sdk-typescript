import {AssignUserToDevicePostRequestBody} from './assignUserToDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignUserToDevicePostRequestBody(writer: SerializationWriter, assignUserToDevicePostRequestBody: AssignUserToDevicePostRequestBody | undefined = {} as AssignUserToDevicePostRequestBody) : void {
        writer.writeStringValue("addressableUserName", assignUserToDevicePostRequestBody.addressableUserName);
        writer.writeStringValue("userPrincipalName", assignUserToDevicePostRequestBody.userPrincipalName);
        writer.writeAdditionalData(assignUserToDevicePostRequestBody.additionalData);
}
