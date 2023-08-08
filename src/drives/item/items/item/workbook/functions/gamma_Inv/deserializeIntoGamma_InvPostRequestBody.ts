import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Gamma_InvPostRequestBody} from './gamma_InvPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGamma_InvPostRequestBody(gamma_InvPostRequestBody: Gamma_InvPostRequestBody | undefined = {} as Gamma_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { gamma_InvPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "beta": n => { gamma_InvPostRequestBody.beta = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { gamma_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
