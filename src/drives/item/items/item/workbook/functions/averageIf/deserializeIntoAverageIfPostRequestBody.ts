import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AverageIfPostRequestBody } from './averageIfPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageIfPostRequestBody(averageIfPostRequestBody: AverageIfPostRequestBody | undefined = {} as AverageIfPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "averageRange": n => { averageIfPostRequestBody.averageRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "criteria": n => { averageIfPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "range": n => { averageIfPostRequestBody.range = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
