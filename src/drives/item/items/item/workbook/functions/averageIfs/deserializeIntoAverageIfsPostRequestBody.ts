import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AverageIfsPostRequestBody } from './averageIfsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageIfsPostRequestBody(averageIfsPostRequestBody: AverageIfsPostRequestBody | undefined = {} as AverageIfsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "averageRange": n => { averageIfsPostRequestBody.averageRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { averageIfsPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
