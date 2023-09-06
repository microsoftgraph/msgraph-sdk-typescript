import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FvPostRequestBody } from './fvPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFvPostRequestBody(fvPostRequestBody: FvPostRequestBody | undefined = {} as FvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "nper": n => { fvPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pmt": n => { fvPostRequestBody.pmt = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { fvPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { fvPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { fvPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
