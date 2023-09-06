import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Hex2BinPostRequestBody } from './hex2BinPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoHex2BinPostRequestBody(hex2BinPostRequestBody: Hex2BinPostRequestBody | undefined = {} as Hex2BinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { hex2BinPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { hex2BinPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
