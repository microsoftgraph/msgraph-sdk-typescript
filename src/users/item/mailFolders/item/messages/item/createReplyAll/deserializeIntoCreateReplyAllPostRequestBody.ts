import { createMessageFromDiscriminatorValue } from '../../../../../../../models/createMessageFromDiscriminatorValue';
import { type Message } from '../../../../../../../models/message';
import { serializeMessage } from '../../../../../../../models/serializeMessage';
import { type CreateReplyAllPostRequestBody } from './createReplyAllPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateReplyAllPostRequestBody(createReplyAllPostRequestBody: CreateReplyAllPostRequestBody | undefined = {} as CreateReplyAllPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { createReplyAllPostRequestBody.comment = n.getStringValue(); },
        "message": n => { createReplyAllPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
    }
}
