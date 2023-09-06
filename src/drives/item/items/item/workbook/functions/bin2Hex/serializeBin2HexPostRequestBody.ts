import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Bin2HexPostRequestBody } from './bin2HexPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBin2HexPostRequestBody(writer: SerializationWriter, bin2HexPostRequestBody: Bin2HexPostRequestBody | undefined = {} as Bin2HexPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", bin2HexPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", bin2HexPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(bin2HexPostRequestBody.additionalData);
}
