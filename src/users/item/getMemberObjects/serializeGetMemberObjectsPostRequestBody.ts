import {GetMemberObjectsPostRequestBody} from './getMemberObjectsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberObjectsPostRequestBody(getMemberObjectsPostRequestBody: GetMemberObjectsPostRequestBody | undefined = {} as GetMemberObjectsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeBooleanValue("securityEnabledOnly", getMemberObjectsPostRequestBody.securityEnabledOnly);
        writer.writeAdditionalData(getMemberObjectsPostRequestBody.additionalData);
}
