import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {YieldPostRequestBody} from './yieldPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoYieldPostRequestBody(yieldPostRequestBody: YieldPostRequestBody | undefined = {} as YieldPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { yieldPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { yieldPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { yieldPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { yieldPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { yieldPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { yieldPostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { yieldPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
