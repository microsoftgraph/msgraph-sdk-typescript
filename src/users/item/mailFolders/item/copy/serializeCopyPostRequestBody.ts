import {CopyPostRequestBody} from './copyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyPostRequestBody(writer: SerializationWriter, copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody) : void {
        writer.writeStringValue("destinationId", copyPostRequestBody.destinationId);
        writer.writeAdditionalData(copyPostRequestBody.additionalData);
}
