import type {UnfavoritePostRequestBody} from './unfavoritePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnfavoritePostRequestBody(writer: SerializationWriter, unfavoritePostRequestBody: UnfavoritePostRequestBody | undefined = {} as UnfavoritePostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", unfavoritePostRequestBody.messageIds);
        writer.writeAdditionalData(unfavoritePostRequestBody.additionalData);
}
