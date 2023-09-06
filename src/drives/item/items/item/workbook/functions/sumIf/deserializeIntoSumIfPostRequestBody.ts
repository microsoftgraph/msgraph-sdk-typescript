import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SumIfPostRequestBody } from './sumIfPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSumIfPostRequestBody(sumIfPostRequestBody: SumIfPostRequestBody | undefined = {} as SumIfPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { sumIfPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "range": n => { sumIfPostRequestBody.range = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "sumRange": n => { sumIfPostRequestBody.sumRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
