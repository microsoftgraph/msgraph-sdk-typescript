import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : void {
        writer.writeStringValue("comment", addPostRequestBody.comment);
        writer.writeStringValue("name", addPostRequestBody.name);
        writer.writeObjectValue<Json>("reference", addPostRequestBody.reference, serializeJson);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
