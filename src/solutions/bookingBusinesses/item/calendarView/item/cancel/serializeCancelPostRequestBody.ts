import { type CancelPostRequestBody } from './cancelPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCancelPostRequestBody(writer: SerializationWriter, cancelPostRequestBody: CancelPostRequestBody | undefined = {} as CancelPostRequestBody) : void {
        writer.writeStringValue("cancellationMessage", cancelPostRequestBody.cancellationMessage);
        writer.writeAdditionalData(cancelPostRequestBody.additionalData);
}
