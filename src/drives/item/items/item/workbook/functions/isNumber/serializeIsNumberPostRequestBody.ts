import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsNumberPostRequestBody} from './isNumberPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsNumberPostRequestBody(isNumberPostRequestBody: IsNumberPostRequestBody | undefined = {} as IsNumberPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("value", isNumberPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isNumberPostRequestBody.additionalData);
}
