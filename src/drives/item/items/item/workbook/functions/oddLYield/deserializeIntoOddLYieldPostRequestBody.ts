import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {OddLYieldPostRequestBody} from './oddLYieldPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOddLYieldPostRequestBody(oddLYieldPostRequestBody: OddLYieldPostRequestBody | undefined = {} as OddLYieldPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { oddLYieldPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { oddLYieldPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lastInterest": n => { oddLYieldPostRequestBody.lastInterest = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { oddLYieldPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { oddLYieldPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { oddLYieldPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { oddLYieldPostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { oddLYieldPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
