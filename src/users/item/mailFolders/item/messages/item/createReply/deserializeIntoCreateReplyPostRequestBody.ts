import { createMessageFromDiscriminatorValue } from '../../../../../../../models/createMessageFromDiscriminatorValue';
import { type Message } from '../../../../../../../models/message';
import { serializeMessage } from '../../../../../../../models/serializeMessage';
import { type CreateReplyPostRequestBody } from './createReplyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateReplyPostRequestBody(createReplyPostRequestBody: CreateReplyPostRequestBody | undefined = {} as CreateReplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { createReplyPostRequestBody.comment = n.getStringValue(); },
        "message": n => { createReplyPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
    }
}
