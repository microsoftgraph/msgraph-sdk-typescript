import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RoundUpPostRequestBody } from './roundUpPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRoundUpPostRequestBody(writer: SerializationWriter, roundUpPostRequestBody: RoundUpPostRequestBody | undefined = {} as RoundUpPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", roundUpPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numDigits", roundUpPostRequestBody.numDigits, serializeJson);
        writer.writeAdditionalData(roundUpPostRequestBody.additionalData);
}
