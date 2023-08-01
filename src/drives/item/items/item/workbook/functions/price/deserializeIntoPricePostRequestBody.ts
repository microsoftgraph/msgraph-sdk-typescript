import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PricePostRequestBody} from './pricePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPricePostRequestBody(pricePostRequestBody: PricePostRequestBody | undefined = {} as PricePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { pricePostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { pricePostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { pricePostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { pricePostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { pricePostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { pricePostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { pricePostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
