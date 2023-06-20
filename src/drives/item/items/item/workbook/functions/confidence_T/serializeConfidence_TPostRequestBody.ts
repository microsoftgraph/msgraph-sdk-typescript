import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Confidence_TPostRequestBody} from './confidence_TPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfidence_TPostRequestBody(confidence_TPostRequestBody: Confidence_TPostRequestBody | undefined = {} as Confidence_TPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("alpha", confidence_TPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("size", confidence_TPostRequestBody.size, serializeJson);
        writer.writeObjectValue<Json>("standardDev", confidence_TPostRequestBody.standardDev, serializeJson);
        writer.writeAdditionalData(confidence_TPostRequestBody.additionalData);
}
