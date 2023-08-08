import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AccrIntMPostRequestBody} from './accrIntMPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccrIntMPostRequestBody(accrIntMPostRequestBody: AccrIntMPostRequestBody | undefined = {} as AccrIntMPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { accrIntMPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "issue": n => { accrIntMPostRequestBody.issue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "par": n => { accrIntMPostRequestBody.par = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { accrIntMPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { accrIntMPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
