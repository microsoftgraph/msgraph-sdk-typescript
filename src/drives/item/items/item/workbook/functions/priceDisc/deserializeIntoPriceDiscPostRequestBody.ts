import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PriceDiscPostRequestBody} from './priceDiscPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPriceDiscPostRequestBody(priceDiscPostRequestBody: PriceDiscPostRequestBody | undefined = {} as PriceDiscPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { priceDiscPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "discount": n => { priceDiscPostRequestBody.discount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { priceDiscPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { priceDiscPostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { priceDiscPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
