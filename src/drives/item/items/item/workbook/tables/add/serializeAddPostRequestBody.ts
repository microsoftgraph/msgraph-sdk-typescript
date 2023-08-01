import type {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : void {
        writer.writeStringValue("address", addPostRequestBody.address);
        writer.writeBooleanValue("hasHeaders", addPostRequestBody.hasHeaders);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
