import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {VdbPostRequestBody} from './vdbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVdbPostRequestBody(vdbPostRequestBody: VdbPostRequestBody | undefined = {} as VdbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cost": n => { vdbPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "endPeriod": n => { vdbPostRequestBody.endPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "factor": n => { vdbPostRequestBody.factor = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "life": n => { vdbPostRequestBody.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "noSwitch": n => { vdbPostRequestBody.noSwitch = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { vdbPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startPeriod": n => { vdbPostRequestBody.startPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
