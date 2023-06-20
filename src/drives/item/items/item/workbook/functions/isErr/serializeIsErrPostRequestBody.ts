import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsErrPostRequestBody} from './isErrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsErrPostRequestBody(isErrPostRequestBody: IsErrPostRequestBody | undefined = {} as IsErrPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("value", isErrPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isErrPostRequestBody.additionalData);
}
