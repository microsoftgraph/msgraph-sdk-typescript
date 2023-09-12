import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Beta_DistPostRequestBody } from './beta_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBeta_DistPostRequestBody(beta_DistPostRequestBody: Beta_DistPostRequestBody | undefined = {} as Beta_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "a": n => { beta_DistPostRequestBody.a = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "alpha": n => { beta_DistPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "b": n => { beta_DistPostRequestBody.b = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "beta": n => { beta_DistPostRequestBody.beta = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "cumulative": n => { beta_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { beta_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
