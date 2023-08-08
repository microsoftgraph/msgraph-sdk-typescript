import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Confidence_NormPostRequestBody} from './confidence_NormPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfidence_NormPostRequestBody(writer: SerializationWriter, confidence_NormPostRequestBody: Confidence_NormPostRequestBody | undefined = {} as Confidence_NormPostRequestBody) : void {
        writer.writeObjectValue<Json>("alpha", confidence_NormPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("size", confidence_NormPostRequestBody.size, serializeJson);
        writer.writeObjectValue<Json>("standardDev", confidence_NormPostRequestBody.standardDev, serializeJson);
        writer.writeAdditionalData(confidence_NormPostRequestBody.additionalData);
}
