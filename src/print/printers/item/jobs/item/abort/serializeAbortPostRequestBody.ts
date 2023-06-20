import {AbortPostRequestBody} from './abortPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAbortPostRequestBody(abortPostRequestBody: AbortPostRequestBody | undefined = {} as AbortPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("reason", abortPostRequestBody.reason);
        writer.writeAdditionalData(abortPostRequestBody.additionalData);
}
