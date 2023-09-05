import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AccrIntPostRequestBody } from './accrIntPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccrIntPostRequestBody(accrIntPostRequestBody: AccrIntPostRequestBody | undefined = {} as AccrIntPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { accrIntPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "calcMethod": n => { accrIntPostRequestBody.calcMethod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "firstInterest": n => { accrIntPostRequestBody.firstInterest = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { accrIntPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "issue": n => { accrIntPostRequestBody.issue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "par": n => { accrIntPostRequestBody.par = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { accrIntPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { accrIntPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
