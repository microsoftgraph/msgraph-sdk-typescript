import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Hex2OctPostRequestBody} from './hex2OctPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHex2OctPostRequestBody(hex2OctPostRequestBody: Hex2OctPostRequestBody | undefined = {} as Hex2OctPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { hex2OctPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { hex2OctPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
