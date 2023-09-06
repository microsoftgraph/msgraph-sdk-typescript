import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TrimMeanPostRequestBody } from './trimMeanPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTrimMeanPostRequestBody(trimMeanPostRequestBody: TrimMeanPostRequestBody | undefined = {} as TrimMeanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { trimMeanPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "percent": n => { trimMeanPostRequestBody.percent = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
