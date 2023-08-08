import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {OddFYieldPostRequestBody} from './oddFYieldPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOddFYieldPostRequestBody(oddFYieldPostRequestBody: OddFYieldPostRequestBody | undefined = {} as OddFYieldPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { oddFYieldPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "firstCoupon": n => { oddFYieldPostRequestBody.firstCoupon = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { oddFYieldPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "issue": n => { oddFYieldPostRequestBody.issue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { oddFYieldPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { oddFYieldPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { oddFYieldPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { oddFYieldPostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { oddFYieldPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
