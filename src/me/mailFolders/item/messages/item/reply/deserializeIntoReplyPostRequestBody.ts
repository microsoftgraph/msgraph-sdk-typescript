import { createMessageFromDiscriminatorValue } from '../../../../../../models/createMessageFromDiscriminatorValue';
import { type Message } from '../../../../../../models/message';
import { serializeMessage } from '../../../../../../models/serializeMessage';
import { type ReplyPostRequestBody } from './replyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoReplyPostRequestBody(replyPostRequestBody: ReplyPostRequestBody | undefined = {} as ReplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { replyPostRequestBody.comment = n.getStringValue(); },
        "message": n => { replyPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
    }
}
