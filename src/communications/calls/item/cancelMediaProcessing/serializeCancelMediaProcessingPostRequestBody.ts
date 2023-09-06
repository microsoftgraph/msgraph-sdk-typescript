import { type CancelMediaProcessingPostRequestBody } from './cancelMediaProcessingPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCancelMediaProcessingPostRequestBody(writer: SerializationWriter, cancelMediaProcessingPostRequestBody: CancelMediaProcessingPostRequestBody | undefined = {} as CancelMediaProcessingPostRequestBody) : void {
        writer.writeStringValue("clientContext", cancelMediaProcessingPostRequestBody.clientContext);
        writer.writeAdditionalData(cancelMediaProcessingPostRequestBody.additionalData);
}
