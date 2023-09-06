import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Bin2OctPostRequestBody } from './bin2OctPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBin2OctPostRequestBody(bin2OctPostRequestBody: Bin2OctPostRequestBody | undefined = {} as Bin2OctPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { bin2OctPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { bin2OctPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
