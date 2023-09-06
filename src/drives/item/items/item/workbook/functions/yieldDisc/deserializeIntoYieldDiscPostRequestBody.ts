import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type YieldDiscPostRequestBody } from './yieldDiscPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoYieldDiscPostRequestBody(yieldDiscPostRequestBody: YieldDiscPostRequestBody | undefined = {} as YieldDiscPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { yieldDiscPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { yieldDiscPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { yieldDiscPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { yieldDiscPostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { yieldDiscPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
