import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Confidence_NormPostRequestBody } from './confidence_NormPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConfidence_NormPostRequestBody(confidence_NormPostRequestBody: Confidence_NormPostRequestBody | undefined = {} as Confidence_NormPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { confidence_NormPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "size": n => { confidence_NormPostRequestBody.size = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { confidence_NormPostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
