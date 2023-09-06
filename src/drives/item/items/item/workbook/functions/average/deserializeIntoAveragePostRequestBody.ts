import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AveragePostRequestBody } from './averagePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAveragePostRequestBody(averagePostRequestBody: AveragePostRequestBody | undefined = {} as AveragePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { averagePostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
