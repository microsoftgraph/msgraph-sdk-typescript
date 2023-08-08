import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {YieldMatPostRequestBody} from './yieldMatPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeYieldMatPostRequestBody(writer: SerializationWriter, yieldMatPostRequestBody: YieldMatPostRequestBody | undefined = {} as YieldMatPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", yieldMatPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("issue", yieldMatPostRequestBody.issue, serializeJson);
        writer.writeObjectValue<Json>("maturity", yieldMatPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("pr", yieldMatPostRequestBody.pr, serializeJson);
        writer.writeObjectValue<Json>("rate", yieldMatPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("settlement", yieldMatPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(yieldMatPostRequestBody.additionalData);
}
