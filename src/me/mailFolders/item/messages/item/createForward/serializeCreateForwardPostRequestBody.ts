import {Message} from '../../../../../../models/message';
import {Recipient} from '../../../../../../models/recipient';
import {serializeMessage} from '../../../../../../models/serializeMessage';
import {serializeRecipient} from '../../../../../../models/serializeRecipient';
import {CreateForwardPostRequestBody} from './createForwardPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateForwardPostRequestBody(createForwardPostRequestBody: CreateForwardPostRequestBody | undefined = {} as CreateForwardPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("comment", createForwardPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", createForwardPostRequestBody.message, serializeMessage);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", createForwardPostRequestBody.toRecipients, serializeRecipient);
        writer.writeAdditionalData(createForwardPostRequestBody.additionalData);
}
