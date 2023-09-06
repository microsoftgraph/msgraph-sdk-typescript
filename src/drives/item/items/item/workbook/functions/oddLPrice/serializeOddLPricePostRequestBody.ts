import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type OddLPricePostRequestBody } from './oddLPricePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOddLPricePostRequestBody(writer: SerializationWriter, oddLPricePostRequestBody: OddLPricePostRequestBody | undefined = {} as OddLPricePostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", oddLPricePostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", oddLPricePostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("lastInterest", oddLPricePostRequestBody.lastInterest, serializeJson);
        writer.writeObjectValue<Json>("maturity", oddLPricePostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("rate", oddLPricePostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("redemption", oddLPricePostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", oddLPricePostRequestBody.settlement, serializeJson);
        writer.writeObjectValue<Json>("yld", oddLPricePostRequestBody.yld, serializeJson);
        writer.writeAdditionalData(oddLPricePostRequestBody.additionalData);
}
