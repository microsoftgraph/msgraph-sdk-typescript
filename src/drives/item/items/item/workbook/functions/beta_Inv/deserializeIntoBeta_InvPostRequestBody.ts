import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Beta_InvPostRequestBody} from './beta_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBeta_InvPostRequestBody(beta_InvPostRequestBody: Beta_InvPostRequestBody | undefined = {} as Beta_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "a": n => { beta_InvPostRequestBody.a = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "alpha": n => { beta_InvPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "b": n => { beta_InvPostRequestBody.b = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "beta": n => { beta_InvPostRequestBody.beta = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { beta_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
