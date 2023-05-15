import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AmorLincPostRequestBody} from './amorLincPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAmorLincPostRequestBody(amorLincPostRequestBody: AmorLincPostRequestBody | undefined = {} as AmorLincPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { amorLincPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "cost": n => { amorLincPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "datePurchased": n => { amorLincPostRequestBody.datePurchased = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "firstPeriod": n => { amorLincPostRequestBody.firstPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "period": n => { amorLincPostRequestBody.period = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { amorLincPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { amorLincPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
