import {CopyPostRequestBody} from './copyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyPostRequestBody(copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("destinationId", copyPostRequestBody.destinationId);
        writer.writeAdditionalData(copyPostRequestBody.additionalData);
}
