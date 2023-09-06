import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type NpvPostRequestBody } from './npvPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNpvPostRequestBody(npvPostRequestBody: NpvPostRequestBody | undefined = {} as NpvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "rate": n => { npvPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { npvPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
