import {AssignUserToDevicePostRequestBody} from './assignUserToDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignUserToDevicePostRequestBody(assignUserToDevicePostRequestBody: AssignUserToDevicePostRequestBody | undefined = {} as AssignUserToDevicePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("addressableUserName", assignUserToDevicePostRequestBody.addressableUserName);
        writer.writeStringValue("userPrincipalName", assignUserToDevicePostRequestBody.userPrincipalName);
        writer.writeAdditionalData(assignUserToDevicePostRequestBody.additionalData);
}
