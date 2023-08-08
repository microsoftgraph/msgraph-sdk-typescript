import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Hex2OctPostRequestBody} from './hex2OctPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHex2OctPostRequestBody(writer: SerializationWriter, hex2OctPostRequestBody: Hex2OctPostRequestBody | undefined = {} as Hex2OctPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", hex2OctPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", hex2OctPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(hex2OctPostRequestBody.additionalData);
}
