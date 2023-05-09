import {FavoritePostRequestBody} from './favoritePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFavoritePostRequestBody(writer: SerializationWriter, favoritePostRequestBody: FavoritePostRequestBody | undefined = {} as FavoritePostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", favoritePostRequestBody.messageIds);
        writer.writeAdditionalData(favoritePostRequestBody.additionalData);
}
