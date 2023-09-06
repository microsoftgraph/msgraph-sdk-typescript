import { createMessageFromDiscriminatorValue } from '../../../models/createMessageFromDiscriminatorValue';
import { type Message } from '../../../models/message';
import { serializeMessage } from '../../../models/serializeMessage';
import { type SendMailPostRequestBody } from './sendMailPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSendMailPostRequestBody(sendMailPostRequestBody: SendMailPostRequestBody | undefined = {} as SendMailPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { sendMailPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
        "saveToSentItems": n => { sendMailPostRequestBody.saveToSentItems = n.getBooleanValue(); },
    }
}
