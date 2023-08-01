import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Dec2BinPostRequestBody} from './dec2BinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDec2BinPostRequestBody(writer: SerializationWriter, dec2BinPostRequestBody: Dec2BinPostRequestBody | undefined = {} as Dec2BinPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", dec2BinPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", dec2BinPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(dec2BinPostRequestBody.additionalData);
}
