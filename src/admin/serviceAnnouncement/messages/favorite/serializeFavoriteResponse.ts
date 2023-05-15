import {FavoriteResponse} from './favoriteResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFavoriteResponse(writer: SerializationWriter, favoriteResponse: FavoriteResponse | undefined = {} as FavoriteResponse) : void {
        writer.writeBooleanValue("value", favoriteResponse.value);
        writer.writeAdditionalData(favoriteResponse.additionalData);
}
