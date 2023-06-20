import {CancelPostRequestBody} from './cancelPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCancelPostRequestBody(cancelPostRequestBody: CancelPostRequestBody | undefined = {} as CancelPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("cancellationMessage", cancelPostRequestBody.cancellationMessage);
        writer.writeAdditionalData(cancelPostRequestBody.additionalData);
}
