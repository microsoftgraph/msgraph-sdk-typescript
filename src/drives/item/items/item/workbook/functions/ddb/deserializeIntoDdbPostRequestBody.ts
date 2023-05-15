import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DdbPostRequestBody} from './ddbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDdbPostRequestBody(ddbPostRequestBody: DdbPostRequestBody | undefined = {} as DdbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cost": n => { ddbPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "factor": n => { ddbPostRequestBody.factor = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "life": n => { ddbPostRequestBody.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "period": n => { ddbPostRequestBody.period = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { ddbPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
