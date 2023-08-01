import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PricePostRequestBody} from './pricePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePricePostRequestBody(writer: SerializationWriter, pricePostRequestBody: PricePostRequestBody | undefined = {} as PricePostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", pricePostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", pricePostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", pricePostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("rate", pricePostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("redemption", pricePostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", pricePostRequestBody.settlement, serializeJson);
        writer.writeObjectValue<Json>("yld", pricePostRequestBody.yld, serializeJson);
        writer.writeAdditionalData(pricePostRequestBody.additionalData);
}
