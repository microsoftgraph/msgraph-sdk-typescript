import {FavoriteResponse} from './favoriteResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFavoriteResponse(favoriteResponse: FavoriteResponse | undefined = {} as FavoriteResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { favoriteResponse.value = n.getBooleanValue(); },
    }
}
