import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {OddFPricePostRequestBody} from './oddFPricePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOddFPricePostRequestBody(writer: SerializationWriter, oddFPricePostRequestBody: OddFPricePostRequestBody | undefined = {} as OddFPricePostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", oddFPricePostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("firstCoupon", oddFPricePostRequestBody.firstCoupon, serializeJson);
        writer.writeObjectValue<Json>("frequency", oddFPricePostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("issue", oddFPricePostRequestBody.issue, serializeJson);
        writer.writeObjectValue<Json>("maturity", oddFPricePostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("rate", oddFPricePostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("redemption", oddFPricePostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", oddFPricePostRequestBody.settlement, serializeJson);
        writer.writeObjectValue<Json>("yld", oddFPricePostRequestBody.yld, serializeJson);
        writer.writeAdditionalData(oddFPricePostRequestBody.additionalData);
}
