import type {MarkReadPostRequestBody} from './markReadPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkReadPostRequestBody(writer: SerializationWriter, markReadPostRequestBody: MarkReadPostRequestBody | undefined = {} as MarkReadPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", markReadPostRequestBody.messageIds);
        writer.writeAdditionalData(markReadPostRequestBody.additionalData);
}
