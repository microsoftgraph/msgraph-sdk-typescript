import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IntRatePostRequestBody} from './intRatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntRatePostRequestBody(writer: SerializationWriter, intRatePostRequestBody: IntRatePostRequestBody | undefined = {} as IntRatePostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", intRatePostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("investment", intRatePostRequestBody.investment, serializeJson);
        writer.writeObjectValue<Json>("maturity", intRatePostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("redemption", intRatePostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", intRatePostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(intRatePostRequestBody.additionalData);
}
