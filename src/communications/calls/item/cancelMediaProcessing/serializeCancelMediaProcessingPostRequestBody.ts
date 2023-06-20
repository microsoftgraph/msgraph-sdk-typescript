import {CancelMediaProcessingPostRequestBody} from './cancelMediaProcessingPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCancelMediaProcessingPostRequestBody(cancelMediaProcessingPostRequestBody: CancelMediaProcessingPostRequestBody | undefined = {} as CancelMediaProcessingPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("clientContext", cancelMediaProcessingPostRequestBody.clientContext);
        writer.writeAdditionalData(cancelMediaProcessingPostRequestBody.additionalData);
}
