import {createMessageFromDiscriminatorValue} from '../../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../../models/message';
import {serializeMessage} from '../../../../../models/serializeMessage';
import {ReplyPostRequestBody} from './replyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplyPostRequestBody(replyPostRequestBody: ReplyPostRequestBody | undefined = {} as ReplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { replyPostRequestBody.comment = n.getStringValue(); },
        "message": n => { replyPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
    }
}
