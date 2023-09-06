import { type AddCopyPostRequestBody } from './addCopyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddCopyPostRequestBody(writer: SerializationWriter, addCopyPostRequestBody: AddCopyPostRequestBody | undefined = {} as AddCopyPostRequestBody) : void {
        writer.writeStringValue("contentType", addCopyPostRequestBody.contentType);
        writer.writeAdditionalData(addCopyPostRequestBody.additionalData);
}
