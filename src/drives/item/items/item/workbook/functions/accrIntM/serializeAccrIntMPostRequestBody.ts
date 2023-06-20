import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AccrIntMPostRequestBody} from './accrIntMPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccrIntMPostRequestBody(accrIntMPostRequestBody: AccrIntMPostRequestBody | undefined = {} as AccrIntMPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("basis", accrIntMPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("issue", accrIntMPostRequestBody.issue, serializeJson);
        writer.writeObjectValue<Json>("par", accrIntMPostRequestBody.par, serializeJson);
        writer.writeObjectValue<Json>("rate", accrIntMPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("settlement", accrIntMPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(accrIntMPostRequestBody.additionalData);
}
