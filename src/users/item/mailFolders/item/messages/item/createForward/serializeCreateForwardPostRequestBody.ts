import { type Message } from '../../../../../../../models/message';
import { type Recipient } from '../../../../../../../models/recipient';
import { serializeMessage } from '../../../../../../../models/serializeMessage';
import { serializeRecipient } from '../../../../../../../models/serializeRecipient';
import { type CreateForwardPostRequestBody } from './createForwardPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCreateForwardPostRequestBody(writer: SerializationWriter, createForwardPostRequestBody: CreateForwardPostRequestBody | undefined = {} as CreateForwardPostRequestBody) : void {
        writer.writeStringValue("comment", createForwardPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", createForwardPostRequestBody.message, serializeMessage);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", createForwardPostRequestBody.toRecipients, serializeRecipient);
        writer.writeAdditionalData(createForwardPostRequestBody.additionalData);
}
