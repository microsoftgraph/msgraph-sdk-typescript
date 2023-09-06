import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Confidence_TPostRequestBody } from './confidence_TPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConfidence_TPostRequestBody(writer: SerializationWriter, confidence_TPostRequestBody: Confidence_TPostRequestBody | undefined = {} as Confidence_TPostRequestBody) : void {
        writer.writeObjectValue<Json>("alpha", confidence_TPostRequestBody.alpha, serializeJson);
        writer.writeObjectValue<Json>("size", confidence_TPostRequestBody.size, serializeJson);
        writer.writeObjectValue<Json>("standardDev", confidence_TPostRequestBody.standardDev, serializeJson);
        writer.writeAdditionalData(confidence_TPostRequestBody.additionalData);
}
