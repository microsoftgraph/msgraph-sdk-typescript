import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type YieldMatPostRequestBody } from './yieldMatPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoYieldMatPostRequestBody(yieldMatPostRequestBody: YieldMatPostRequestBody | undefined = {} as YieldMatPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { yieldMatPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "issue": n => { yieldMatPostRequestBody.issue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { yieldMatPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { yieldMatPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { yieldMatPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { yieldMatPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
