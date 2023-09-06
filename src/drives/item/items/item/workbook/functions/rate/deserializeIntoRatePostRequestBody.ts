import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RatePostRequestBody } from './ratePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRatePostRequestBody(ratePostRequestBody: RatePostRequestBody | undefined = {} as RatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { ratePostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "guess": n => { ratePostRequestBody.guess = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { ratePostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pmt": n => { ratePostRequestBody.pmt = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { ratePostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { ratePostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
