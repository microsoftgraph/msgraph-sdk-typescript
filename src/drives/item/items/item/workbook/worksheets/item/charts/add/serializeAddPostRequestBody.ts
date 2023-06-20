import {Json} from '../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../models/serializeJson';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("seriesBy", addPostRequestBody.seriesBy);
        writer.writeObjectValue<Json>("sourceData", addPostRequestBody.sourceData, serializeJson);
        writer.writeStringValue("type", addPostRequestBody.type);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
