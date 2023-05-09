import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {OddLPricePostRequestBody} from './oddLPricePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOddLPricePostRequestBody(oddLPricePostRequestBody: OddLPricePostRequestBody | undefined = {} as OddLPricePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { oddLPricePostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { oddLPricePostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lastInterest": n => { oddLPricePostRequestBody.lastInterest = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { oddLPricePostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { oddLPricePostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { oddLPricePostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { oddLPricePostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { oddLPricePostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
