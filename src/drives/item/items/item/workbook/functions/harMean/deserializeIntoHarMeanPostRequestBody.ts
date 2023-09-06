import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type HarMeanPostRequestBody } from './harMeanPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoHarMeanPostRequestBody(harMeanPostRequestBody: HarMeanPostRequestBody | undefined = {} as HarMeanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { harMeanPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
