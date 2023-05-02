import {Message} from '../../../models/message';
import {serializeMessage} from '../../../models/serializeMessage';
import {SendMailPostRequestBody} from './sendMailPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSendMailPostRequestBody(writer: SerializationWriter, sendMailPostRequestBody: SendMailPostRequestBody | undefined = {} as SendMailPostRequestBody) : void {
        writer.writeObjectValue<Message>("message", sendMailPostRequestBody.message, serializeMessage);
        writer.writeBooleanValue("saveToSentItems", sendMailPostRequestBody.saveToSentItems);
        writer.writeAdditionalData(sendMailPostRequestBody.additionalData);
}
