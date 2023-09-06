import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type NperPostRequestBody } from './nperPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNperPostRequestBody(nperPostRequestBody: NperPostRequestBody | undefined = {} as NperPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { nperPostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pmt": n => { nperPostRequestBody.pmt = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { nperPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { nperPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { nperPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
