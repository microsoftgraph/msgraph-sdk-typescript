import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type PriceDiscPostRequestBody } from './priceDiscPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPriceDiscPostRequestBody(priceDiscPostRequestBody: PriceDiscPostRequestBody | undefined = {} as PriceDiscPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { priceDiscPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "discount": n => { priceDiscPostRequestBody.discount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { priceDiscPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { priceDiscPostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { priceDiscPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
