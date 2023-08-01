import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {OddFPricePostRequestBody} from './oddFPricePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOddFPricePostRequestBody(oddFPricePostRequestBody: OddFPricePostRequestBody | undefined = {} as OddFPricePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { oddFPricePostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "firstCoupon": n => { oddFPricePostRequestBody.firstCoupon = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { oddFPricePostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "issue": n => { oddFPricePostRequestBody.issue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { oddFPricePostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { oddFPricePostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { oddFPricePostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { oddFPricePostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { oddFPricePostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
