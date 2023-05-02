import {MarkUnreadPostRequestBody} from './markUnreadPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkUnreadPostRequestBody(markUnreadPostRequestBody: MarkUnreadPostRequestBody | undefined = {} as MarkUnreadPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { markUnreadPostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
