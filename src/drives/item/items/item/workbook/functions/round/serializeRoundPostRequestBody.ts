import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RoundPostRequestBody } from './roundPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRoundPostRequestBody(writer: SerializationWriter, roundPostRequestBody: RoundPostRequestBody | undefined = {} as RoundPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", roundPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numDigits", roundPostRequestBody.numDigits, serializeJson);
        writer.writeAdditionalData(roundPostRequestBody.additionalData);
}
