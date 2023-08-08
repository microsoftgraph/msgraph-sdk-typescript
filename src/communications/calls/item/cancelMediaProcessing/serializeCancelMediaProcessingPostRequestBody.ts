import type {CancelMediaProcessingPostRequestBody} from './cancelMediaProcessingPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCancelMediaProcessingPostRequestBody(writer: SerializationWriter, cancelMediaProcessingPostRequestBody: CancelMediaProcessingPostRequestBody | undefined = {} as CancelMediaProcessingPostRequestBody) : void {
        writer.writeStringValue("clientContext", cancelMediaProcessingPostRequestBody.clientContext);
        writer.writeAdditionalData(cancelMediaProcessingPostRequestBody.additionalData);
}
