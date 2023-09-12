import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RriPostRequestBody } from './rriPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRriPostRequestBody(rriPostRequestBody: RriPostRequestBody | undefined = {} as RriPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { rriPostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { rriPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { rriPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
