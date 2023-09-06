import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MirrPostRequestBody } from './mirrPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMirrPostRequestBody(mirrPostRequestBody: MirrPostRequestBody | undefined = {} as MirrPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "financeRate": n => { mirrPostRequestBody.financeRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "reinvestRate": n => { mirrPostRequestBody.reinvestRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { mirrPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
