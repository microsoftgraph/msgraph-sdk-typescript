import {FavoriteResponse} from './favoriteResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFavoriteResponse(favoriteResponse: FavoriteResponse | undefined = {} as FavoriteResponse, writer: SerializationWriter) : void {
        writer.writeBooleanValue("value", favoriteResponse.value);
        writer.writeAdditionalData(favoriteResponse.additionalData);
}
