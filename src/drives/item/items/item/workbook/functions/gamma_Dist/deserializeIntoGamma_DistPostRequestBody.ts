import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Gamma_DistPostRequestBody} from './gamma_DistPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGamma_DistPostRequestBody(gamma_DistPostRequestBody: Gamma_DistPostRequestBody | undefined = {} as Gamma_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { gamma_DistPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "beta": n => { gamma_DistPostRequestBody.beta = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "cumulative": n => { gamma_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { gamma_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
