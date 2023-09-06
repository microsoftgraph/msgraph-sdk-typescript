import { type UnfavoritePostRequestBody } from './unfavoritePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnfavoritePostRequestBody(writer: SerializationWriter, unfavoritePostRequestBody: UnfavoritePostRequestBody | undefined = {} as UnfavoritePostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", unfavoritePostRequestBody.messageIds);
        writer.writeAdditionalData(unfavoritePostRequestBody.additionalData);
}
