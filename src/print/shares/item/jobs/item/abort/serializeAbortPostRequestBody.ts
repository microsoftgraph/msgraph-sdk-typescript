import type {AbortPostRequestBody} from './abortPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAbortPostRequestBody(writer: SerializationWriter, abortPostRequestBody: AbortPostRequestBody | undefined = {} as AbortPostRequestBody) : void {
        writer.writeStringValue("reason", abortPostRequestBody.reason);
        writer.writeAdditionalData(abortPostRequestBody.additionalData);
}
