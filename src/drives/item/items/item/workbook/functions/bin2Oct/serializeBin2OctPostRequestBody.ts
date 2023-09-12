import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Bin2OctPostRequestBody } from './bin2OctPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBin2OctPostRequestBody(writer: SerializationWriter, bin2OctPostRequestBody: Bin2OctPostRequestBody | undefined = {} as Bin2OctPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", bin2OctPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", bin2OctPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(bin2OctPostRequestBody.additionalData);
}
