import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Hex2DecPostRequestBody } from './hex2DecPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHex2DecPostRequestBody(writer: SerializationWriter, hex2DecPostRequestBody: Hex2DecPostRequestBody | undefined = {} as Hex2DecPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", hex2DecPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(hex2DecPostRequestBody.additionalData);
}
