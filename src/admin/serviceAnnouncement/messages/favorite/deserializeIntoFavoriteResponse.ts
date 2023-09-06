import { type FavoriteResponse } from './favoriteResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFavoriteResponse(favoriteResponse: FavoriteResponse | undefined = {} as FavoriteResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { favoriteResponse.value = n.getBooleanValue(); },
    }
}
