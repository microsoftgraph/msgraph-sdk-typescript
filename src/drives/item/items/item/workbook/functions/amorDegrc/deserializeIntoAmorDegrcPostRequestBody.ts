import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AmorDegrcPostRequestBody} from './amorDegrcPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAmorDegrcPostRequestBody(amorDegrcPostRequestBody: AmorDegrcPostRequestBody | undefined = {} as AmorDegrcPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { amorDegrcPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "cost": n => { amorDegrcPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "datePurchased": n => { amorDegrcPostRequestBody.datePurchased = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "firstPeriod": n => { amorDegrcPostRequestBody.firstPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "period": n => { amorDegrcPostRequestBody.period = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { amorDegrcPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { amorDegrcPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
