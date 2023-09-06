import { type Recipient } from '../../../../../models/recipient';
import { serializeRecipient } from '../../../../../models/serializeRecipient';
import { type ForwardPostRequestBody } from './forwardPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeForwardPostRequestBody(writer: SerializationWriter, forwardPostRequestBody: ForwardPostRequestBody | undefined = {} as ForwardPostRequestBody) : void {
        writer.writeStringValue("comment", forwardPostRequestBody.comment);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", forwardPostRequestBody.toRecipients, serializeRecipient);
        writer.writeAdditionalData(forwardPostRequestBody.additionalData);
}
