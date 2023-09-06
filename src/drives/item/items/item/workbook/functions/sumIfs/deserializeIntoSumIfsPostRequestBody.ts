import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SumIfsPostRequestBody } from './sumIfsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSumIfsPostRequestBody(sumIfsPostRequestBody: SumIfsPostRequestBody | undefined = {} as SumIfsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "sumRange": n => { sumIfsPostRequestBody.sumRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { sumIfsPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
