import {createMessageFromDiscriminatorValue} from '../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../models/message';
import {serializeMessage} from '../../../../models/serializeMessage';
import {ReplyAllPostRequestBody} from './replyAllPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplyAllPostRequestBody(replyAllPostRequestBody: ReplyAllPostRequestBody | undefined = {} as ReplyAllPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { replyAllPostRequestBody.comment = n.getStringValue(); },
        "message": n => { replyAllPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
    }
}
