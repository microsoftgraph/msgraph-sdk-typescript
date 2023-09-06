import { type GetMemberObjectsPostRequestBody } from './getMemberObjectsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetMemberObjectsPostRequestBody(writer: SerializationWriter, getMemberObjectsPostRequestBody: GetMemberObjectsPostRequestBody | undefined = {} as GetMemberObjectsPostRequestBody) : void {
        writer.writeBooleanValue("securityEnabledOnly", getMemberObjectsPostRequestBody.securityEnabledOnly);
        writer.writeAdditionalData(getMemberObjectsPostRequestBody.additionalData);
}
