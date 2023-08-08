import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AccrIntPostRequestBody} from './accrIntPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccrIntPostRequestBody(writer: SerializationWriter, accrIntPostRequestBody: AccrIntPostRequestBody | undefined = {} as AccrIntPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", accrIntPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("calcMethod", accrIntPostRequestBody.calcMethod, serializeJson);
        writer.writeObjectValue<Json>("firstInterest", accrIntPostRequestBody.firstInterest, serializeJson);
        writer.writeObjectValue<Json>("frequency", accrIntPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("issue", accrIntPostRequestBody.issue, serializeJson);
        writer.writeObjectValue<Json>("par", accrIntPostRequestBody.par, serializeJson);
        writer.writeObjectValue<Json>("rate", accrIntPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("settlement", accrIntPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(accrIntPostRequestBody.additionalData);
}
