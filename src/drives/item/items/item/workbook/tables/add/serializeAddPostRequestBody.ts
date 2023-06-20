import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("address", addPostRequestBody.address);
        writer.writeBooleanValue("hasHeaders", addPostRequestBody.hasHeaders);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
