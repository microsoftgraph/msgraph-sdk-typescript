import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MedianPostRequestBody } from './medianPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMedianPostRequestBody(medianPostRequestBody: MedianPostRequestBody | undefined = {} as MedianPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { medianPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
