import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Binom_DistPostRequestBody } from './binom_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBinom_DistPostRequestBody(binom_DistPostRequestBody: Binom_DistPostRequestBody | undefined = {} as Binom_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { binom_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberS": n => { binom_DistPostRequestBody.numberS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probabilityS": n => { binom_DistPostRequestBody.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "trials": n => { binom_DistPostRequestBody.trials = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
