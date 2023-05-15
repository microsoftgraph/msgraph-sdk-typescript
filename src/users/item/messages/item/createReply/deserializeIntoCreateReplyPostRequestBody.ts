import {createMessageFromDiscriminatorValue} from '../../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../../models/message';
import {serializeMessage} from '../../../../../models/serializeMessage';
import {CreateReplyPostRequestBody} from './createReplyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateReplyPostRequestBody(createReplyPostRequestBody: CreateReplyPostRequestBody | undefined = {} as CreateReplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { createReplyPostRequestBody.comment = n.getStringValue(); },
        "message": n => { createReplyPostRequestBody.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
    }
}
