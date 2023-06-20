import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Bin2HexPostRequestBody} from './bin2HexPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBin2HexPostRequestBody(bin2HexPostRequestBody: Bin2HexPostRequestBody | undefined = {} as Bin2HexPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", bin2HexPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", bin2HexPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(bin2HexPostRequestBody.additionalData);
}
