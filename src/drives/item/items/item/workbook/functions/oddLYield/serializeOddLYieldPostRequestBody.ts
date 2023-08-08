import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {OddLYieldPostRequestBody} from './oddLYieldPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOddLYieldPostRequestBody(writer: SerializationWriter, oddLYieldPostRequestBody: OddLYieldPostRequestBody | undefined = {} as OddLYieldPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", oddLYieldPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", oddLYieldPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("lastInterest", oddLYieldPostRequestBody.lastInterest, serializeJson);
        writer.writeObjectValue<Json>("maturity", oddLYieldPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("pr", oddLYieldPostRequestBody.pr, serializeJson);
        writer.writeObjectValue<Json>("rate", oddLYieldPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("redemption", oddLYieldPostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", oddLYieldPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(oddLYieldPostRequestBody.additionalData);
}
