import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("name", addPostRequestBody.name);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
