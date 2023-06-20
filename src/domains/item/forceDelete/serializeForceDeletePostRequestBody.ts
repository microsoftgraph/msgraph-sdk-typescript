import {ForceDeletePostRequestBody} from './forceDeletePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeForceDeletePostRequestBody(forceDeletePostRequestBody: ForceDeletePostRequestBody | undefined = {} as ForceDeletePostRequestBody, writer: SerializationWriter) : void {
        writer.writeBooleanValue("disableUserAccounts", forceDeletePostRequestBody.disableUserAccounts);
        writer.writeAdditionalData(forceDeletePostRequestBody.additionalData);
}
