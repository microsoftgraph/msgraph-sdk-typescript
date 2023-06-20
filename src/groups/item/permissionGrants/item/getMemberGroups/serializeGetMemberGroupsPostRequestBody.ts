import {GetMemberGroupsPostRequestBody} from './getMemberGroupsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberGroupsPostRequestBody(getMemberGroupsPostRequestBody: GetMemberGroupsPostRequestBody | undefined = {} as GetMemberGroupsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeBooleanValue("securityEnabledOnly", getMemberGroupsPostRequestBody.securityEnabledOnly);
        writer.writeAdditionalData(getMemberGroupsPostRequestBody.additionalData);
}
