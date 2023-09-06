import { type MarkUnreadPostRequestBody } from './markUnreadPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMarkUnreadPostRequestBody(writer: SerializationWriter, markUnreadPostRequestBody: MarkUnreadPostRequestBody | undefined = {} as MarkUnreadPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", markUnreadPostRequestBody.messageIds);
        writer.writeAdditionalData(markUnreadPostRequestBody.additionalData);
}
