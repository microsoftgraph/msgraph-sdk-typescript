import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Binom_InvPostRequestBody } from './binom_InvPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBinom_InvPostRequestBody(binom_InvPostRequestBody: Binom_InvPostRequestBody | undefined = {} as Binom_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { binom_InvPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probabilityS": n => { binom_InvPostRequestBody.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "trials": n => { binom_InvPostRequestBody.trials = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
