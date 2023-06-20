import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Dec2OctPostRequestBody} from './dec2OctPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDec2OctPostRequestBody(dec2OctPostRequestBody: Dec2OctPostRequestBody | undefined = {} as Dec2OctPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", dec2OctPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", dec2OctPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(dec2OctPostRequestBody.additionalData);
}
