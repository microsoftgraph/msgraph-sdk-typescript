import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {YieldPostRequestBody} from './yieldPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeYieldPostRequestBody(writer: SerializationWriter, yieldPostRequestBody: YieldPostRequestBody | undefined = {} as YieldPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", yieldPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", yieldPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", yieldPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("pr", yieldPostRequestBody.pr, serializeJson);
        writer.writeObjectValue<Json>("rate", yieldPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("redemption", yieldPostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", yieldPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(yieldPostRequestBody.additionalData);
}
