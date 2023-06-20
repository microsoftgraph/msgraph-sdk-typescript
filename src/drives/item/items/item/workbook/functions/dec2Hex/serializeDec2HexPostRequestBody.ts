import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Dec2HexPostRequestBody} from './dec2HexPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDec2HexPostRequestBody(dec2HexPostRequestBody: Dec2HexPostRequestBody | undefined = {} as Dec2HexPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", dec2HexPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", dec2HexPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(dec2HexPostRequestBody.additionalData);
}
