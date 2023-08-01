import {createMessageFromDiscriminatorValue} from '../../../../../../../../../models/createMessageFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from '../../../../../../../../../models/createRecipientFromDiscriminatorValue';
import type {Message} from '../../../../../../../../../models/message';
import type {Recipient} from '../../../../../../../../../models/recipient';
import {serializeMessage} from '../../../../../../../../../models/serializeMessage';
import {serializeRecipient} from '../../../../../../../../../models/serializeRecipient';
import type {CreateForwardPostRequestBody} from './createForwardPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateForwardPostRequestBody(createForwardPostRequestBody: CreateForwardPostRequestBody | undefined = {} as CreateForwardPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { createForwardPostRequestBody.comment = n.getStringValue(); },
        "message": n => { createForwardPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
        "toRecipients": n => { createForwardPostRequestBody.toRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
    }
}
