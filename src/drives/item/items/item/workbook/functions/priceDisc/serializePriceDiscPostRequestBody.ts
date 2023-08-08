import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PriceDiscPostRequestBody} from './priceDiscPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePriceDiscPostRequestBody(writer: SerializationWriter, priceDiscPostRequestBody: PriceDiscPostRequestBody | undefined = {} as PriceDiscPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", priceDiscPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("discount", priceDiscPostRequestBody.discount, serializeJson);
        writer.writeObjectValue<Json>("maturity", priceDiscPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("redemption", priceDiscPostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", priceDiscPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(priceDiscPostRequestBody.additionalData);
}
