import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type HypGeom_DistPostRequestBody } from './hypGeom_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoHypGeom_DistPostRequestBody(hypGeom_DistPostRequestBody: HypGeom_DistPostRequestBody | undefined = {} as HypGeom_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { hypGeom_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberPop": n => { hypGeom_DistPostRequestBody.numberPop = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberSample": n => { hypGeom_DistPostRequestBody.numberSample = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "populationS": n => { hypGeom_DistPostRequestBody.populationS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "sampleS": n => { hypGeom_DistPostRequestBody.sampleS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
