import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Poisson_DistPostRequestBody } from './poisson_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPoisson_DistPostRequestBody(poisson_DistPostRequestBody: Poisson_DistPostRequestBody | undefined = {} as Poisson_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { poisson_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "mean": n => { poisson_DistPostRequestBody.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { poisson_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
