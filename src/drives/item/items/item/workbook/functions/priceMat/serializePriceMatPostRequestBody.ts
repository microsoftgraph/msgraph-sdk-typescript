import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PriceMatPostRequestBody} from './priceMatPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePriceMatPostRequestBody(writer: SerializationWriter, priceMatPostRequestBody: PriceMatPostRequestBody | undefined = {} as PriceMatPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", priceMatPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("issue", priceMatPostRequestBody.issue, serializeJson);
        writer.writeObjectValue<Json>("maturity", priceMatPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("rate", priceMatPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("settlement", priceMatPostRequestBody.settlement, serializeJson);
        writer.writeObjectValue<Json>("yld", priceMatPostRequestBody.yld, serializeJson);
        writer.writeAdditionalData(priceMatPostRequestBody.additionalData);
}
