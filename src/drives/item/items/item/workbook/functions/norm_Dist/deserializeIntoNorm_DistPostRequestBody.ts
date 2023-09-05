import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Norm_DistPostRequestBody } from './norm_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNorm_DistPostRequestBody(norm_DistPostRequestBody: Norm_DistPostRequestBody | undefined = {} as Norm_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { norm_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "mean": n => { norm_DistPostRequestBody.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { norm_DistPostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { norm_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
