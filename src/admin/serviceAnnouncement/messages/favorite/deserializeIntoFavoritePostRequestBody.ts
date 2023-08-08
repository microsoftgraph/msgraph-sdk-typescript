import type {FavoritePostRequestBody} from './favoritePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFavoritePostRequestBody(favoritePostRequestBody: FavoritePostRequestBody | undefined = {} as FavoritePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { favoritePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
