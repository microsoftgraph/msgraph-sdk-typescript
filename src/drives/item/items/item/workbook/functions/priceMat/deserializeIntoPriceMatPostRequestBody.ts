import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type PriceMatPostRequestBody } from './priceMatPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPriceMatPostRequestBody(priceMatPostRequestBody: PriceMatPostRequestBody | undefined = {} as PriceMatPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { priceMatPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "issue": n => { priceMatPostRequestBody.issue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { priceMatPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { priceMatPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { priceMatPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { priceMatPostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
