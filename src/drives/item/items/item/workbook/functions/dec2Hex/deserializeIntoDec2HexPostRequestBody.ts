import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Dec2HexPostRequestBody } from './dec2HexPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDec2HexPostRequestBody(dec2HexPostRequestBody: Dec2HexPostRequestBody | undefined = {} as Dec2HexPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { dec2HexPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { dec2HexPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
