import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AverageAPostRequestBody } from './averageAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageAPostRequestBody(averageAPostRequestBody: AverageAPostRequestBody | undefined = {} as AverageAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { averageAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
