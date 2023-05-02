import {AddCopyPostRequestBody} from './addCopyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddCopyPostRequestBody(writer: SerializationWriter, addCopyPostRequestBody: AddCopyPostRequestBody | undefined = {} as AddCopyPostRequestBody) : void {
        writer.writeStringValue("contentType", addCopyPostRequestBody.contentType);
        writer.writeAdditionalData(addCopyPostRequestBody.additionalData);
}
