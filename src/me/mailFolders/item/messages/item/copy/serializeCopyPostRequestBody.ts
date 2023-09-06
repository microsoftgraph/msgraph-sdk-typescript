import { type CopyPostRequestBody } from './copyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCopyPostRequestBody(writer: SerializationWriter, copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody) : void {
        writer.writeStringValue("destinationId", copyPostRequestBody.destinationId);
        writer.writeAdditionalData(copyPostRequestBody.additionalData);
}
