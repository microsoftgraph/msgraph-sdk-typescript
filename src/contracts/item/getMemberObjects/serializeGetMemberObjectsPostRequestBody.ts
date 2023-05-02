import {GetMemberObjectsPostRequestBody} from './getMemberObjectsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberObjectsPostRequestBody(writer: SerializationWriter, getMemberObjectsPostRequestBody: GetMemberObjectsPostRequestBody | undefined = {} as GetMemberObjectsPostRequestBody) : void {
        writer.writeBooleanValue("securityEnabledOnly", getMemberObjectsPostRequestBody.securityEnabledOnly);
        writer.writeAdditionalData(getMemberObjectsPostRequestBody.additionalData);
}
