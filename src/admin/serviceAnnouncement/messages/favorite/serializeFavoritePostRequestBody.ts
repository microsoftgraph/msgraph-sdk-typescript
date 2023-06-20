import {FavoritePostRequestBody} from './favoritePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFavoritePostRequestBody(favoritePostRequestBody: FavoritePostRequestBody | undefined = {} as FavoritePostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", favoritePostRequestBody.messageIds);
        writer.writeAdditionalData(favoritePostRequestBody.additionalData);
}
