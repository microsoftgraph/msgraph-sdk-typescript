import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RandBetweenPostRequestBody } from './randBetweenPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRandBetweenPostRequestBody(writer: SerializationWriter, randBetweenPostRequestBody: RandBetweenPostRequestBody | undefined = {} as RandBetweenPostRequestBody) : void {
        writer.writeObjectValue<Json>("bottom", randBetweenPostRequestBody.bottom, serializeJson);
        writer.writeObjectValue<Json>("top", randBetweenPostRequestBody.top, serializeJson);
        writer.writeAdditionalData(randBetweenPostRequestBody.additionalData);
}
