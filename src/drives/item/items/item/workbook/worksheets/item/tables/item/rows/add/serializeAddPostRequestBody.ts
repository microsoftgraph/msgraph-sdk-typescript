import type {Json} from '../../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../../models/serializeJson';
import type {AddPostRequestBody} from './addPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : void {
        writer.writeNumberValue("index", addPostRequestBody.index);
        writer.writeObjectValue<Json>("values", addPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
