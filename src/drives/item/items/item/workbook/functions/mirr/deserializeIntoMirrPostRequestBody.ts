import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MirrPostRequestBody} from './mirrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMirrPostRequestBody(mirrPostRequestBody: MirrPostRequestBody | undefined = {} as MirrPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "financeRate": n => { mirrPostRequestBody.financeRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "reinvestRate": n => { mirrPostRequestBody.reinvestRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { mirrPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
