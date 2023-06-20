import {MarkUnreadPostRequestBody} from './markUnreadPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkUnreadPostRequestBody(markUnreadPostRequestBody: MarkUnreadPostRequestBody | undefined = {} as MarkUnreadPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", markUnreadPostRequestBody.messageIds);
        writer.writeAdditionalData(markUnreadPostRequestBody.additionalData);
}
