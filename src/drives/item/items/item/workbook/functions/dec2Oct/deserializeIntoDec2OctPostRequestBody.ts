import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Dec2OctPostRequestBody } from './dec2OctPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDec2OctPostRequestBody(dec2OctPostRequestBody: Dec2OctPostRequestBody | undefined = {} as Dec2OctPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { dec2OctPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { dec2OctPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
