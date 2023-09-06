import { type FavoritePostRequestBody } from './favoritePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFavoritePostRequestBody(favoritePostRequestBody: FavoritePostRequestBody | undefined = {} as FavoritePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { favoritePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
