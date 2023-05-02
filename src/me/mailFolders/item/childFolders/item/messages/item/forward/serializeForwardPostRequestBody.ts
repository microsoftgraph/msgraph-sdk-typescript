import {Message} from '../../../../../../../../models/message';
import {Recipient} from '../../../../../../../../models/recipient';
import {serializeMessage} from '../../../../../../../../models/serializeMessage';
import {serializeRecipient} from '../../../../../../../../models/serializeRecipient';
import {ForwardPostRequestBody} from './forwardPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeForwardPostRequestBody(writer: SerializationWriter, forwardPostRequestBody: ForwardPostRequestBody | undefined = {} as ForwardPostRequestBody) : void {
        writer.writeStringValue("comment", forwardPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", forwardPostRequestBody.message, serializeMessage);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", forwardPostRequestBody.toRecipients, serializeRecipient);
        writer.writeAdditionalData(forwardPostRequestBody.additionalData);
}
