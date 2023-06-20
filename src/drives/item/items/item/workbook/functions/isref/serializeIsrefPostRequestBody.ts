import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsrefPostRequestBody} from './isrefPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsrefPostRequestBody(isrefPostRequestBody: IsrefPostRequestBody | undefined = {} as IsrefPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("value", isrefPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isrefPostRequestBody.additionalData);
}
