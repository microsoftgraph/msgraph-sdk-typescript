import { type MarkReadPostRequestBody } from './markReadPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMarkReadPostRequestBody(writer: SerializationWriter, markReadPostRequestBody: MarkReadPostRequestBody | undefined = {} as MarkReadPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", markReadPostRequestBody.messageIds);
        writer.writeAdditionalData(markReadPostRequestBody.additionalData);
}
