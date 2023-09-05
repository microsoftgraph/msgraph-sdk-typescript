import { type ForceDeletePostRequestBody } from './forceDeletePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeForceDeletePostRequestBody(writer: SerializationWriter, forceDeletePostRequestBody: ForceDeletePostRequestBody | undefined = {} as ForceDeletePostRequestBody) : void {
        writer.writeBooleanValue("disableUserAccounts", forceDeletePostRequestBody.disableUserAccounts);
        writer.writeAdditionalData(forceDeletePostRequestBody.additionalData);
}
