import {Json} from '../../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../../models/serializeJson';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody, writer: SerializationWriter) : void {
        writer.writeNumberValue("index", addPostRequestBody.index);
        writer.writeStringValue("name", addPostRequestBody.name);
        writer.writeObjectValue<Json>("values", addPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
