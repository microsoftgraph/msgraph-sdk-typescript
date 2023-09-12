import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type NegBinom_DistPostRequestBody } from './negBinom_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNegBinom_DistPostRequestBody(negBinom_DistPostRequestBody: NegBinom_DistPostRequestBody | undefined = {} as NegBinom_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { negBinom_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberF": n => { negBinom_DistPostRequestBody.numberF = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberS": n => { negBinom_DistPostRequestBody.numberS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probabilityS": n => { negBinom_DistPostRequestBody.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
