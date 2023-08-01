import type {ForceDeletePostRequestBody} from './forceDeletePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeForceDeletePostRequestBody(writer: SerializationWriter, forceDeletePostRequestBody: ForceDeletePostRequestBody | undefined = {} as ForceDeletePostRequestBody) : void {
        writer.writeBooleanValue("disableUserAccounts", forceDeletePostRequestBody.disableUserAccounts);
        writer.writeAdditionalData(forceDeletePostRequestBody.additionalData);
}
