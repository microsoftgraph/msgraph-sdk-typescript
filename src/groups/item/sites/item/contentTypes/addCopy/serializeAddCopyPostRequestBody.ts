import {AddCopyPostRequestBody} from './addCopyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddCopyPostRequestBody(addCopyPostRequestBody: AddCopyPostRequestBody | undefined = {} as AddCopyPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("contentType", addCopyPostRequestBody.contentType);
        writer.writeAdditionalData(addCopyPostRequestBody.additionalData);
}
