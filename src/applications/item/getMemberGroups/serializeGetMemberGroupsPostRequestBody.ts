import type {GetMemberGroupsPostRequestBody} from './getMemberGroupsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberGroupsPostRequestBody(writer: SerializationWriter, getMemberGroupsPostRequestBody: GetMemberGroupsPostRequestBody | undefined = {} as GetMemberGroupsPostRequestBody) : void {
        writer.writeBooleanValue("securityEnabledOnly", getMemberGroupsPostRequestBody.securityEnabledOnly);
        writer.writeAdditionalData(getMemberGroupsPostRequestBody.additionalData);
}
