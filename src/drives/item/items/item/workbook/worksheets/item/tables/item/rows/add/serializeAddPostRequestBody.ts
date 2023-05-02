import {Json} from '../../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../../models/serializeJson';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : void {
        writer.writeNumberValue("index", addPostRequestBody.index);
        writer.writeObjectValue<Json>("values", addPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
