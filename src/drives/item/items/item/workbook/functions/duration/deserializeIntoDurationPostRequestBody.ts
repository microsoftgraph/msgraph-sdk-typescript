import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DurationPostRequestBody } from './durationPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDurationPostRequestBody(durationPostRequestBody: DurationPostRequestBody | undefined = {} as DurationPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { durationPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "coupon": n => { durationPostRequestBody.coupon = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { durationPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { durationPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { durationPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { durationPostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
