import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {OddFYieldPostRequestBody} from './oddFYieldPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOddFYieldPostRequestBody(writer: SerializationWriter, oddFYieldPostRequestBody: OddFYieldPostRequestBody | undefined = {} as OddFYieldPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", oddFYieldPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("firstCoupon", oddFYieldPostRequestBody.firstCoupon, serializeJson);
        writer.writeObjectValue<Json>("frequency", oddFYieldPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("issue", oddFYieldPostRequestBody.issue, serializeJson);
        writer.writeObjectValue<Json>("maturity", oddFYieldPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("pr", oddFYieldPostRequestBody.pr, serializeJson);
        writer.writeObjectValue<Json>("rate", oddFYieldPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("redemption", oddFYieldPostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", oddFYieldPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(oddFYieldPostRequestBody.additionalData);
}
