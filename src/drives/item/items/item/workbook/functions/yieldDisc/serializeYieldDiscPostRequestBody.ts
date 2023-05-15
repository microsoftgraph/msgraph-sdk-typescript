import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {YieldDiscPostRequestBody} from './yieldDiscPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeYieldDiscPostRequestBody(writer: SerializationWriter, yieldDiscPostRequestBody: YieldDiscPostRequestBody | undefined = {} as YieldDiscPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", yieldDiscPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("maturity", yieldDiscPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("pr", yieldDiscPostRequestBody.pr, serializeJson);
        writer.writeObjectValue<Json>("redemption", yieldDiscPostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", yieldDiscPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(yieldDiscPostRequestBody.additionalData);
}
