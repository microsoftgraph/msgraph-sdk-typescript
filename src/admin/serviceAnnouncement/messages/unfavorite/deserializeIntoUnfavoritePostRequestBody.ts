import {UnfavoritePostRequestBody} from './unfavoritePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnfavoritePostRequestBody(unfavoritePostRequestBody: UnfavoritePostRequestBody | undefined = {} as UnfavoritePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { unfavoritePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
