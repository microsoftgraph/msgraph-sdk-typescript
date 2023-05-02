import {createMessageFromDiscriminatorValue} from '../../../../../models/createMessageFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from '../../../../../models/createRecipientFromDiscriminatorValue';
import {Message} from '../../../../../models/message';
import {Recipient} from '../../../../../models/recipient';
import {serializeMessage} from '../../../../../models/serializeMessage';
import {serializeRecipient} from '../../../../../models/serializeRecipient';
import {ForwardPostRequestBody} from './forwardPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoForwardPostRequestBody(forwardPostRequestBody: ForwardPostRequestBody | undefined = {} as ForwardPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { forwardPostRequestBody.comment = n.getStringValue(); },
        "message": n => { forwardPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
        "toRecipients": n => { forwardPostRequestBody.toRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
    }
}
