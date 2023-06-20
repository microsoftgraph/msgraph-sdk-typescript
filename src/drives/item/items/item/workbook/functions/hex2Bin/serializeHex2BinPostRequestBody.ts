import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Hex2BinPostRequestBody} from './hex2BinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHex2BinPostRequestBody(hex2BinPostRequestBody: Hex2BinPostRequestBody | undefined = {} as Hex2BinPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", hex2BinPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", hex2BinPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(hex2BinPostRequestBody.additionalData);
}
