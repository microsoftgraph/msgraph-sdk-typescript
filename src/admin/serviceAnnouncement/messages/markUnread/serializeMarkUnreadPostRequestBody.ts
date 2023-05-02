import {MarkUnreadPostRequestBody} from './markUnreadPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkUnreadPostRequestBody(writer: SerializationWriter, markUnreadPostRequestBody: MarkUnreadPostRequestBody | undefined = {} as MarkUnreadPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", markUnreadPostRequestBody.messageIds);
        writer.writeAdditionalData(markUnreadPostRequestBody.additionalData);
}
